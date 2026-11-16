import type { Metadata } from "next";
import RetailOfferPage from "@/components/RetailOfferPage";
import SheetMusicPlusConfidence from "@/components/SheetMusicPlusConfidence";
import { sheetMusicPlusOffer } from "@/data/sheetMusicPlusOffer";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sheet Music Plus: Print & Digital Sheet Music Guide | BrandDragon",
  description: "Choose sheet music by instrument, difficulty, edition, voicing, and format. Compare print, digital downloads, teaching books, and ensemble parts.",
  alternates: { canonical: withBasePath("/offer/sheetmusicplus") },
  openGraph: { title: "Sheet Music Plus Buying Guide", images: [withBasePath("/sheetmusicplus-practice.png")] },
};

export default function SheetMusicPlusPage() {
  return <RetailOfferPage config={sheetMusicPlusOffer}><SheetMusicPlusConfidence /></RetailOfferPage>;
}
