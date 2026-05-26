import type { Metadata } from "next";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Ruler,
  Shirt,
  ShoppingBag,
  Sparkles,
  Tags,
  Users,
} from "lucide-react";
import ConversionReviewPage, {
  type ConversionReviewConfig,
} from "@/components/ConversionReviewPage";

const affiliateLink =
  "https://ecomclik.com/?a=1001796&c=418768&co=364144&mt=20";

export const metadata: Metadata = {
  title:
    "Levi's Review 2026: Classic Denim, 501 Jeans, and Everyday Staples | BrandDragon",
  description:
    "A conversion-focused Levi's review for shoppers comparing classic denim, 501 jeans, trucker jackets, fit consistency, sales, and everyday wardrobe value.",
  alternates: {
    canonical: "/review/levis",
  },
  openGraph: {
    title: "Levi's Review: Classic Denim and Wardrobe Staples",
    description:
      "See who should shop Levi's, what to check before buying, and how it compares with premium denim and fast fashion.",
    images: ["/levis-review.svg"],
  },
};

const config: ConversionReviewConfig = {
  categoryHref: "/category/market",
  categoryLabel: "Apparel",
  affiliateLink,
  ctaLabel: "Shop Levi's",
  ctaMicrocopy: "Check current fits, washes, and sale pricing before sizes move.",
  heroImage: "/levis-review.svg",
  heroImageAlt: "Levi's denim review artwork",
  heroTags: ["Best for classic denim"],
  heroTitle: "Levi's Review: classic denim that still earns a closet check.",
  heroDescription:
    "Levi's is still one of the easiest places to start when you want recognizable denim, everyday jeans, trucker jackets, tees, and casual staples without jumping straight into premium designer pricing.",
  heroTiles: ["501", "Denim", "Jackets"],
  proofPoints: [
    "Confirmed affiliate path lands on Levi's official US store through a Rakuten redirect",
    "Strongest for classic jeans, denim jackets, casual layers, and repeatable wardrobe staples",
    "Best first test: compare your preferred fit and wash against sale pricing",
  ],
  ctaHighlights: ["Classic denim", "Fit check", "Sale scan"],
  verdictEyebrow: "BrandDragon Verdict",
  verdictTitle:
    "Levi's is worth shopping when you want proven denim before chasing trendier alternatives.",
  verdictBody:
    "The Levi's advantage is familiarity: classic silhouettes, broad availability, recognizable washes, and a deep denim catalog. It is not always the most premium or cheapest option, but it is often the easiest place to find a dependable everyday jean or jacket if you know your fit.",
  rating: "4.4",
  ratingSummary:
    "Strong fit for shoppers who want classic denim, known silhouettes, and broad size and wash options.",
  decisionRows: [
    ["Best for", "Jeans shoppers, denim jacket buyers, and casual wardrobe builders"],
    ["Main value", "Recognizable denim staples with frequent style and wash options"],
    ["Biggest strength", "Classic fits like 501-style jeans and iconic trucker jacket positioning"],
    ["Watch out for", "Sizing, stretch, fabric weight, and sale timing can change the value"],
  ],
  useCases: [
    {
      icon: Ruler,
      title: "Fit-first denim shopping",
      body: "Use Levi's when you already know or want to test a specific denim fit, rise, leg shape, or wash family.",
    },
    {
      icon: Shirt,
      title: "Everyday jeans and jackets",
      body: "The strongest use case is simple: reliable casual jeans, denim jackets, tees, and layers that work across seasons.",
    },
    {
      icon: Tags,
      title: "Sale-driven value",
      body: "Levi's can be more compelling when sale pricing lines up with a proven fit and wash you will actually wear.",
    },
    {
      icon: BadgeCheck,
      title: "Brand recognition",
      body: "The label carries a classic denim signal, especially for shoppers who prefer heritage over fast-fashion churn.",
    },
  ],
  winsTitle: "Why it can convert",
  wins: [
    "Shoppers usually understand the product category immediately: jeans, denim jackets, tees, and wardrobe staples.",
    "Fit and wash variety gives users a concrete reason to click and compare current inventory.",
    "A familiar brand lowers purchase anxiety compared with unknown denim labels.",
  ],
  cautionsTitle: "What to check first",
  cautions: [
    "Check the exact fabric blend, stretch, rise, and leg opening before buying.",
    "Read current size guidance and reviews because denim fit can vary by style and wash.",
    "Compare full price against current promotions so the value matches your expectations.",
  ],
  ctaBandEyebrow: "Best first test",
  ctaBandTitle: "Start with one fit you already wear, then compare washes and sale pricing.",
  ctaBandBody:
    "The quickest way to judge Levi's value is not browsing everything. Pick a familiar fit or product type, then check whether the current wash, size, and price make sense.",
  workflowEyebrow: "How to evaluate it",
  workflowTitle: "Use this 4-step denim check before you buy.",
  workflowBody:
    "A good denim purchase comes down to fit, fabric, wash, and realistic wear frequency.",
  workflow: [
    {
      title: "Choose the fit first",
      body: "Start with rise, leg shape, and silhouette before getting distracted by washes or discounts.",
    },
    {
      title: "Check fabric and stretch",
      body: "Cotton-heavy denim, stretch blends, and lighter fabrics can all feel different even under the same brand.",
    },
    {
      title: "Compare current sale price",
      body: "Levi's is often more attractive when the price lines up with the style's expected durability and wear frequency.",
    },
    {
      title: "Buy the piece you will repeat",
      body: "A dependable jean or trucker jacket beats a trend piece that only works with one outfit.",
    },
  ],
  audienceTitle: "Who should click through?",
  audienceBody:
    "The best Levi's shopper already has a wardrobe gap: jeans, a jacket, or a casual staple that needs replacing.",
  audienceCards: [
    {
      icon: Users,
      title: "Everyday denim buyers",
      body: "Good fit for shoppers who want reliable jeans without jumping into niche premium denim.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Casual wardrobe builders",
      body: "Useful when you want simple pieces that work with sneakers, boots, tees, overshirts, and jackets.",
    },
    {
      icon: ShoppingBag,
      title: "Deal shoppers",
      body: "Worth checking when you know your size and want to catch a sale on a familiar style.",
    },
  ],
  comparisonTitle: "Levi's vs. other denim options",
  comparisonBody:
    "The decision is whether you want heritage familiarity, premium construction, low prices, or trend speed.",
  comparisons: [
    {
      name: "Levi's",
      strength: "Classic denim styles, broad availability, recognizable fits, and a familiar brand signal",
      fit: "Best when you want dependable jeans or a denim jacket without overthinking the category",
      highlight: true,
    },
    {
      name: "Premium denim brands",
      strength: "Often stronger fabrics, construction details, and niche fits",
      fit: "Best when you care more about materials and finishing than price",
    },
    {
      name: "Fast-fashion denim",
      strength: "Lower prices and trend-led cuts",
      fit: "Best when the piece is seasonal and durability is less important",
    },
    {
      name: "Workwear denim",
      strength: "Heavier fabrics and utility-oriented construction",
      fit: "Best when toughness matters more than mainstream styling",
    },
  ],
  faqTitle: "FAQ before you shop",
  faqBody:
    "Short answers for shoppers deciding whether to click through and compare current Levi's inventory.",
  faqs: [
    {
      question: "What is Levi's best for?",
      answer:
        "Levi's is strongest for classic denim, everyday jeans, denim jackets, tees, and casual staples with broad fit and wash availability.",
    },
    {
      question: "Should I buy full price?",
      answer:
        "It depends on the item and your urgency. Levi's becomes more compelling when a known fit and wash lines up with current sale pricing.",
    },
    {
      question: "What should I check before buying jeans?",
      answer:
        "Check rise, leg opening, inseam, fabric blend, stretch, wash, and return policy before ordering.",
    },
    {
      question: "Is Levi's better than premium denim?",
      answer:
        "Not always. Premium denim can offer better materials and finishing, but Levi's often wins on familiarity, availability, and everyday value.",
    },
  ],
  finalEyebrow: "Final recommendation",
  finalTitle: "If you need jeans or a denim jacket, Levi's deserves the first comparison.",
  finalBody:
    "Click through when you have a fit, wash, or wardrobe gap in mind. The goal is to find the right piece at the right current price, not to browse the whole catalog forever.",
  mobileTitle: "Levi's denim staples",
  mobileSubtitle: "4.4/5 - Best for classic denim shoppers",
  popup: {
    productId: "levis",
    productName: "Levi's",
    rating: "4.4/5",
    headline: "Before you leave, check your Levi's fit and current sale price.",
    description:
      "If you need jeans, a trucker jacket, or an everyday staple, compare the current size, wash, and price before buying somewhere else.",
    bullets: [
      "Best fit for classic jeans, denim jackets, tees, and casual staples.",
      "Start with a fit you already know so the shopping decision stays practical.",
      "Check fabric, stretch, sizing, return terms, and sale pricing before you order.",
    ],
    ctaLabel: "Shop Levi's",
    ctaHref: affiliateLink,
    storageKey: "product-popup:levis",
    banner: {
      eyebrow: "Denim fit check",
      headline: "Compare Levi's fits, washes, and current pricing",
      description: "4.4/5 BrandDragon verdict for classic denim shoppers.",
    },
  },
};

export default function LevisReviewPage() {
  return <ConversionReviewPage config={config} />;
}
