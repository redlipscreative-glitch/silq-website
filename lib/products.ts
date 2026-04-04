export type Product = {
  id: string
  slug: string
  line: string
  name: string
  descriptionEn: string
  descriptionMs: string
  price: number
  sizes: string[]
  images: string[]
}

export const products: Product[] = [
  {
    id: 'silq-safe',
    slug: 'silq-safe',
    line: 'Safety Pants',
    name: 'SILQ SAFE',
    descriptionEn: 'Stylish protection for the active, fashion-forward woman. Wear it under skirts and dresses with total confidence.',
    descriptionMs: 'Perlindungan bergaya untuk wanita aktif dan fesyen moden. Pakai di bawah skirt dan gaun dengan penuh keyakinan.',
    price: 59.00,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    images: ['/products/silq-safe-1.jpg'],
  },
  {
    id: 'silq-shape',
    slug: 'silq-shape',
    line: 'Body Shaper',
    name: 'SILQ SHAPE',
    descriptionEn: 'Everyday confidence, comfort, and beautiful curves. A seamless body shaper designed for the real woman.',
    descriptionMs: 'Keyakinan harian, keselesaan, dan lekuk tubuh yang cantik. Pembentuk badan tanpa jahitan untuk wanita sebenar.',
    price: 89.00,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: ['/products/silq-shape-1.jpg'],
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}
