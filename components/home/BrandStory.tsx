'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function BrandStory() {
  const t = useTranslations('home')
  const locale = useLocale()
  return (
    <section className="bg-beige px-8 md:px-16 py-16 text-center">
      <div className="text-xs tracking-widest uppercase text-nude mb-5">Our Story</div>
      <blockquote className="text-base italic text-nude leading-8 max-w-xl mx-auto mb-6">
        "{t('storyQuote')}"
      </blockquote>
      <Link href={`/${locale}/about`}
        className="text-xs tracking-widest uppercase text-sand border-b border-sand pb-0.5 hover:opacity-70">
        {t('readMore')} →
      </Link>
    </section>
  )
}
