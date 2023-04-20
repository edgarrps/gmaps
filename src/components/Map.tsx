'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import LeafletControlGeocoder from "./Location/LeafletControlGeocoder"
import GetLocation from './Location/GetLocation'
import GeoSearch from './Location/GeoSearch'

export default function App() {

  return (
    <>
      <script src="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.umd.js"></script>
      <div className='flex h-screen'>
        <MapContainer center={[0, 0]} zoom={3} className='flex-1 w-64' >
          <GetLocation />
          {/* <LeafletControlGeocoder /> */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoSearch />
        </MapContainer>
      </div>
    </>
  )
}
