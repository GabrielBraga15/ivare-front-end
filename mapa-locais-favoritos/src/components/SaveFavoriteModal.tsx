import { useMemo, useState } from "react";
import { useMapStore } from "../stores/map.store";
import { useFavoritesStore } from "../stores/favorites.store";

function uid() {
  return crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random()}`;
}

export default function SaveFavoriteModal() {
  const selected = useMapStore((s) => s.selected);
  const clearSelected = useMapStore((s) => s.clearSelected);
  const addFavorite = useFavoritesStore((s) => s.addFavorite);

  const modalKey = useMemo(() => {
    if (!selected) return "none";
    return `${selected.lat.toFixed(6)}-${selected.lng.toFixed(6)}`;
  }, [selected]);

  const [name, setName] = useState("Local Favorito");

  if (!selected) return null;

  return (
    <div className="fixed inset-0 z-1000">
      <div className="absolute inset-0 bg-black/30" onClick={clearSelected} />
      <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-5 shadow-xl">
        <div className="text-lg font-semibold text-slate-900">Salvar local</div>
        <div className="mt-1 text-sm text-slate-600">
          Latitude/Longitude: {selected.lat.toFixed(6)},{" "}
          {selected.lng.toFixed(6)}
        </div>

        <label className="mt-4 block text-sm font-medium text-slate-700">
          Nome
        </label>
        <input
          key={modalKey}
          defaultValue="Local Favorito"
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-slate-200"
        />

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => {
              addFavorite({
                id: uid(),
                name: name.trim() || "Local Favorito",
                lat: selected.lat,
                lng: selected.lng,
              });
              clearSelected();
            }}
            className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={clearSelected}
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
