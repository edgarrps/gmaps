import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

import icon from "./constants";

export default function LeafletControlGeocoder() {
    const map = useMap();

    useEffect(() => {
        let geocoder = L.Control.Geocoder.nominatim();
        if (typeof URLSearchParams !== "undefined" && location.search) {
            // parse /?geocoder=nominatim from URL
            var params = new URLSearchParams(location.search);
            var geocoderString = params.get("geocoder");
            if (geocoderString && L.Control.Geocoder[geocoderString]) {
                geocoder = L.Control.Geocoder[geocoderString]();
            } else if (geocoderString) {
                console.warn("Unsupported geocoder", geocoderString);
            }
        }

        L.Control.geocoder({
            query: "",
            placeholder: "Pesquise aqui...",
            defaultMarkGeocode: false,
            geocoder
        })
            .on("markgeocode", function (e: { geocode: { center: any; name: ((layer: L.Layer) => L.Content) | L.Content | L.Popup; bbox: L.LatLngBoundsExpression; }; }) {
                let latlng = e.geocode.center;
                L.marker(latlng, { icon })
                    .addTo(map)
                    .bindPopup(e.geocode.name)
                    .openPopup();
                map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    }, []);

    return null;
}
