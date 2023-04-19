import { useEffect } from "react"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import L from "leaflet"
import { useMap } from "react-leaflet"

export default function LeafletControlGeocoder() {
    const map = useMap()

    useEffect(() => {
        let geocoder = new (L.Control as any).geocoder({
            query: "",
            placeholder: "Pesquise aqui...",
            defaultMarkGeocode: true,
        })
        map.addControl(geocoder)
    }, []);
    return null;
}
