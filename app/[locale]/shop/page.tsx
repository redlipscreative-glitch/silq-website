import { products } from '@/lib/products'
import ProductCard from '@/components/shop/ProductCard'
import SectionTitle from '@/components/ui/SectionTitle'

export default function ShopPage() {
  return (
    <div className="bg-cream min-h-screen px-8 md:px-16 py-8">
      <SectionTitle>Shop</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}
