import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import { zenniOffer } from "@/data/retailOffers";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zenni Optical Review: Frame, Fit & Lens Buying Guide | BrandDragon",
  description: "A practical Zenni Optical guide covering frame measurements, virtual try-on, prescriptions, pupillary distance, lens choices, and ordering checks.",
  alternates: { canonical: withBasePath("/offer/zenni-optical") },
  openGraph: { title: "Zenni Optical: Choose the Look, Verify the Numbers", description: "A fit-first guide to buying frames and prescription lenses online.", images: [withBasePath("/zenni-eyewear-hero.png")] },
};

export default function ZenniOpticalPage() {
  return <RetailOfferPage config={zenniOffer} />;
}
