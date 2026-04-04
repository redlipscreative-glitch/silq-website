'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations('contact')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSent(true)
    setLoading(false)
  }

  const inputClass = 'w-full border border-beige rounded-sm px-4 py-3 text-sm text-nude bg-cream focus:outline-none focus:border-sand'

  return (
    <div className="min-h-screen bg-cream px-8 md:px-16 py-10">
      <SectionTitle>{t('title')}</SectionTitle>
      <div className="max-w-lg mx-auto">
        {sent ? (
          <div className="text-center py-10 text-sm text-nude-light">{t('successMessage')}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input required placeholder={t('namePlaceholder')} value={form.name} onChange={set('name')} className={inputClass} />
            <input required type="email" placeholder={t('emailPlaceholder')} value={form.email} onChange={set('email')} className={inputClass} />
            <textarea required rows={5} placeholder={t('messagePlaceholder')} value={form.message} onChange={set('message')}
              className={inputClass + ' resize-none'} />
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Sending...' : t('send')}
            </Button>
          </form>
        )}
        <div className="mt-8 pt-8 border-t border-beige text-sm text-nude-light text-center">
          <p>jeanie@lumarion.co</p>
          <p className="mt-1">
            <a href="https://wa.me/60134391788"
              className="text-sand hover:opacity-70 tracking-widest text-xs uppercase">
              WhatsApp Us →
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
