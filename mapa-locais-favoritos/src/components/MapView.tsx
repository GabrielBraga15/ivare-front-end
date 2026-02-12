import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet";

import { useMapStore } from "../stores/map.store";

function ClickHandler({
  onPick,
}: {
  onPick: (lat: number, lng: number) => void;
}) {
  useMapEvents({
    click(e) {
      onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return null;
}

export default function MapView() {
  const center = useMapStore((s) => s.center);
  const zoom = useMapStore((s) => s.zoom);
  const selected = useMapStore((s) => s.selected);
  const marker = useMapStore((s) => s.marker);
  const setSelected = useMapStore((s) => s.setSelected);

  const mapCenter: LatLngExpression = [center.lat, center.lng];

  return (
    <div className="h-[60vh] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[72vh]">
      <MapContainer center={mapCenter} zoom={zoom} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler onPick={(lat, lng) => setSelected(lat, lng)} />

        {marker ? (
          <Marker position={[marker.lat, marker.lng]}>
            <Popup>Local encontrado</Popup>
          </Marker>
        ) : null}

        {selected ? (
          <Marker position={[selected.lat, selected.lng]}>
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">Selecionado</div>
                <div className="mt-1 text-xs">
                  {selected.lat.toFixed(6)}, {selected.lng.toFixed(6)}
                </div>
              </div>
            </Popup>
          </Marker>
        ) : null}
      </MapContainer>
    </div>
  );
}
