'use client'
import Link from 'next/link'
import { useCart } from '@/lib/cart-store'
import CartItem from '@/components/cart/CartItem'
import CartSummary from '@/components/cart/CartSummary'
import Button from '@/components/ui/Button'
import { useLocale, useTranslations } from 'next-intl'

export default function CartPage() {
  const t = useTranslations('cart')
  const locale = useLocale()
  const items = useCart(s => s.items)

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center gap-6">
        <p className="text-nude-light tracking-widest text-sm">{t('empty')}</p>
        <Link href={`/${locale}/shop`}><Button>{t('continueShopping')}</Button></Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream px-8 md:px-16 py-10">
      <h1 className="font-heading text-2xl tracking-widest uppercase text-nude mb-8">{t('title')}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          {items.map(item => <CartItem key={`${item.productId}-${item.size}`} item={item} />)}
        </div>
        <div className="md:w-72"><CartSummary /></div>
      </div>
    </div>
  )
}
