'use client'
import { useEffect } from 'react'

export default function MobilePage() {
  useEffect(() => {
    const sendLocation = () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        fetch('/api/location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          }),
        })
      })
    }

    sendLocation()
    const interval = setInterval(sendLocation, 5000) // update every 5 sec
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold">📡 Mobile: Sharing Location</h1>
    </div>
  )
}
