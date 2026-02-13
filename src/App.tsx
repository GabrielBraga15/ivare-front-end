import MapView from "./components/MapView";
import SearchBox from "./components/SearchBox";
import FavoritesList from "./components/FavoritesList";
import SaveFavoriteModal from "./components/SaveFavoriteModal";
import { useTheme } from "./hooks/useTheme";
import BackgroundDecor from "./components/BackgroundDecor";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative min-h-dvh">
      <BackgroundDecor />
      <header
        className=" top-0 z-9999 relative transform-gpu border-b border-slate-200/70 bg-white/80 backdrop-blur
             dark:border-slate-800/70 dark:bg-slate-950/70"
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-lg uppercase font-semibold tracking-tight text-slate-900 md:text-xl dark:text-slate-100">
                Mapa de Locais Favoritos
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Busque, clique no mapa e salve seus lugares preferidos.
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="rounded-2xl border dark:text-slate-100 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm px-3 py-1">
                Leaflet + OSM
              </div>
              <div className="rounded-2xl dark:text-slate-100 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm px-3 py-1">
                React Query
              </div>
              <div className="rounded-2xl border dark:text-slate-100 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm px-3 py-1">
                Zustand
              </div>
            </div>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-sm font-semibold
             bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100
             hover:bg-slate-50 dark:hover:bg-slate-700 transition"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <div className="grid gap-4 md:grid-cols-[380px_1fr] md:items-start">
          <aside className="space-y-4 ">
            <div
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm
                dark:border-slate-800 dark:bg-slate-900"
            >
              <SearchBox />
            </div>

            <div className="hidden md:block ">
              <FavoritesList />
            </div>
          </aside>

          <section className="space-y-4">
            <div
              className="rounded-2xl border  border-slate-200 bg-white p-3 shadow-sm
                dark:border-slate-800/70 dark:bg-slate-900"
            >
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Mapa
              </div>
              <div className="text-xs pb-2 text-slate-600 dark:text-slate-300">
                Dica: clique em um ponto para salvar
              </div>
              <MapView theme={theme} />
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
