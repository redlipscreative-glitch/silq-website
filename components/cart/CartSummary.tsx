'use client'
import Link from 'next/link'
import { useCart } from '@/lib/cart-store'
import Button from '@/components/ui/Button'
import { useLocale, useTranslations } from 'next-intl'

export default function CartSummary() {
  const t = useTranslations('cart')
  const locale = useLocale()
  const total = useCart(s => s.total)()
  return (
    <div className="bg-beige rounded p-6 sticky top-24">
      <div className="text-xs tracking-widest uppercase text-nude mb-4">{t('orderSummary')}</div>
      <div className="flex justify-between text-sm text-nude-light mb-2">
        <span>{t('subtotal')}</span><span>RM {total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm text-nude-light mb-4">
        <span>{t('shipping')}</span><span>{t('free')}</span>
      </div>
      <div className="border-t border-sand pt-4 flex justify-between font-semibold text-nude mb-6">
        <span>{t('total')}</span><span>RM {total.toFixed(2)}</span>
      </div>
      <Link href={`/${locale}/checkout`}>
        <Button className="w-full">{t('checkout')}</Button>
      </Link>
    </div>
  )
}
