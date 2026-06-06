import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { skillPacks, bundles } from '@/lib/seed'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {
  const { data: existingProducts, error: selectError } = await supabaseAdmin.from('products').select('*')
  
  if (selectError) {
    return NextResponse.json({ error: selectError.message })
  }

  const records = skillPacks.map(p => ({
    id: p.id,
    name: p.title,
    price: p.price,
    description: p.description
  }))

  const bundleRecords = bundles.map(b => ({
    id: b.id,
    name: b.badgeText + ' ' + b.resultTitle,
    price: b.price,
    description: b.resultDesc
  }))

  const allRecords = [...records, ...bundleRecords]

  const { data, error } = await supabaseAdmin.from('products').upsert(allRecords)

  if (error) {
    return NextResponse.json({ error: error.message, existingProducts })
  }

  return NextResponse.json({ success: true, count: allRecords.length, existingProducts })
}
