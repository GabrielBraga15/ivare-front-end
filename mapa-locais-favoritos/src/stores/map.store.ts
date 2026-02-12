import { create } from "zustand";

type MapState = {
  center: { lat: number; lng: number };
  zoom: number;
  selected: { lat: number; lng: number } | null;
  marker: { lat: number; lng: number } | null;
  setCenter: (lat: number, lng: number, zoom?: number) => void;
  setSelected: (lat: number, lng: number) => void;
  clearSelected: () => void;
  setMarker: (lat: number, lng: number) => void;
};

export const useMapStore = create<MapState>((set) => ({
  center: { lat: -18.9146, lng: -48.2754 },
  zoom: 13,
  selected: null,
  marker: null,
  setCenter: (lat, lng, zoom) =>
    set((s) => ({ center: { lat, lng }, zoom: zoom ?? s.zoom })),
  setSelected: (lat, lng) => set({ selected: { lat, lng } }),
  clearSelected: () => set({ selected: null }),
  setMarker: (lat, lng) => set({ marker: { lat, lng } }),
}));
