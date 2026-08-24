import type { MetadataRoute } from "next";
import { publicaciones } from "@/data/actualidad";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.addsys.cl";

  const publicacionesUrls = publicaciones.map((publicacion) => ({
    url: `${baseUrl}/insights/${publicacion.id}`,
    lastModified: new Date("2026-08-23"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-23"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/gracias`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...publicacionesUrls,
  ];
}