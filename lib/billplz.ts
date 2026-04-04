const BILLPLZ_API_KEY = process.env.BILLPLZ_API_KEY!
const BILLPLZ_COLLECTION_ID = process.env.BILLPLZ_COLLECTION_ID!
const BILLPLZ_BASE_URL = process.env.BILLPLZ_SANDBOX === 'true'
  ? 'https://billplz-staging.herokuapp.com/api/v3'
  : 'https://www.billplz.com/api/v3'

export type BillplzBill = {
  id: string
  url: string
  state: string
}

export async function createBill(params: {
  name: string
  email: string
  phone: string
  amount: number
  description: string
  callbackUrl: string
  redirectUrl: string
}): Promise<BillplzBill> {
  const credentials = Buffer.from(`${BILLPLZ_API_KEY}:`).toString('base64')
  const res = await fetch(`${BILLPLZ_BASE_URL}/bills`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      collection_id: BILLPLZ_COLLECTION_ID,
      email: params.email,
      mobile: params.phone,
      name: params.name,
      amount: params.amount,
      description: params.description,
      callback_url: params.callbackUrl,
      redirect_url: params.redirectUrl,
    }),
  })
  if (!res.ok) throw new Error(`Billplz error: ${res.status}`)
  const data = await res.json()
  return { id: data.id, url: data.url, state: data.state }
}
