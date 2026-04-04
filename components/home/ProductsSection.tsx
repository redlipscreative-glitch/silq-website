'use client'
import { products } from '@/lib/products'
import ProductCard from '@/components/shop/ProductCard'
import SectionTitle from '@/components/ui/SectionTitle'
import { useTranslations } from 'next-intl'

export default function ProductsSection() {
  const t = useTranslations('home')
  return (
    <section className="bg-cream px-8 md:px-16 pb-16">
      <SectionTitle>{t('ourProducts')}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
