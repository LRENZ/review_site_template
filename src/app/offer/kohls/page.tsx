import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import { kohlsOffer } from "@/data/retailOffers";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kohl's Shopping Guide: Style, Shoes, Home & Family | BrandDragon",
  description: "Plan a smarter Kohl's cart across clothing, shoes, kids, home, kitchen, bedding, toys, beauty, and gifts.",
  alternates: { canonical: withBasePath("/offer/kohls") },
  openGraph: { title: "Kohl's: A Smarter Multi-Category Shopping Guide", description: "Build the list first, then compare products, offers, fulfilment, and returns.", images: [withBasePath("/kohls-shopping-hero.png")] },
};

export default function KohlsPage() {
  return <RetailOfferPage config={kohlsOffer} />;
}
