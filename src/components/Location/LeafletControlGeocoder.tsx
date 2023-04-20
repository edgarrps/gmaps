import { useEffect } from 'react'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import L from 'leaflet'
import { useMap } from 'react-leaflet'
import icon from './constants'

export default function LeafletControlGeocoder() {
    const map = useMap()

    useEffect(() => {
        var geocoder = (L.Control as any).Geocoder.nominatim()
        if (typeof URLSearchParams !== 'undefined' && location.search) {
            // parse /?geocoder=nominatim from URL
            var params = new URLSearchParams(location.search)
            var geocoderString = params.get('geocoder')
            if (geocoderString && (L.Control as any).Geocoder[geocoderString]) {
                geocoder = (L.Control as any).Geocoder[geocoderString]()
            } else if (geocoderString) {
                console.warn('Geocoder não suportado', geocoderString)
            }
        }

        (L.Control as any).geocoder({
            query: '',
            placeholder: 'Pesquise aqui...',
            defaultMarkGeocode: false,
            geocoder
        })
            .on('markgeocode', function (e: { geocode: { center: any; name: ((layer: L.Layer) => L.Content) | L.Content | L.Popup; bbox: L.LatLngBoundsExpression } }) {
                var latlng = e.geocode.center
                L.marker(latlng, { icon })
                    .addTo(map)
                    .bindPopup(e.geocode.name)
                    .openPopup()
                map.fitBounds(e.geocode.bbox)
            })
            .addTo(map)
    }, []);

    return null
}

