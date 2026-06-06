import { createClient } from '@/utils/supabase/server'
import { redirect, notFound } from 'next/navigation'
import Link from 'next/link'
import styles from './page.module.css'
import { skillPacks } from '@/lib/seed'
import SkillPackViewer from '@/components/ui/SkillPackViewer'

export default async function LibraryViewerPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const packId = resolvedParams.id;

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Check if user has purchased this pack
  const { data: purchases, error } = await supabase
    .from('purchases')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_id', packId)
    .limit(1)

  // For testing purposes, if you want to bypass this check during dev, you can comment this out:
  if (error || !purchases || purchases.length === 0) {
    console.error("Authorization check failed:", error);
    redirect('/library?error=unauthorized')
  }

  const pack = skillPacks.find(p => p.id === packId)

  if (!pack) {
    notFound()
  }

  return <SkillPackViewer pack={pack} />
}
