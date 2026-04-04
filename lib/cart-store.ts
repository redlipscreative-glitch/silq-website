import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CartItem = {
  productId: string
  name: string
  price: number
  size: string
  quantity: number
}

type CartStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  total: () => number
  count: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const existing = get().items.find(
          i => i.productId === item.productId && i.size === item.size
        )
        if (existing) {
          set(state => ({
            items: state.items.map(i =>
              i.productId === item.productId && i.size === item.size
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          }))
        } else {
          set(state => ({ items: [...state.items, item] }))
        }
      },
      removeItem: (productId, size) =>
        set(state => ({
          items: state.items.filter(i => !(i.productId === productId && i.size === size)),
        })),
      updateQuantity: (productId, size, quantity) =>
        set(state => ({
          items: state.items.map(i =>
            i.productId === productId && i.size === size ? { ...i, quantity } : i
          ),
        })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'silq-cart' }
  )
)
