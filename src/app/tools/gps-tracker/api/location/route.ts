let latestLocation = { lat: 0, lng: 0 }

export async function GET() {
  return Response.json(latestLocation)
}

export async function POST(req: Request) {
  const data = await req.json()
  if (data.lat && data.lng) {
    latestLocation = { lat: data.lat, lng: data.lng }
    return Response.json({ status: 'success' })
  }
  return Response.json({ status: 'error', message: 'Invalid location' }, { status: 400 })
}
