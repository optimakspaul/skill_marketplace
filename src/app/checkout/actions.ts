'use server'

import { stripe } from '@/lib/stripe'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { skillPacks, bundles } from '@/lib/seed'

export async function createCheckoutSession(formData: FormData) {
  const productId = formData.get('productId') as string
  const pack = skillPacks.find((p) => p.id === productId)

  if (!pack) {
    throw new Error('Product not found')
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    // If user is not logged in, redirect to login
    redirect('/login')
  }

  // Create Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    customer_email: user.email,
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: pack.title,
            description: 'Optimaks Skill Pack',
          },
          unit_amount: Math.round(pack.price * 100), // Stripe expects amounts in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/library?success=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/checkout/${pack.id}?canceled=true`,
    metadata: {
      userId: user.id,
      productId: pack.id,
    },
  })

  if (session.url) {
    redirect(session.url)
  } else {
    throw new Error('Failed to create Stripe Checkout session')
  }
}

export async function createCartCheckoutSession(formData: FormData) {
  const productIdsString = formData.get('productIds') as string
  if (!productIdsString) {
    throw new Error('No products provided')
  }

  const productIds = productIdsString.split(',')
  const items = productIds.map(id => skillPacks.find(p => p.id === id) || bundles.find(b => b.id === id)).filter(Boolean) as any[]

  if (items.length === 0) {
    throw new Error('No valid products found')
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const regularItems = items.filter(item => !item.packIds)
  const twos = Math.floor(regularItems.length / 2)
  
  // Total discount in cents ($1.00 = 100 cents)
  let remainingDiscountCents = Math.round(twos * 100)

  const line_items = items.map(item => {
    let itemPriceCents = Math.round(item.price * 100)
    let discountLabel = ''

    // Apply discount progressively to items
    if (!item.packIds && remainingDiscountCents > 0) {
      // Keep at least 50 cents ($0.50) per item to satisfy Stripe's minimum amount if needed
      const maxDiscountForThisItem = itemPriceCents - 50
      const discountToApply = Math.min(remainingDiscountCents, maxDiscountForThisItem)
      
      if (discountToApply > 0) {
        itemPriceCents -= discountToApply
        remainingDiscountCents -= discountToApply
        discountLabel = ' (自動組合優惠)'
      }
    }

    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title + discountLabel,
          description: 'Optimaks Skill Pack',
        },
        unit_amount: itemPriceCents,
      },
      quantity: 1,
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    billing_address_collection: 'required',
    customer_email: user.email,
    line_items,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/library?success=true&clearCart=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cart?canceled=true`,
    metadata: {
      userId: user.id,
      productIds: productIdsString,
    },
  })

  if (session.url) {
    redirect(session.url)
  } else {
    throw new Error('Failed to create Stripe Checkout session')
  }
}

export async function masterBypassCheckout(formData: FormData) {
  const productIdsString = formData.get('productIds') as string
  if (!productIdsString) {
    throw new Error('No products provided')
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user || user.email !== 'kokotsai@gmail.com') {
    throw new Error('Unauthorized')
  }

  const rawIds = productIdsString.split(',')
  let idsToInsert: string[] = []

  for (const id of rawIds) {
    const bundle = bundles.find(b => b.id === id)
    if (bundle) {
      idsToInsert.push(...bundle.packIds)
    } else {
      idsToInsert.push(id)
    }
  }

  idsToInsert = Array.from(new Set(idsToInsert))

  const { createClient: createSupabaseClient } = await import('@supabase/supabase-js')
  const supabaseAdmin = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const records = idsToInsert.map(id => ({
    user_id: user.id,
    product_id: id,
    stripe_session_id: 'master_bypass_' + Date.now()
  }))

  const { error } = await supabaseAdmin.from('purchases').insert(records)
  if (error) {
    console.error('Master bypass error:', error)
    throw new Error('Failed to insert purchases')
  }

  redirect('/library?success=true&clearCart=true')
}
