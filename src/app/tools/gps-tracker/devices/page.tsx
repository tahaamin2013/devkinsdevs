'use client'
import { useEffect, useState } from 'react'

export default function DevicesPage() {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    const fetchLocation = async () => {
      const res = await fetch('/api/location')
      const data = await res.json()
      setLocation(data)
    }

    fetchLocation()
    const interval = setInterval(fetchLocation, 5000) // poll every 5 sec
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">📍 Mobile's Live Location</h1>
      {location ? (
        <div>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
