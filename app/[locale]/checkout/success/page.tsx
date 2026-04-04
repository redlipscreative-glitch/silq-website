import Link from 'next/link'
import Button from '@/components/ui/Button'
import { getTranslations } from 'next-intl/server'

export default async function SuccessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('checkout')
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-6 px-8 text-center">
      <div className="text-4xl">&#10003;</div>
      <h1 className="font-heading text-2xl tracking-widest uppercase text-nude">{t('successTitle')}</h1>
      <p className="text-sm text-nude-light max-w-sm leading-relaxed">{t('successMessage')}</p>
      <Link href={`/${locale}/shop`}><Button>Continue Shopping</Button></Link>
    </div>
  )
}
