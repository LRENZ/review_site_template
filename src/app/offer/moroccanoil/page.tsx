import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import { moroccanoilOffer } from "@/data/retailOffers";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Moroccanoil Review: Treatment, Hydration & Repair Guide | BrandDragon",
  description: "A texture-first Moroccanoil buying guide covering Treatment Original and Light, hydration, repair, masks, color care, styling, and routine checks.",
  alternates: { canonical: withBasePath("/offer/moroccanoil") },
  openGraph: {
    title: "Moroccanoil: Build a Routine Around What Your Hair Needs",
    description: "Compare Moroccanoil treatments and collections by texture, condition, and daily routine.",
    images: [withBasePath("/moroccanoil-hydration-hero.jpg")],
  },
};

export default function MoroccanoilOfferPage() {
  return <RetailOfferPage config={moroccanoilOffer} />;
}
