import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'SILQ — Confidence is your second skin', template: '%s | SILQ' },
  description: "Premium Malaysian women's innerwear. SILQ SAFE safety pants and SILQ SHAPE body shaper. Shop online with free shipping.",
  keywords: ['safety pants Malaysia', 'body shaper Malaysia', 'SILQ', 'innerwear', 'seluar keselamatan'],
  openGraph: {
    title: 'SILQ — Confidence is your second skin',
    description: 'Premium Malaysian women\'s innerwear. Free shipping nationwide.',
    images: ['/logo.png'],
    locale: 'en_MY',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html><body>{children}</body></html>
}
