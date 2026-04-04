'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/products'
import Button from '@/components/ui/Button'
import { useLocale, useTranslations } from 'next-intl'

export default function ProductCard({ product }: { product: Product }) {
  const t = useTranslations('product')
  const locale = useLocale()
  return (
    <div className="bg-cream border border-beige rounded overflow-hidden">
      <Link href={`/${locale}/shop/${product.slug}`}>
        <div className="bg-beige h-56 flex items-center justify-center text-xs tracking-widest uppercase text-sand">
          {product.images[0]
            ? <Image src={product.images[0]} alt={product.name} width={300} height={224} className="object-cover w-full h-full" />
            : 'Product Photo'}
        </div>
      </Link>
      <div className="p-5">
        <div className="text-xs tracking-widest uppercase text-sand mb-1">{product.line}</div>
        <div className="font-heading text-base tracking-widest uppercase text-nude mb-2">{product.name}</div>
        <div className="text-sm text-nude-light mb-4 leading-relaxed">
          {locale === 'ms' ? product.descriptionMs : product.descriptionEn}
        </div>
        <div className="text-base font-semibold text-nude mb-3">RM {product.price.toFixed(2)}</div>
        <Link href={`/${locale}/shop/${product.slug}`}>
          <Button className="w-full">{t('addToCart')}</Button>
        </Link>
      </div>
    </div>
  )
}
