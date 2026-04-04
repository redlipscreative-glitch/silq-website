'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useCart } from '@/lib/cart-store'
import { useLocale, useTranslations } from 'next-intl'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const count = useCart(s => s.count)()

  const toggleLocale = () => {
    const next = locale === 'en' ? 'ms' : 'en'
    const segments = pathname.split('/')
    segments[1] = next
    router.push(segments.join('/') || '/')
  }

  const navLink = (href: string, label: string) => (
    <Link href={`/${locale}${href}`}
      className="text-xs tracking-widest uppercase text-nude hover:text-sand transition-colors">
      {label}
    </Link>
  )

  return (
    <nav className="bg-cream border-b border-beige px-6 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href={`/${locale}`}>
        <Image src="/logo.png" alt="SILQ" width={80} height={40} className="object-contain" />
      </Link>
      <div className="hidden md:flex gap-8">
        {navLink('/shop', t('shop'))}
        {navLink('/about', t('about'))}
        {navLink('/size-guide', t('sizeGuide'))}
        {navLink('/faq', t('faq'))}
        {navLink('/contact', t('contact'))}
      </div>
      <div className="flex items-center gap-4">
        <button onClick={toggleLocale}
          className="text-xs tracking-widest bg-beige rounded-full px-3 py-1 text-nude hover:bg-sand hover:text-cream transition-colors">
          {locale === 'en' ? 'EN | BM' : 'BM | EN'}
        </button>
        <Link href={`/${locale}/cart`} className="relative text-sand">
          <span className="text-xl">🛍</span>
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-sand text-cream text-xs w-4 h-4 rounded-full flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}
