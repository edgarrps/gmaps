import { useMap } from "react-leaflet"
import L from "leaflet"

export default function GetLocation() {
    const map = useMap()

    const success = (pos: L.SVGOverlayStyleOptions) => {
        const lat = pos.coords.latitude
        const lng = pos.coords.longitude
        const marker = L.marker([lat, lng]).addTo(map)
        const circle = L.circle([lat, lng]).addTo(map)

        if (marker) map.removeLayer(marker)

        map.fitBounds(circle.getBounds())
    }

    const error = (err: L.SVGOverlayStyleOptions) => {
        err.code == 1 ? alert('Ative as permissões de localização') : alert('Não foi possível coletar sua localização')
    }

    navigator.geolocation.watchPosition(success, error)

    return null
} 