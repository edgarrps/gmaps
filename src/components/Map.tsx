'use client'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'

export default function App() {
  return (
    <div>
      <MapContainer center={[0, 0]} zoom={3} className='h-screen'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[0, 0]}>
          <Popup>
            Project by Edgar Santos
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}


