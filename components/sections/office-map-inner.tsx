'use client'

import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const offices = [
  {
    name: 'Mumbai Office',
    position: [19.076, 72.8777] as [number, number],
    address: '309, Crescent Business Square, Khairani Rd, Saki Naka, Mumbai 400072',
  },
  {
    name: 'Bengaluru Office',
    position: [13.065, 77.597] as [number, number],
    address: '191, 2nd Floor, Appanna Building, Jakkuru, Bengaluru 560064',
  },
]

const center: [number, number] = [16.07, 75.23]

export default function OfficeMapInner() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }, [])

  return (
    <MapContainer
      center={center}
      zoom={5}
      className="h-80 rounded-xl z-0"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offices.map((office) => (
        <Marker key={office.name} position={office.position}>
          <Popup>
            <strong>{office.name}</strong>
            <br />
            {office.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
