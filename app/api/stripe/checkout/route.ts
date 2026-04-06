import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  const { name, email, phone, address, city, postcode, state, items, locale } = await req.json()

  if (!name || !email || !items?.length) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card', 'fpx', 'grabpay'],
    mode: 'payment',
    customer_email: email,
    line_items: items.map((item: { name: string; price: number; quantity: number; size: string }) => ({
      price_data: {
        currency: 'myr',
        product_data: {
          name: `${item.name} (Size: ${item.size})`,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    shipping_address_collection: {
      allowed_countries: ['MY'],
    },
    metadata: { name, phone, address, city, postcode, state },
    success_url: `${baseUrl}/${locale}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/${locale}/checkout`,
  })

  return NextResponse.json({ url: session.url })
}
