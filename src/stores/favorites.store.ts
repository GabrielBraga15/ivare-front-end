import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { FavoritePlace } from "../types/place";

type FavoritesState = {
  favorites: FavoritePlace[];
  addFavorite: (fav: FavoritePlace) => void;
  removeFavorite: (id: string) => void;
  clearFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (fav) => {
        const exists = get().favorites.some(
          (f) => Math.abs(f.lat - fav.lat) < 1e-7 && Math.abs(f.lng - fav.lng) < 1e-7
        );
        if (exists) return;
        set({ favorites: [fav, ...get().favorites] });
      },
      removeFavorite: (id) =>
        set({ favorites: get().favorites.filter((f) => f.id !== id) }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    { name: "ivare-favorites-v1" }
  )
);
