'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


export const Map = () =>
(
    <MapContainer
        center={[-20.461473, -54.602045]}
        zoom={13}
        scrollWheelZoom={true}
        className='h-screen'
    >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-20.461473, -54.602045]}>
            <Popup>
                Project by Edgar Santos
            </Popup>
        </Marker>
    </MapContainer >
)