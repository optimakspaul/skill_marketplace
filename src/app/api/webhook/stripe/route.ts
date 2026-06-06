import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { skillPacks, bundles } from '@/lib/seed'

// Note: we use the service role key to bypass RLS when inserting from backend
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature') as string
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  let event

  try {
    if (!sig || !webhookSecret) {
      // For local testing without CLI, if we don't have a webhook secret, we just parse it.
      // IN PRODUCTION: Always use constructEvent to verify the signature!
      event = JSON.parse(body)
    } else {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    }
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`)
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 })
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any

    const userId = session.metadata?.userId
    const productId = session.metadata?.productId // Legacy single item checkout
    const productIdsStr = session.metadata?.productIds // New cart checkout

    if (userId) {
      let idsToInsert: string[] = []
      
      if (productIdsStr) {
        const rawIds = productIdsStr.split(',')
        // Unroll bundles into actual skill packs
        for (const id of rawIds) {
          const bundle = bundles.find(b => b.id === id)
          if (bundle) {
            idsToInsert.push(...bundle.packIds)
          } else {
            idsToInsert.push(id)
          }
        }
      } else if (productId) {
        const bundle = bundles.find(b => b.id === productId)
        if (bundle) {
          idsToInsert.push(...bundle.packIds)
        } else {
          idsToInsert.push(productId)
        }
      }

      // Remove duplicates just in case
      idsToInsert = Array.from(new Set(idsToInsert))

      if (idsToInsert.length > 0) {
        // Insert purchase records into Supabase
        const records = idsToInsert.map(id => ({
          user_id: userId,
          product_id: id,
          stripe_session_id: session.id,
        }))

        const { error } = await supabaseAdmin
          .from('purchases')
          .insert(records)

        if (error) {
          console.error('Error inserting purchases:', error)
          return NextResponse.json({ error: 'Database insert failed' }, { status: 500 })
        }
      }
    }
  }

  return NextResponse.json({ received: true })
}
