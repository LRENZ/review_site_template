import type { Metadata } from "next";
import { BriefcaseBusiness, CheckCircle2, Hand, Laptop, ShieldCheck, Sparkles, Star, Sun } from "lucide-react";
import ConversionReviewPage, { type ConversionReviewConfig } from "@/components/ConversionReviewPage";

const affiliateLink = "https://www.linkhaitao.com/index.php?mod=lhdeal&track=1d4d29lXUhw_bNi0i_bpLpP7eFgS8lnBLIFE6XNhuEjDZUyxFWs0t0SpsR6nXEFXhyL85fvis9E22HYzwOEer_as8wNrJ4Y8pxn8I4vBQ_c_c&new=https%3A%2F%2Fus.dentsgloves.com%2F";

export const metadata: Metadata = {
  title: "Dents Gloves Review 2026: British Leather, Cashmere Lining, and Touchscreen Gloves | BrandDragon",
  description: "A Dents Gloves review for shoppers comparing British-made leather gloves, cashmere lining, touchscreen function, driving gloves, and Heritage accessories.",
  alternates: { canonical: "/review/dents-gloves" },
  openGraph: { title: "Dents Gloves Review: British Leather Craft Since 1777", description: "See who should buy Dents gloves and what to check before choosing leather, lining, size, and touchscreen features.", images: ["/dents-gloves-review.svg"] },
};

const config: ConversionReviewConfig = {
  categoryHref: "/category/market",
  categoryLabel: "Accessories",
  affiliateLink,
  ctaLabel: "Shop Dents Gloves",
  ctaMicrocopy: "Choose leather, lining, size, and touchscreen use before picking a pair.",
  heroImage: "/dents-gloves-review.svg",
  heroImageAlt: "Dents Gloves leather glove review artwork",
  heroTags: ["Best for heritage leather"],
  heroTitle: "Dents Gloves Review: British leather craft for hands that notice details.",
  heroDescription: "Dents is a heritage glove maker known for leather gloves, cashmere and silk linings, touchscreen styles, driving gloves, and refined accessories. The value is clearest when warmth, hand feel, and craftsmanship matter more than the lowest price.",
  heroTiles: ["Leather", "Cashmere", "Touchscreen"],
  proofPoints: [
    "Dents traces its glove-making heritage to 1777 and highlights British craftsmanship",
    "The catalog includes leather, cashmere-lined, silk-lined, touchscreen, driving, and Heritage styles",
    "Best first test: match leather and lining to weather, use, and how often you will wear the pair",
  ],
  ctaHighlights: ["Leather fit", "Warm lining", "Giftable"],
  verdictEyebrow: "BrandDragon Verdict",
  verdictTitle: "Dents Gloves is worth it when a glove is part of your daily kit, not a one-season prop.",
  verdictBody: "Dents sits in the category where material, construction, lining, and fit create the product. The strongest case is for shoppers who want a refined leather glove that can handle commuting, driving, travel, formal coats, or gifting. The right pair should match the actual weather and use; cashmere warmth, silk smoothness, touchscreen fingers, and driving dexterity are different priorities.",
  rating: "4.6",
  ratingSummary: "Strong fit for leather glove shoppers who value heritage craft, lining choices, and refined everyday accessories.",
  decisionRows: [
    ["Best for", "Leather gloves, driving gloves, touchscreen use, and considered gifts"],
    ["Main value", "Material, lining, craftsmanship, and classic British design"],
    ["Biggest strength", "A deep range from practical touchscreen styles to Heritage pieces"],
    ["Watch out for", "Sizing, leather care, weather use, and lining warmth"],
  ],
  useCases: [
    { icon: Hand, title: "Everyday leather gloves", body: "A strong fit for polished commuting and outerwear when a simple leather glove feels better than a technical mitten." },
    { icon: Laptop, title: "Touchscreen commuting", body: "Touchscreen leather styles matter when you need to use a phone without removing the gloves every few minutes." },
    { icon: ShieldCheck, title: "Driving gloves", body: "Driving styles prioritize dexterity, grip, and a closer fit rather than maximum winter insulation." },
    { icon: Sparkles, title: "Gifting and Heritage", body: "Cashmere-lined and Heritage styles create a more considered gift than a generic winter accessory." },
  ],
  winsTitle: "Why it can convert",
  wins: [
    "A clear 1777 heritage story gives shoppers a reason to choose Dents over an anonymous leather glove.",
    "Leather, cashmere, silk, touchscreen, driving, and Heritage choices give the catalog useful decision paths.",
    "Gloves are compact, practical gifts where material and presentation can justify a considered purchase.",
  ],
  cautionsTitle: "What to check first",
  cautions: [
    "Measure your hand and use the current size guide because leather fit should be close without restricting movement.",
    "Choose lining by use: cashmere for warmth, silk for a smooth lighter feel, or unlined for dexterity.",
    "Read leather care and weather guidance before exposing a refined pair to heavy rain or snow.",
  ],
  ctaBandEyebrow: "Best first test",
  ctaBandTitle: "Choose the job your gloves need to do, then choose the leather.",
  ctaBandBody: "Start with commuting, driving, formal wear, touchscreen use, or gifting. Then narrow by lining, leather, fit, and weather protection.",
  workflowEyebrow: "How to evaluate it",
  workflowTitle: "Use this 4-step glove buying check.",
  workflowBody: "A great glove feels right in the hand, the weather, and the moment you actually use it.",
  workflow: [
    { title: "Name the use case", body: "Decide whether you need warmth, driving dexterity, touchscreen access, formal styling, or a gift." },
    { title: "Choose leather and lining", body: "Compare leather hand feel with cashmere warmth, silk smoothness, or an unlined closer fit." },
    { title: "Measure your hand", body: "Use the size guide and consider whether you prefer a close, tailored fit or room for a thin liner." },
    { title: "Plan care and storage", body: "Leather needs appropriate care and should not be treated like a washable synthetic winter glove." },
  ],
  audienceTitle: "Who should click through?",
  audienceBody: "The best shopper has a real cold-weather, driving, commuting, or gifting need.",
  audienceCards: [
    { icon: BriefcaseBusiness, title: "City commuters", body: "Useful when gloves need to look polished with coats and still work for daily travel." },
    { icon: Sun, title: "Driving and travel", body: "Worth checking when dexterity and compact packability matter more than bulky insulation." },
    { icon: CheckCircle2, title: "Considered gift buyers", body: "A well-lined leather glove is a practical gift with a clear material and heritage story." },
  ],
  comparisonTitle: "Dents Gloves vs. other glove options",
  comparisonBody: "The decision is whether you want heritage leather craft, technical warmth, fashion pricing, or the convenience of a department store.",
  comparisons: [
    { name: "Dents Gloves", strength: "British heritage leather gloves with cashmere, silk, touchscreen, driving, and Heritage options", fit: "Best when material, hand feel, craftsmanship, and classic styling matter", highlight: true },
    { name: "Technical winter gloves", strength: "Water resistance, insulation, grip, and outdoor performance", fit: "Best for snow, sport, and harsh weather over refined styling" },
    { name: "Fashion gloves", strength: "Trend colors, shapes, and lower entry prices", fit: "Best when the glove is an outfit accent or seasonal experiment" },
    { name: "Department-store gloves", strength: "Broad brands and in-person try-on convenience", fit: "Best when immediate sizing and price comparison are the priority" },
  ],
  faqTitle: "FAQ before you shop",
  faqBody: "Short answers for shoppers deciding whether Dents should be their next glove purchase.",
  faqs: [
    { question: "What is Dents best known for?", answer: "Dents is best known for leather gloves, British craftsmanship, Heritage styles, lining choices, touchscreen gloves, and refined accessories." },
    { question: "Are cashmere-lined gloves warmer?", answer: "Cashmere lining is generally chosen for warmth and softness, but the actual experience depends on leather, fit, weather, and whether the glove is designed for the conditions." },
    { question: "Can Dents gloves work with a phone?", answer: "The brand offers touchscreen leather gloves. Check the exact product description because touchscreen capability is style-specific." },
    { question: "How should I choose the size?", answer: "Measure your hand and use the current size guide. A leather glove should feel close and secure without cutting off circulation or restricting fingers." },
  ],
  finalEyebrow: "Final recommendation",
  finalTitle: "If your gloves are part of your daily uniform, Dents deserves the first comparison.",
  finalBody: "Click through with a real use case in mind. Choose lining, leather, size, and weather needs before letting the Heritage story make the decision for you.",
  mobileTitle: "Dents leather gloves",
  mobileSubtitle: "4.6/5 - Best for heritage leather craft",
  popup: {
    productId: "dents-gloves",
    productName: "Dents Gloves",
    rating: "4.6/5",
    headline: "Before you leave, find the Dents glove built for your actual use.",
    description: "Compare leather, lining, touchscreen, driving, and Heritage styles before choosing a pair for commuting, travel, or gifting.",
    bullets: [
      "Best fit for leather glove shoppers who value craft and hand feel.",
      "Choose lining and touchscreen function around your weather and daily use.",
      "Check hand measurement, leather care, and current return terms before ordering.",
    ],
    ctaLabel: "Shop Dents Gloves",
    ctaHref: affiliateLink,
    storageKey: "product-popup:dents-gloves",
    banner: { eyebrow: "Leather glove check", headline: "Match the leather and lining to your daily use", description: "4.6/5 BrandDragon verdict for heritage glove shoppers." },
  },
};

export default function DentsGlovesReviewPage() {
  return <ConversionReviewPage config={config} />;
}
