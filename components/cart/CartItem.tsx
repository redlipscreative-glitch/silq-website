'use client'
import { CartItem as CartItemType, useCart } from '@/lib/cart-store'
import { useTranslations } from 'next-intl'

export default function CartItem({ item }: { item: CartItemType }) {
  const t = useTranslations('cart')
  const { removeItem, updateQuantity } = useCart()
  return (
    <div className="flex items-center gap-4 py-4 border-b border-beige">
      <div className="bg-beige w-20 h-20 rounded flex items-center justify-center text-xs text-sand">Photo</div>
      <div className="flex-1">
        <div className="font-heading text-sm tracking-widest uppercase text-nude">{item.name}</div>
        <div className="text-xs text-nude-light mt-1">Size: {item.size}</div>
        <div className="text-sm text-nude mt-1">RM {item.price.toFixed(2)}</div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => updateQuantity(item.productId, item.size, Math.max(1, item.quantity - 1))}
          className="w-7 h-7 border border-beige text-nude rounded-sm hover:border-sand">−</button>
        <span className="w-6 text-center text-sm text-nude">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
          className="w-7 h-7 border border-beige text-nude rounded-sm hover:border-sand">+</button>
      </div>
      <button onClick={() => removeItem(item.productId, item.size)}
        className="text-xs tracking-widest uppercase text-nude-light hover:text-nude ml-2">
        {t('remove')}
      </button>
    </div>
  )
}
