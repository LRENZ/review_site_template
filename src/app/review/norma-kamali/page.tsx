import type { Metadata } from "next";
import { BriefcaseBusiness, Gem, Layers3, Plane, Shirt, Sparkles, Star, Waves } from "lucide-react";
import ConversionReviewPage, { type ConversionReviewConfig } from "@/components/ConversionReviewPage";
import { withBasePath } from "@/lib/site";

const affiliateLink = "https://www.linkhaitao.com/index.php?mod=lhdeal&track=4a30HD9R_anFxhNWwcuAfxXOyUWTZpVjssZFgGgSOAwNisI9bLcWOtCXI4i27iUiMWjqz8RhX2KUr_a957ZoWc7ngXM_arJAyWAoXloSA_c_c&new=https%3A%2F%2Fnormakamali.com%2F";

export const metadata: Metadata = {
  title: "NORMA KAMALI Review 2026: Dresses, Swim, Bodysuits, and Modern Classics | BrandDragon",
  description: "A NORMA KAMALI review for shoppers comparing sculptural dresses, bodysuits, swimwear, active-inspired pieces, and travel-friendly wardrobe staples.",
  alternates: { canonical: withBasePath("/review/norma-kamali") },
  openGraph: { title: "NORMA KAMALI Review: Sculptural Fashion and Modern Classics", description: "See who should shop NORMA KAMALI and what to check before buying a statement fashion piece.", images: [withBasePath("/norma-kamali-review.svg")] },
};

const config: ConversionReviewConfig = {
  categoryHref: "/category/market",
  categoryLabel: "Fashion",
  affiliateLink,
  ctaLabel: "Shop NORMA KAMALI",
  ctaMicrocopy: "Start with the silhouette, fabric, and occasion before choosing a statement piece.",
  heroImage: "/norma-kamali-review.svg",
  heroImageAlt: "NORMA KAMALI fashion review artwork",
  heroTags: ["Best for sculptural fashion"],
  heroTitle: "NORMA KAMALI Review: sculptural fashion that earns a closet check.",
  heroDescription: "NORMA KAMALI brings together sculptural dresses, bodysuits, swimwear, active-inspired pieces, and modern wardrobe staples. The strongest reason to shop is a clear silhouette or occasion, not casual browsing.",
  heroTiles: ["Dresses", "Swim", "Jersey"],
  proofPoints: [
    "Official collection includes dresses, bodysuits, swim, jackets, jumpsuits, coats, and sets",
    "Designer DNA spans the sleeping bag coat, sweats as ready-to-wear, influential swimwear, and active sportswear",
    "Best first test: choose one silhouette and compare fabric, occasion, and cost-per-wear",
  ],
  ctaHighlights: ["Statement fit", "Swim", "Travel-ready"],
  verdictEyebrow: "BrandDragon Verdict",
  verdictTitle: "NORMA KAMALI is worth shopping when the shape is the whole point.",
  verdictBody: "This is a designer-led wardrobe, not a basics marketplace. NORMA KAMALI is most compelling for shoppers who want a memorable dress, sculptural jersey, bodysuit, swim piece, or packable travel-friendly item with a strong point of view. The better purchase is the one that gives you a repeatable silhouette, not just a dramatic product photo.",
  rating: "4.5",
  ratingSummary: "Strong fit for statement dressing, swim, bodysuits, and modern pieces that can travel across occasions.",
  decisionRows: [
    ["Best for", "Statement dressing, swim, bodysuits, and modern jersey pieces"],
    ["Main value", "Distinct silhouettes with a designer point of view"],
    ["Biggest strength", "Fashion that can feel sculptural while staying practical to style"],
    ["Watch out for", "Fit, care instructions, occasion frequency, and investment value"],
  ],
  useCases: [
    { icon: Gem, title: "Statement dresses", body: "Shop when the event calls for a strong silhouette, drape, or sculptural shape rather than a safe basic." },
    { icon: Waves, title: "Swim and resort dressing", body: "NORMA KAMALI's swim identity makes the brand useful for vacation wardrobes and statement one-pieces." },
    { icon: Shirt, title: "Bodysuits and jersey", body: "A fitted jersey piece can work as a base layer, visible top, or styling anchor across more than one outfit." },
    { icon: Plane, title: "Packable travel wardrobes", body: "The brand's modern, easy-care and travel-friendly design story is useful when one piece needs to do more work." },
  ],
  winsTitle: "Why it can convert",
  wins: [
    "Distinctive silhouettes create a clear reason to click when a shopper has an event or wardrobe gap.",
    "The collection spans clothing, swim, bodysuits, active, accessories, and occasion pieces.",
    "A strong designer signature makes comparison shopping easier: shoppers know when the look is right.",
  ],
  cautionsTitle: "What to check first",
  cautions: [
    "Check garment measurements, stretch, lining, and care instructions because sculptural fit can be style-specific.",
    "Decide how often you will wear the piece before paying an investment-level price.",
    "Review current delivery and return terms for made-to-order, sale, or special-occasion items.",
  ],
  ctaBandEyebrow: "Best first test",
  ctaBandTitle: "Start with the occasion, then choose the silhouette.",
  ctaBandBody: "Pick the event, vacation, or wardrobe gap first. Then compare one-piece, dress, swim, or jersey options by fabric, fit, styling flexibility, and care.",
  workflowEyebrow: "How to evaluate it",
  workflowTitle: "Use this 4-step designer wardrobe check.",
  workflowBody: "A statement purchase should feel memorable in photos and useful enough to wear again.",
  workflow: [
    { title: "Name the occasion", body: "Decide whether the piece is for an event, vacation, resort, daily styling, or travel." },
    { title: "Choose the silhouette", body: "Compare drape, body-hugging shape, coverage, and whether the form is the reason you want it." },
    { title: "Check fabric and care", body: "Review stretch, lining, wash instructions, and how easily the piece can travel or be re-worn." },
    { title: "Build two outfits", body: "If you can style the item two ways, the cost-per-wear case becomes much stronger." },
  ],
  audienceTitle: "Who should click through?",
  audienceBody: "The best shopper has a specific occasion, silhouette, or travel wardrobe need in mind.",
  audienceCards: [
    { icon: BriefcaseBusiness, title: "Event dress shoppers", body: "Useful when a formal or social event needs a stronger silhouette than a standard occasion dress." },
    { icon: Sparkles, title: "Modern minimalists", body: "Good fit if you want fewer, more distinctive pieces with a recognizable designer shape." },
    { icon: Layers3, title: "Travel wardrobe builders", body: "Worth checking when one packable dress, bodysuit, or swim piece needs to work across settings." },
  ],
  comparisonTitle: "NORMA KAMALI vs. other fashion options",
  comparisonBody: "The decision is whether you want a designer silhouette, trend speed, premium basics, or the broadest occasion marketplace.",
  comparisons: [
    { name: "NORMA KAMALI", strength: "Sculptural dresses, swim, bodysuits, jersey, and modern designer signatures", fit: "Best when the silhouette and point of view are the main reason to buy", highlight: true },
    { name: "Premium basics", strength: "Quiet fabrics, repeatable cuts, and wardrobe-first construction", fit: "Best when versatility matters more than statement shape" },
    { name: "Trend fashion", strength: "Fast-moving silhouettes and lower entry prices", fit: "Best when the piece is seasonal and experimentation matters" },
    { name: "Department-store occasionwear", strength: "Broad brands, price points, and in-person comparison", fit: "Best when fit certainty and range matter most" },
  ],
  faqTitle: "FAQ before you shop",
  faqBody: "Short answers for shoppers deciding whether a NORMA KAMALI piece deserves the click.",
  faqs: [
    { question: "What is NORMA KAMALI best for?", answer: "The brand is strongest for sculptural dresses, swimwear, bodysuits, jersey pieces, active-inspired clothing, and modern statement wardrobe staples." },
    { question: "Is it practical for travel?", answer: "Some of the brand's easy-care and packable design language can work well for travel, but check the exact fabric and care instructions for each item." },
    { question: "What should I check before buying?", answer: "Check measurements, stretch, lining, care, return terms, and how many occasions you can realistically style the item for." },
    { question: "Should I buy a statement piece or a basic?", answer: "Choose the statement piece when the silhouette solves a real event or wardrobe need. Choose a basic only if you can name several outfits for it." },
  ],
  finalEyebrow: "Final recommendation",
  finalTitle: "If the silhouette is the reason you love it, NORMA KAMALI deserves the first comparison.",
  finalBody: "Click through with an occasion or wardrobe gap in mind. The smartest purchase is a distinctive piece that still has a repeatable styling life.",
  mobileTitle: "NORMA KAMALI fashion",
  mobileSubtitle: "4.5/5 - Best for sculptural silhouettes",
  popup: {
    productId: "norma-kamali",
    productName: "NORMA KAMALI",
    rating: "4.5/5",
    headline: "Before you leave, find the NORMA KAMALI silhouette for your occasion.",
    description: "Start with one real event, vacation, or wardrobe gap, then compare dresses, swim, bodysuits, and jersey pieces by fit and repeat wear.",
    bullets: [
      "Best fit for statement dresses, swimwear, bodysuits, and modern jersey.",
      "Check fabric, measurements, care, and return terms before ordering.",
      "Choose the piece you can style more than once, not just the most dramatic image.",
    ],
    ctaLabel: "Shop NORMA KAMALI",
    ctaHref: affiliateLink,
    storageKey: "product-popup:norma-kamali",
    banner: { eyebrow: "Designer wardrobe check", headline: "Find the silhouette that earns repeat wear", description: "4.5/5 BrandDragon verdict for modern statement dressing." },
  },
};

export default function NormaKamaliReviewPage() {
  return <ConversionReviewPage config={config} />;
}
