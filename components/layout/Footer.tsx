'use client'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Footer() {
  const locale = useLocale()
  const link = (href: string, label: string) => (
    <Link href={`/${locale}${href}`} className="text-sm text-beige hover:text-cream transition-colors">{label}</Link>
  )
  return (
    <footer>
      <div className="bg-nude px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="font-heading text-xl tracking-widest2 text-cream mb-2">SILQ</div>
          <div className="text-xs tracking-widest text-sand mb-4">Confidence is your second skin.</div>
          <div className="flex gap-2 flex-wrap">
            {['VISA', 'FPX', 'TnG', 'Grab'].map(p => (
              <span key={p} className="bg-beige text-nude text-xs px-2 py-1 rounded font-bold">{p}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-sand mb-3">Shop</div>
          <div className="flex flex-col gap-2">
            {link('/shop/silq-safe', 'SILQ SAFE')}
            {link('/shop/silq-shape', 'SILQ SHAPE')}
            {link('/size-guide', 'Size Guide')}
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-sand mb-3">Info</div>
          <div className="flex flex-col gap-2">
            {link('/about', 'About Us')}
            {link('/faq', 'FAQ')}
            {link('/contact', 'Contact')}
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest uppercase text-sand mb-3">Follow Us</div>
          <div className="flex flex-col gap-2">
            <a href="https://instagram.com/silq.my" target="_blank" rel="noopener noreferrer" className="text-sm text-beige hover:text-cream">Instagram</a>
            <a href="https://tiktok.com/@silq.my" target="_blank" rel="noopener noreferrer" className="text-sm text-beige hover:text-cream">TikTok</a>
            <a href="https://facebook.com/silq.my" target="_blank" rel="noopener noreferrer" className="text-sm text-beige hover:text-cream">Facebook</a>
          </div>
        </div>
      </div>
      <div className="bg-nude-light px-8 py-3 flex justify-between text-xs text-beige">
        <span>© 2026 SILQ. All rights reserved.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  )
}
