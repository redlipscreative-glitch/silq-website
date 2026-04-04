'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'

export default function Hero() {
  const t = useTranslations('home')
  const locale = useLocale()
  return (
    <section className="bg-gradient-to-br from-cream to-beige px-8 md:px-16 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <p className="text-xs tracking-widest uppercase text-sand mb-5">{t('eyebrow')}</p>
        <h1 className="font-heading text-5xl md:text-6xl tracking-widest2 text-nude mb-4">SILQ</h1>
        <p className="text-base italic tracking-wide text-nude-light mb-8">{t('tagline')}</p>
        <div className="flex gap-3 flex-wrap">
          <Link href={`/${locale}/shop`}><Button>{t('shopNow')}</Button></Link>
          <Link href={`/${locale}/about`}><Button variant="outline">{t('ourStory')}</Button></Link>
        </div>
      </div>
      <div className="flex-1 max-w-sm w-full">
        <div className="bg-beige rounded h-72 flex items-center justify-center text-xs tracking-widest uppercase text-sand">
          Product Photo
        </div>
      </div>
    </section>
  )
}
