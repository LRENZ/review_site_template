import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import { sauconyCanadaOffer } from "@/data/retailOffers";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Saucony Canada Running Shoe Guide | BrandDragon",
  description: "Compare Saucony daily trainers, cushioned and guided shoes, Endorphin speed options, trail footwear, and walking styles for Canadian shoppers.",
  alternates: { canonical: withBasePath("/offer/saucony-canada") },
  openGraph: { title: "Saucony Canada: Find the Right Shoe for Your Miles", description: "A fit-first guide to Saucony running, trail, walking, and speed shoes.", images: [withBasePath("/saucony-running-hero.webp")] },
};

export default function SauconyCanadaPage() {
  return <RetailOfferPage config={sauconyCanadaOffer} />;
}
