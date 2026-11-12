import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import { davidsBridalOffer } from "@/data/davidsBridalOffer";
import { withBasePath } from "@/lib/site";
import DavidsBridalConfidence from "@/components/DavidsBridalConfidence";

export const metadata: Metadata = {
  title: "David's Bridal: Wedding Dress & Bridal Party Guide | BrandDragon",
  description: "Compare David's Bridal wedding dresses, silhouettes, bridal-party options, appointments, sizing, alterations, and shopping timelines.",
  alternates: { canonical: withBasePath("/offer/davids-bridal") },
  openGraph: { title: "David's Bridal Wedding Dress Guide", images: [withBasePath("/davids-bridal-hero.jpg")] },
};

export default function DavidsBridalPage() {
  return <RetailOfferPage config={davidsBridalOffer}><DavidsBridalConfidence /></RetailOfferPage>;
}
