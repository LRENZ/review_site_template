import type { Metadata } from "next";
import { BedDouble, BriefcaseBusiness, Gift, Heart, Moon, ShoppingBag, Sparkles, Waves } from "lucide-react";
import ConversionReviewPage, { type ConversionReviewConfig } from "@/components/ConversionReviewPage";

const affiliateLink = "https://www.victoriassecret.com/us/";

export const metadata: Metadata = {
  title: "Victoria's Secret Review 2026: Bras, Lingerie, Beauty, Sleep, and Activewear | BrandDragon",
  description: "A Victoria's Secret review for shoppers comparing bras, panties, lingerie, sleepwear, beauty, swim, activewear, and everyday fit options.",
  alternates: { canonical: "/review/victorias-secret" },
  openGraph: { title: "Victoria's Secret Review: Bras, Lingerie, Beauty, and More", description: "See who should shop Victoria's Secret and what to check before choosing fit, category, and current deal value.", images: ["/victorias-secret-review.svg"] },
};

const config: ConversionReviewConfig = {
  categoryHref: "/category/market",
  categoryLabel: "Intimates and Beauty",
  affiliateLink,
  ctaLabel: "Shop Victoria's Secret",
  ctaMicrocopy: "Start with fit, collection, and everyday use before chasing a promotion.",
  heroImage: "/victorias-secret-review.svg",
  heroImageAlt: "Victoria's Secret review artwork",
  heroTags: ["Best for bra and lingerie shopping"],
  heroTitle: "Victoria's Secret Review: a full wardrobe of bras, lingerie, sleep, beauty, and more.",
  heroDescription: "Victoria's Secret remains a broad specialty retailer for bras, panties, lingerie, sleepwear, beauty, swim, activewear, clothing, accessories, and gifts. The strongest shopping experience starts with a fit or category need rather than a general sale browse.",
  heroTiles: ["Bras", "Lingerie", "Beauty"],
  proofPoints: [
    "Official US store covers bras, panties, lingerie, sleep, beauty, swim, activewear, clothing, and accessories",
    "Bra categories include push-up, lightly lined, unlined, full coverage, wireless, sports, strapless, and more",
    "Best first test: choose fit or category, then compare collection, fabric, price, and return terms",
  ],
  ctaHighlights: ["Bra fit", "Lingerie", "Gifts"],
  verdictEyebrow: "BrandDragon Verdict",
  verdictTitle: "Victoria's Secret is worth the click when you want breadth and a familiar fit-shopping path.",
  verdictBody: "The brand's advantage is range: everyday bras, signature collections, panties, sleep, beauty, swim, activewear, clothing, and gifts live in one recognizable store. It can be a useful first stop when you know the category or fit you need. The main discipline is to choose based on support, coverage, fabric, and wear frequency rather than letting a promotion decide the purchase.",
  rating: "4.4",
  ratingSummary: "Strong fit for shoppers who want a broad intimate apparel, beauty, sleep, and gift catalog with familiar collections.",
  decisionRows: [
    ["Best for", "Bras, panties, lingerie, sleepwear, beauty, swim, and gifts"],
    ["Main value", "Broad category range with recognizable fit and collection paths"],
    ["Biggest strength", "From everyday essentials to fashion-led lingerie and beauty"],
    ["Watch out for", "Fit, promotions, fabric, return terms, and product-specific reviews"],
  ],
  useCases: [
    { icon: Heart, title: "Bra and fit shopping", body: "Use the bra categories and fit guidance when support, coverage, lift, or strap options are the actual need." },
    { icon: Gift, title: "Gifts and matching sets", body: "The brand is useful for giftable fragrance, body care, matching bra-and-panty sets, and recognizable collections." },
    { icon: Moon, title: "Sleep and lounge", body: "Pajama sets, sleepshirts, robes, loungewear, and soft fabrics make the store more than a lingerie destination." },
    { icon: Waves, title: "Swim and activewear", body: "Swim, sports bras, leggings, tops, and matching active sets extend the wardrobe beyond intimates." },
  ],
  winsTitle: "Why it can convert",
  wins: [
    "Shoppers can solve several wardrobe needs in one store, from bras and panties to beauty and sleep.",
    "Fit and style categories give users a concrete next click instead of a blank catalog.",
    "The brand has a clear gift and self-care angle through fragrances, mists, lotions, and body care.",
  ],
  cautionsTitle: "What to check first",
  cautions: [
    "Use the current bra fit guide and measurements rather than assuming one size works across every style.",
    "Check fabric, coverage, support, and return terms for the exact category and collection.",
    "Compare the final price after promotions and multi-buy offers so the value is clear.",
  ],
  ctaBandEyebrow: "Best first test",
  ctaBandTitle: "Start with the fit or category you already know you need.",
  ctaBandBody: "Choose everyday bra, full coverage, wireless, panties, sleep, beauty, swim, active, or gifts. Then compare the collection and current deal without losing the original use case.",
  workflowEyebrow: "How to evaluate it",
  workflowTitle: "Use this 4-step Victoria's Secret shopping check.",
  workflowBody: "The right item should fit the body, the occasion, and the way you actually live.",
  workflow: [
    { title: "Choose the category", body: "Start with bra, panty, sleep, beauty, lingerie, swim, activewear, clothing, or gift." },
    { title: "Choose support and coverage", body: "For bras and intimates, compare underwire, wireless, lining, full coverage, plunge, and fit details." },
    { title: "Check fabric and care", body: "Lace, satin, cotton, seamless, modal, and performance fabrics have different wear and care needs." },
    { title: "Review price and returns", body: "Promotions can be compelling, but the final value depends on fit, repeat wear, and return flexibility." },
  ],
  audienceTitle: "Who should click through?",
  audienceBody: "The best shopper has a category, fit, gift, or self-care need in mind.",
  audienceCards: [
    { icon: ShoppingBag, title: "Everyday essentials", body: "Good fit when you want familiar bras, panties, sleep, and wardrobe basics in one place." },
    { icon: BriefcaseBusiness, title: "Gift shoppers", body: "Useful for fragrance, body care, sets, robes, sleep, and recognizable gifts." },
    { icon: Sparkles, title: "Collection shoppers", body: "Worth checking when you want fashion-led lingerie, signature collections, or a more expressive look." },
  ],
  comparisonTitle: "Victoria's Secret vs. other intimates options",
  comparisonBody: "The decision is whether you want broad category range, fit-specialist support, luxury lingerie, or budget basics.",
  comparisons: [
    { name: "Victoria's Secret", strength: "Broad bras, panties, lingerie, sleep, beauty, swim, activewear, clothing, and gift assortment", fit: "Best when you want several intimate and self-care categories in one recognizable store", highlight: true },
    { name: "Fit-specialist intimates", strength: "More focused fitting, support, and size expertise", fit: "Best when technical fit and support are the top priority" },
    { name: "Luxury lingerie", strength: "Higher-end fabrics, detail, and fashion positioning", fit: "Best when the piece is for a special occasion or investment wardrobe" },
    { name: "Budget basics", strength: "Low entry prices and simple everyday replacements", fit: "Best when price matters more than collection identity or finishing" },
  ],
  faqTitle: "FAQ before you shop",
  faqBody: "Short answers for shoppers deciding whether Victoria's Secret deserves the click.",
  faqs: [
    { question: "What is Victoria's Secret best for?", answer: "The brand is strongest for bras, panties, lingerie, sleepwear, beauty, swim, activewear, clothing, accessories, and gifts." },
    { question: "How should I choose a bra?", answer: "Start with the current fit guide and your use case, then choose coverage, lining, support, rise, strap, and collection details." },
    { question: "Is Victoria's Secret only for lingerie?", answer: "No. The current store also includes sleep, beauty, swim, activewear, clothing, accessories, and gift categories." },
    { question: "Should I buy during a promotion?", answer: "Promotions can improve value, but compare the final price with fit, fabric, repeat wear, and the exact return terms." },
  ],
  finalEyebrow: "Final recommendation",
  finalTitle: "If you need a bra, gift, or intimate wardrobe refresh, Victoria's Secret deserves the first comparison.",
  finalBody: "Click through with a category or fit goal in mind. The broad catalog is useful when it helps you solve a real need, not when it turns shopping into endless promotion browsing.",
  mobileTitle: "Victoria's Secret essentials",
  mobileSubtitle: "4.4/5 - Best for broad intimates and beauty shopping",
  popup: {
    productId: "victorias-secret",
    productName: "Victoria's Secret",
    rating: "4.4/5",
    headline: "Before you leave, find the Victoria's Secret category that fits your real need.",
    description: "Start with a bra, gift, sleep, beauty, swim, activewear, or lingerie need, then compare fit, fabric, collection, and current value.",
    bullets: [
      "Best fit for bras, panties, lingerie, sleep, beauty, swim, active, and gifts.",
      "Use fit, coverage, fabric, and category before letting a promotion choose for you.",
      "Check current fit guidance, final price, and return terms before ordering.",
    ],
    ctaLabel: "Shop Victoria's Secret",
    ctaHref: affiliateLink,
    storageKey: "product-popup:victorias-secret",
    banner: { eyebrow: "Fit and category check", headline: "Find the bra, gift, or wardrobe piece you actually need", description: "4.4/5 BrandDragon verdict for broad intimates and beauty shopping." },
  },
};

export default function VictoriasSecretReviewPage() {
  return <ConversionReviewPage config={config} />;
}
