import { useDeferredValue, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { geocode } from "../services/geocoding";
import { useMapStore } from "../stores/map.store";

function SkeletonRow() {
  return (
    <div className="px-4 py-3">
      <div className="h-4 w-24 rounded bg-slate-200/70" />
      <div className="mt-2 h-3 w-full rounded bg-slate-200/60" />
    </div>
  );
}

export default function SearchBox() {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);
  const q = useMemo(() => deferredText.trim(), [deferredText]);

  const setCenter = useMapStore((s) => s.setCenter);
  const setMarker = useMapStore((s) => s.setMarker);

  const query = useQuery({
    queryKey: ["geocode", q],
    queryFn: () => geocode(q),
    enabled: q.length >= 3,
  });

  const resultsCount = query.data?.length ?? 0;
  const showResults = resultsCount > 0 && !query.isError;

  const rowPx = 64;
  const basePx = 8;
  const maxRows = 6;
  const rows = Math.min(resultsCount, maxRows);

  const targetMaxHeight = query.isFetching
    ? basePx + rowPx * 3
    : showResults
      ? basePx + rowPx * rows
      : 0;

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-slate-700">
        Buscar endereço ou local
      </label>

      <div className="mt-2 relative">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex: Praça Tubal Vilela"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-slate-100"
        />

        <div
          className={`pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 transition-opacity ${
            query.isFetching ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-transparent" />
        </div>
      </div>

      <div className="mt-2 min-h-6 text-xs text-slate-600">
        {q.length > 0 && q.length < 3
          ? "Digite pelo menos 3 caracteres."
          : null}
        {query.isError ? "Erro ao buscar. Tente novamente." : null}
      </div>

      <div
        className={[
          "mt-2 overflow-hidden rounded-xl border bg-white",
          "transition-[max-height,opacity,transform,border-color] duration-700 ease-in-out",
          showResults || query.isFetching
            ? "opacity-100 translate-y-0 border-slate-200"
            : "opacity-0 -translate-y-1 border-transparent",
        ].join(" ")}
        style={{ maxHeight: `${targetMaxHeight}px` }}
      >
        {query.isFetching ? (
          <div className="divide-y divide-slate-100">
            <SkeletonRow />
            <SkeletonRow />
            <SkeletonRow />
          </div>
        ) : query.data?.length ? (
          <div className="divide-y divide-slate-100">
            {query.data.map((r) => (
              <button
                key={`${r.lat}-${r.lng}-${r.displayName}`}
                type="button"
                onClick={() => {
                  setCenter(r.lat, r.lng, 16);
                  setMarker(r.lat, r.lng);
                }}
                className="w-full px-4 py-3 text-left text-sm transition hover:bg-slate-50 active:bg-slate-100"
              >
                <div className="font-medium text-slate-800">Ir para</div>
                <div className="mt-1 text-xs text-slate-600 line-clamp-2">
                  {r.displayName}
                </div>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
