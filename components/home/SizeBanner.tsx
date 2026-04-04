'use client'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function SizeBanner() {
  const t = useTranslations('home')
  const locale = useLocale()
  return (
    <div className="bg-cream border-y border-beige px-8 py-5 flex items-center justify-between">
      <p className="text-sm text-nude-light">{t('sizeGuidePrompt')}</p>
      <Link href={`/${locale}/size-guide`}
        className="text-xs tracking-widest uppercase text-sand border-b border-sand pb-0.5 hover:opacity-70">
        {t('viewSizeGuide')} →
      </Link>
    </div>
  )
}
