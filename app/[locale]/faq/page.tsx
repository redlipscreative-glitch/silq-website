'use client'
import { useState } from 'react'
import SectionTitle from '@/components/ui/SectionTitle'

const faqs = [
  { q: 'How do I choose the right size?', a: 'Please refer to our Size Guide page for detailed measurements. When in between sizes, we recommend sizing up for comfort.' },
  { q: 'What payment methods do you accept?', a: "We accept Credit/Debit Cards, FPX (online banking), Touch'n Go eWallet, and GrabPay." },
  { q: 'How long does delivery take?', a: 'West Malaysia: 3-5 business days. East Malaysia: 5-7 business days. Free shipping on all orders.' },
  { q: 'Can I return or exchange my order?', a: 'Yes! We accept returns and exchanges within 14 days of delivery. Items must be unworn, unwashed, and in original packaging.' },
  { q: 'How do I care for my SILQ product?', a: 'Machine wash cold on a gentle cycle. Do not tumble dry. Lay flat to dry. Do not iron directly on the fabric.' },
  { q: 'What is the difference between SILQ SAFE and SILQ SHAPE?', a: 'SILQ SAFE is a safety pants designed to prevent wardrobe malfunctions — perfect under skirts and dresses. SILQ SHAPE is a full body shaper that smooths and defines your silhouette.' },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="min-h-screen bg-cream px-8 md:px-16 py-10">
      <SectionTitle>FAQ</SectionTitle>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-beige">
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left py-5 flex justify-between items-center text-sm text-nude hover:text-sand transition-colors">
              <span className="tracking-wide">{faq.q}</span>
              <span className="text-sand text-lg ml-4">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p className="pb-5 text-sm text-nude-light leading-relaxed">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
