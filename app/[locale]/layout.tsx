import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()
  return (
    <html lang={locale}>
      <body className="bg-cream min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
