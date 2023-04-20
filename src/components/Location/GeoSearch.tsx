import 'node_modules/leaflet-geosearch/dist/geosearch.css'
import { OpenStreetMapProvider, GeoSearchControl } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';

export default function GeoSearch() {
  const map = useMap()
  const search = new (GeoSearchControl as any)({
    provider: new OpenStreetMapProvider(),
    placeholder: 'Pesquise aqui...'
  })
  map.addControl(search)

  return null
}