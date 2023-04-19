'use client'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
// import Form from './Form'
import LeafletControlGeocoder from "./Geocoder/LeafletControlGeocoder"
import GetLocation from './Geocoder/GetLocation'
import L from 'leaflet'

export default function App() {

  return (
    <>
      <div className='flex h-screen'>
        <MapContainer center={[0,0]} zoom={3} className='flex-1 w-64' >
          <GetLocation />
          <LeafletControlGeocoder />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </>
  )
}


