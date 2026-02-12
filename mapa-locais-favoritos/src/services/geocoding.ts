import type { GeocodeResult } from "../types/place";

const BASE = "https://nominatim.openstreetmap.org/search";

export async function geocode(query: string): Promise<GeocodeResult[]> {
  const url = new URL(BASE);
  url.searchParams.set("q", query);
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "6");
  url.searchParams.set("addressdetails", "1");

  const res = await fetch(url.toString(), {
    headers: { "Accept-Language": "pt-BR" },
  });

  if (!res.ok) throw new Error("Falha ao buscar endereço");

  const data = (await res.json()) as Array<{ display_name: string; lat: string; lon: string }>;

  return data.map((d) => ({
    displayName: d.display_name,
    lat: Number(d.lat),
    lng: Number(d.lon),
  }));
}
