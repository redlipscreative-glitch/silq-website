import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.formData()
  const paid = body.get('paid') === 'true'
  const billId = body.get('id') as string
  console.log(`Billplz callback: bill ${billId} paid=${paid}`)
  return NextResponse.json({ ok: true })
}
