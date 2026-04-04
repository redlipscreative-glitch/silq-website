import { NextRequest, NextResponse } from 'next/server'
import { createBill } from '@/lib/billplz'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, phone, total, locale } = body

  if (!name || !email || !phone || !total) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const bill = await createBill({
    name,
    email,
    phone,
    amount: Math.round(total * 100),
    description: 'SILQ Order',
    callbackUrl: `${baseUrl}/api/billplz/callback`,
    redirectUrl: `${baseUrl}/${locale}/checkout/success`,
  })

  return NextResponse.json({ billUrl: bill.url })
}
