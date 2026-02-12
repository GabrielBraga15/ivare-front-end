import MapView from "./components/MapView";
import SearchBox from "./components/SearchBox";
import FavoritesList from "./components/FavoritesList";
import SaveFavoriteModal from "./components/SaveFavoriteModal";

export default function App() {
  return (
    <div className="min-h-dvh bg-linear-to-b from-slate-50 to-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg font-semibold tracking-tight text-slate-900 md:text-xl">
                Mapa de Locais Favoritos
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Busque, clique no mapa e salve seus lugares preferidos.
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                Leaflet + OSM
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                React Query
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                Zustand
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-4 md:grid-cols-[380px_1fr] md:items-start">
          <aside className="space-y-4 ">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ">
              <SearchBox />
            </div>

            <div className="hidden md:block">
              <FavoritesList />
            </div>
          </aside>

          <section className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="flex items-center justify-between px-2 pb-3">
                <div className="text-sm font-semibold text-slate-900">Mapa</div>
                <div className="text-xs text-slate-600">
                  Dica: clique em um ponto para salvar
                </div>
              </div>
              <MapView />
            </div>

            <div className="md:hidden">
              <FavoritesList />
            </div>
          </section>
        </div>
      </main>

      <SaveFavoriteModal />
    </div>
  );
}
