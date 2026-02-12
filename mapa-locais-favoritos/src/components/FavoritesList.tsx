import { useFavoritesStore } from "../stores/favorites.store";
import { useMapStore } from "../stores/map.store";

export default function FavoritesList() {
  const favorites = useFavoritesStore((s) => s.favorites);
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite);
  const clearFavorites = useFavoritesStore((s) => s.clearFavorites);

  const setCenter = useMapStore((s) => s.setCenter);
  const setMarker = useMapStore((s) => s.setMarker);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="text-base font-semibold text-slate-900">Favoritos</div>
        <button
          type="button"
          onClick={clearFavorites}
          className="text-xs font-semibold text-slate-600 hover:text-slate-900"
          disabled={!favorites.length}
        >
          Limpar
        </button>
      </div>

      {!favorites.length ? (
        <div className="mt-3 rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-600">
          Nenhum favorito salvo ainda.
        </div>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {favorites.map((f) => (
            <div
              key={f.id}
              className="flex items-center gap-2 rounded-xl border border-slate-100 p-3"
            >
              <button
                type="button"
                onClick={() => {
                  setCenter(f.lat, f.lng, 16);
                  setMarker(f.lat, f.lng);
                }}
                className="flex-1 text-left"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {f.name}
                </div>
                <div className="text-xs text-slate-600">
                  {f.lat.toFixed(6)}, {f.lng.toFixed(6)}
                </div>
              </button>

              <button
                type="button"
                onClick={() => removeFavorite(f.id)}
                className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
