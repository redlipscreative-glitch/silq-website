'use client'
import { useState } from 'react'
import { useCart } from '@/lib/cart-store'
import Button from '@/components/ui/Button'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const PAYMENT_METHODS = [
  { id: 'card', label: 'Credit / Debit Card' },
  { id: 'fpx', label: 'FPX (Online Banking)' },
  { id: 'tng', label: "Touch 'n Go eWallet" },
  { id: 'grabpay', label: 'GrabPay' },
]

export default function CheckoutPage() {
  const t = useTranslations('checkout')
  const locale = useLocale()
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', postcode: '', state: '', payment: 'fpx'
  })

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('/api/billplz/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, total: total(), locale }),
    })
    const { billUrl } = await res.json()
    clearCart()
    window.location.href = billUrl
  }

  const inputClass = 'w-full border border-beige rounded-sm px-4 py-3 text-sm text-nude bg-cream focus:outline-none focus:border-sand'

  return (
    <div className="min-h-screen bg-cream px-8 md:px-16 py-10 max-w-2xl mx-auto">
      <h1 className="font-heading text-2xl tracking-widest uppercase text-nude mb-8">{t('title')}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required placeholder={t('name')} value={form.name} onChange={set('name')} className={inputClass} />
        <input required type="email" placeholder={t('email')} value={form.email} onChange={set('email')} className={inputClass} />
        <input required placeholder={t('phone')} value={form.phone} onChange={set('phone')} className={inputClass} />
        <input required placeholder={t('address')} value={form.address} onChange={set('address')} className={inputClass} />
        <div className="grid grid-cols-2 gap-4">
          <input required placeholder={t('city')} value={form.city} onChange={set('city')} className={inputClass} />
          <input required placeholder={t('postcode')} value={form.postcode} onChange={set('postcode')} className={inputClass} />
        </div>
        <input required placeholder={t('state')} value={form.state} onChange={set('state')} className={inputClass} />

        <div className="mt-2">
          <p className="text-xs tracking-widest uppercase text-nude mb-3">{t('paymentMethod')}</p>
          <div className="flex flex-col gap-2">
            {PAYMENT_METHODS.map(m => (
              <label key={m.id} className={`flex items-center gap-3 p-3 border rounded-sm cursor-pointer transition-colors
                ${form.payment === m.id ? 'border-sand bg-beige' : 'border-beige bg-cream hover:border-sand'}`}>
                <input type="radio" name="payment" value={m.id} checked={form.payment === m.id}
                  onChange={set('payment')} className="accent-sand" />
                <span className="text-sm text-nude">{m.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-beige rounded p-4 mt-2">
          <div className="flex justify-between text-sm text-nude-light mb-1">
            <span>Subtotal</span><span>RM {total().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-nude-light mb-3">
            <span>Shipping</span><span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-nude border-t border-sand pt-3">
            <span>Total</span><span>RM {total().toFixed(2)}</span>
          </div>
        </div>

        <Button type="submit" disabled={loading} className="w-full mt-2">
          {loading ? 'Redirecting...' : t('placeOrder')}
        </Button>
      </form>
    </div>
  )
}
