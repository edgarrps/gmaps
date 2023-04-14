'use client'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export default function App() {

  const coord: [number, number] = [-15.822630, -47.920683]
  
  return (
    <div className='flex'>
      <div className='w-[25%] h-[800px] bg-stone-200'/>
      <MapContainer center={(coord)} zoom={3} className='h-[800px] w-[80%] bottom-[50%]'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord}>
        </Marker>
      </MapContainer>
    </div>
  )
}


