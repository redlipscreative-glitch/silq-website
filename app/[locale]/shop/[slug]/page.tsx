import { getProduct, products } from '@/lib/products'
import { notFound } from 'next/navigation'
import ProductInfo from '@/components/product/ProductInfo'
import ProductCard from '@/components/shop/ProductCard'
import SectionTitle from '@/components/ui/SectionTitle'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()
  const related = products.filter(p => p.slug !== slug)

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="bg-beige h-96 flex items-center justify-center text-xs tracking-widest uppercase text-sand">
            Product Photo
          </div>
        </div>
        <ProductInfo product={product} />
      </div>
      {related.length > 0 && (
        <div className="px-8 md:px-16 pb-16">
          <SectionTitle>You May Also Like</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  )
}
