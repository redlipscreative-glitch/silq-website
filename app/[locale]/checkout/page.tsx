'use client'
import { useState } from 'react'
import { useCart } from '@/lib/cart-store'
import Button from '@/components/ui/Button'
import { useLocale, useTranslations } from 'next-intl'

export default function CheckoutPage() {
  const t = useTranslations('checkout')
  const locale = useLocale()
  const { items, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        items: items.map(i => ({ name: i.name, price: i.price, quantity: i.quantity, size: i.size })),
        locale,
      }),
    })
    const { url, error } = await res.json()
    if (error || !url) { setLoading(false); return }
    clearCart()
    window.location.href = url
  }

  const inputClass = 'w-full border border-beige rounded-sm px-4 py-3 text-sm text-nude bg-cream focus:outline-none focus:border-sand'

  return (
    <div className="min-h-screen bg-cream px-8 md:px-16 py-10 max-w-xl mx-auto">
      <h1 className="font-heading text-2xl tracking-widest uppercase text-nude mb-2">{t('title')}</h1>
      <p className="text-sm text-nude-light mb-8">You&apos;ll enter your delivery address on the next step.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required placeholder={t('name')} value={form.name} onChange={set('name')} className={inputClass} />
        <input required type="email" placeholder={t('email')} value={form.email} onChange={set('email')} className={inputClass} />
        <input required placeholder={t('phone')} value={form.phone} onChange={set('phone')} className={inputClass} />

        <div className="bg-beige rounded p-4 mt-2">
          <div className="text-xs tracking-widest uppercase text-nude mb-3">Order Summary</div>
          {items.map(item => (
            <div key={`${item.productId}-${item.size}`} className="flex justify-between text-sm text-nude-light mb-1">
              <span>{item.name} &times; {item.quantity} <span className="text-xs">(Size {item.size})</span></span>
              <span>RM {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-sand pt-3 mt-2 flex justify-between font-semibold text-nude">
            <span>Total</span>
            <span>RM {items.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)}</span>
          </div>
        </div>

        <Button type="submit" disabled={loading || items.length === 0} className="w-full mt-2">
          {loading ? 'Redirecting to payment...' : 'Pay with Stripe \u2192'}
        </Button>
        <p className="text-xs text-center text-nude-light">Secured by Stripe. Accepts cards, FPX, GrabPay.</p>
      </form>
    </div>
  )
}
