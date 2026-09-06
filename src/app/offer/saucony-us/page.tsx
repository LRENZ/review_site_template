import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import { sauconyUsOffer } from "@/data/retailOffers";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Saucony US Running Shoe Guide | BrandDragon",
  description: "Compare Saucony daily trainers, cushioned and guided shoes, Endorphin speed options, trail footwear, and walking styles in the US.",
  alternates: { canonical: withBasePath("/offer/saucony-us") },
  openGraph: { title: "Saucony US: Build a Better Running Shoe Rotation", description: "A practical guide to choosing Saucony shoes by terrain, support, and pace.", images: [withBasePath("/saucony-running-hero.webp")] },
};

export default function SauconyUsPage() {
  return <RetailOfferPage config={sauconyUsOffer} />;
}
