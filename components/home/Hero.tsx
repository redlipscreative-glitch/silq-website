'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import Button from '@/components/ui/Button'

export default function Hero() {
  const t = useTranslations('home')
  const locale = useLocale()
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background: two product images side by side */}
      <div className="absolute inset-0 flex">
        <div className="relative flex-1">
          <Image src="/products/silq-safe-1.png" alt="SILQ SAFE" fill className="object-cover" priority />
        </div>
        <div className="relative flex-1">
          <Image src="/products/silq-shape-1.png" alt="SILQ SHAPE" fill className="object-cover" priority />
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-nude/50" />
      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 py-20">
        <p className="text-xs tracking-widest uppercase text-beige mb-5">{t('eyebrow')}</p>
        <h1 className="font-heading text-5xl md:text-6xl tracking-widest2 text-cream mb-4">SILQ</h1>
        <p className="text-base italic tracking-wide text-beige mb-8">{t('tagline')}</p>
        <div className="flex gap-3 flex-wrap">
          <Link href={`/${locale}/shop`}><Button>{t('shopNow')}</Button></Link>
          <Link href={`/${locale}/about`}><Button variant="outline">{t('ourStory')}</Button></Link>
        </div>
      </div>
    </section>
  )
}
