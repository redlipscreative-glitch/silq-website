import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SILQ — Confidence is your second skin',
  description: 'Premium women\'s innerwear. Safety pants and body shaper. Shop SILQ SAFE and SILQ SHAPE.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
