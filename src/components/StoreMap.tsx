"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Store } from "../types/store";

interface Props {
  stores: Store[];
}

interface StoreMapProps {
  stores: {
    id: string;
    name: string;
    lat: number;
    lng: number;
  }[];
}

export default function StoreMap({ stores }: Props) {
  return (
    <MapContainer center={[44.65, -63.6]} zoom={7} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {stores.map(store => (
        <Marker key={store.id} position={[store.coords.lat, store.coords.lng]}>
          <Popup>
            <strong>{store.name}</strong>
            <br />
            {store.type}
            <br />
            {store.website && <a href={store.website} target="_blank">Website</a>}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
