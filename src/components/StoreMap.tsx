"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function StoreMap({ stores }) {
  return (
    <MapContainer
      center={[44.65, -63.57]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {stores
        .filter((s) => s.coords?.lat && s.coords?.lng)
        .map((store) => (
          <Marker
            key={store.id}
            position={[store.coords.lat, store.coords.lng]}
          >
            <Popup>{store.name}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
