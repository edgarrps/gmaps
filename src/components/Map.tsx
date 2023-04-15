'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import Form from './Form'

export default function App() {

  const coord: [number, number] = [-15.822630, -47.920683]

  return (
    <>
      <div className='flex h-[650px]'>
        <div className='flex-initial w-[400px] bg-stone-200'>
          <Form/>
        </div>
        <MapContainer center={(coord)} zoom={12} className='flex-1 w-64'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      <div className='h-[230px] overflow-y-auto bg-blue-200'/>
      </>
      )
}


