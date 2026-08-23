import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1.0 },
    { path: "/services", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/about", priority: 0.8 },
    { path: "/solutions", priority: 0.8 },
    { path: "/projects", priority: 0.7 },
    { path: "/process", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    priority,
  }));
}
