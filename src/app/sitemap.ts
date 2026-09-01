import type { MetadataRoute } from "next";
import { collections } from "@/data/collections";
import { reviews } from "@/data/reviews";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/category/market",
    "/category/digital",
    "/offer/merach-s23",
    "/offer/xtool",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const collectionRoutes = collections.map((collection) => ({
    url: `${SITE_URL}/collection/${collection.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const reviewRoutes = reviews.map((review) => ({
    url: `${SITE_URL}/review/${review.slug}`,
    lastModified: new Date(review.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...collectionRoutes, ...reviewRoutes];
}
