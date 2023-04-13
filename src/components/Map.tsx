'use client'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export default function App() {
  return (
    <div>
      <MapContainer center={[-15.822630, -47.920683]} zoom={3} className='h-screen'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-15.822630, -47.920683]}>
        </Marker>
      </MapContainer>
    </div>
  )
}


