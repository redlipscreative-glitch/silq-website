'use client'
import { useState } from 'react'
import { Product } from '@/lib/products'
import { useCart } from '@/lib/cart-store'
import SizeSelector from './SizeSelector'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function ProductInfo({ product }: { product: Product }) {
  const t = useTranslations('product')
  const locale = useLocale()
  const [size, setSize] = useState('')
  const [added, setAdded] = useState(false)
  const addItem = useCart(s => s.addItem)

  const handleAdd = () => {
    if (!size) return
    addItem({ productId: product.id, name: product.name, price: product.price, size, quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="flex-1 px-6 py-8">
      <div className="text-xs tracking-widest uppercase text-sand mb-2">{product.line}</div>
      <h1 className="font-heading text-3xl tracking-widest uppercase text-nude mb-4">{product.name}</h1>
      <p className="text-sm text-nude-light leading-relaxed mb-6">
        {locale === 'ms' ? product.descriptionMs : product.descriptionEn}
      </p>
      <p className="text-xl font-semibold text-nude mb-6">RM {product.price.toFixed(2)}</p>
      <p className="text-xs tracking-widest uppercase text-nude mb-3">{t('selectSize')}</p>
      <SizeSelector sizes={product.sizes} selected={size} onSelect={setSize} />
      <Link href={`/${locale}/size-guide`}
        className="text-xs tracking-widest text-sand border-b border-sand pb-0.5 inline-block mt-2 mb-6 hover:opacity-70">
        {t('sizeGuide')} →
      </Link>
      <Button onClick={handleAdd} disabled={!size} className="w-full mt-2">
        {added ? '✓ Added!' : t('addToCart')}
      </Button>
    </div>
  )
}
