import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { useEffect } from "react";
import { useMapStore } from "../stores/map.store";

function FlyTo({ center, zoom }: { center: LatLngExpression; zoom: number }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, zoom, { animate: true, duration: 1.2 });
  }, [map, center, zoom]);

  return null;
}

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

export default function MapView({ theme }: { theme: "light" | "dark" }) {
  const center = useMapStore((s) => s.center);
  const zoom = useMapStore((s) => s.zoom);
  const selected = useMapStore((s) => s.selected);
  const marker = useMapStore((s) => s.marker);
  const setSelected = useMapStore((s) => s.setSelected);

  const mapCenter: LatLngExpression = [center.lat, center.lng];

  return (
    <div className="h-[60vh] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white md:h-[72vh] dark:border-slate-800 dark:bg-slate-900">
      <MapContainer center={mapCenter} zoom={zoom} className="h-full w-full">
        <TileLayer
          key={theme}
          attribution="&copy; OpenStreetMap &copy; CARTO"
          url={
            theme === "dark"
              ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          }
        />

        <FlyTo center={mapCenter} zoom={zoom} />
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
