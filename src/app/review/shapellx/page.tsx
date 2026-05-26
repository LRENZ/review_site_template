import type { Metadata } from "next";
import {
  BadgeCheck,
  HeartHandshake,
  Layers3,
  Ruler,
  Shirt,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import ConversionReviewPage, {
  type ConversionReviewConfig,
} from "@/components/ConversionReviewPage";

const affiliateLink = "https://shapellxaffiliateprogram.pxf.io/enqa5D";

export const metadata: Metadata = {
  title:
    "Shapellx Review 2026: Shapewear, Bodysuits, Swim, and Support Levels | BrandDragon",
  description:
    "A conversion-focused Shapellx review for shoppers comparing shapewear, bodysuits, swim, compression levels, size range, fit, and wardrobe value.",
  alternates: {
    canonical: "/review/shapellx",
  },
  openGraph: {
    title: "Shapellx Review: Shapewear and Supportive Wardrobe Staples",
    description:
      "See who should shop Shapellx, what to check before buying, and how to choose support level and fit.",
    images: ["/shapellx-review.svg"],
  },
};

const config: ConversionReviewConfig = {
  categoryHref: "/category/market",
  categoryLabel: "Shapewear",
  affiliateLink,
  ctaLabel: "Shop Shapellx",
  ctaMicrocopy: "Start with support level, control area, and size before choosing color.",
  heroImage: "/shapellx-review.svg",
  heroImageAlt: "Shapellx shapewear review artwork",
  heroTags: ["Best for shapewear fit checks"],
  heroTitle:
    "Shapellx Review: shapewear, bodysuits, and support pieces for real outfits.",
  heroDescription:
    "Shapellx is built around shapewear and supportive wardrobe staples: bodysuits, shorts, bras, underwear, swim, activewear, and compression-based fit choices. It is most useful when you shop by outfit need, control area, and support level.",
  heroTiles: ["Shape", "Support", "Smooth"],
  proofPoints: [
    "Official site highlights shapewear, swim, bras, men, active, and sale categories",
    "Shopping filters emphasize compression level, control area, size, color, and price",
    "Best first test: choose one outfit problem, then compare support level and size",
  ],
  ctaHighlights: ["Compression", "Fit check", "Size range"],
  verdictEyebrow: "BrandDragon Verdict",
  verdictTitle:
    "Shapellx is worth shopping when you need shapewear for a specific outfit, not vague browsing.",
  verdictBody:
    "The best Shapellx purchase starts with a real use case: smoothing under a dress, waist support, thigh shaping, bust support, swim confidence, or a bodysuit that can work as clothing. The site makes that easier with categories and filters for compression level, control area, size, color, and price. The key is to treat fit as the product, not just the style photo.",
  rating: "4.3",
  ratingSummary:
    "Strong fit for shapewear shoppers who want support-level choices, body-area targeting, and outfit-ready pieces.",
  decisionRows: [
    ["Best for", "Shapewear, bodysuits, smoothing layers, swim, bras, and support pieces"],
    ["Main value", "Compression and control-area shopping tied to real outfit needs"],
    ["Biggest strength", "Broad shapewear catalog with support-level and fit-focused filters"],
    ["Watch out for", "Sizing, compression feel, return terms, and fabric expectations"],
  ],
  useCases: [
    {
      icon: Ruler,
      title: "Fit and size matching",
      body: "Start with the size chart, compression level, and control area so the piece solves the outfit problem you actually have.",
    },
    {
      icon: Layers3,
      title: "Layering under outfits",
      body: "Shapewear is strongest when it disappears under dresses, workwear, event looks, or fitted casual outfits.",
    },
    {
      icon: Shirt,
      title: "Bodysuits as clothing",
      body: "Some Shapellx pieces can work as both support layer and visible top, which improves cost-per-wear.",
    },
    {
      icon: Sparkles,
      title: "Swim and occasion dressing",
      body: "The site includes swim and occasion-friendly pieces for shoppers who want more structure and confidence from the first layer.",
    },
  ],
  winsTitle: "Why it can convert",
  wins: [
    "Support level and control-area filters give shoppers a concrete reason to click.",
    "The catalog spans everyday shapewear, bodysuits, bras, underwear, swim, activewear, and sale items.",
    "The brand emphasizes community size inclusivity and a large review base, which reduces fit anxiety.",
  ],
  cautionsTitle: "What to check first",
  cautions: [
    "Read the current size chart and reviews because shapewear fit is sensitive to torso length, bust, waist, hips, and compression preference.",
    "Check return policy and final-sale language before ordering intimate apparel or sale items.",
    "Choose comfort and wear time over maximum compression if you need the piece for long events.",
  ],
  ctaBandEyebrow: "Best first test",
  ctaBandTitle:
    "Pick one outfit, then choose the Shapellx support level that solves it.",
  ctaBandBody:
    "Do not browse the whole catalog first. Start with the dress, jeans, swim look, or work outfit you want to improve, then filter by control area, compression, and size.",
  workflowEyebrow: "How to evaluate it",
  workflowTitle: "Use this 4-step shapewear check before you buy.",
  workflowBody:
    "A good shapewear purchase should feel supportive, wearable, and useful with the outfits you already own.",
  workflow: [
    {
      title: "Name the outfit problem",
      body: "Decide whether you need waist smoothing, tummy control, thigh coverage, bust support, back smoothing, or a bodysuit top.",
    },
    {
      title: "Choose support level",
      body: "Light, medium, and firmer compression can feel very different. Match the support to comfort and wear time.",
    },
    {
      title: "Check size and torso fit",
      body: "Measure carefully and read fit notes, especially for bodysuits and full-body pieces.",
    },
    {
      title: "Confirm return terms",
      body: "Before checkout, review current return, exchange, and sale-item policies for the exact product.",
    },
  ],
  audienceTitle: "Who should click through?",
  audienceBody:
    "The strongest fit is a shopper with a specific silhouette, outfit, or support need in mind.",
  audienceCards: [
    {
      icon: ShoppingBag,
      title: "Event outfit shoppers",
      body: "Useful when you need a smoother base layer for dresses, fitted outfits, photos, or formal events.",
    },
    {
      icon: HeartHandshake,
      title: "Comfort-first shapewear buyers",
      body: "Good fit if you want support but still care about wear time, softness, and practical daily movement.",
    },
    {
      icon: Star,
      title: "Bodysuit and swim shoppers",
      body: "Worth checking if you want pieces that can work as outerwear, swimwear, or structured wardrobe staples.",
    },
  ],
  comparisonTitle: "Shapellx vs. other shapewear options",
  comparisonBody:
    "The decision is whether you want a broad shapewear catalog, premium basics, low-cost trend pieces, or department-store try-on convenience.",
  comparisons: [
    {
      name: "Shapellx",
      strength: "Broad shapewear catalog with support-level, control-area, size, color, and price shopping cues",
      fit: "Best when you want to match shapewear to a specific outfit and compression preference",
      highlight: true,
    },
    {
      name: "Premium shapewear brands",
      strength: "Often stronger brand polish, refined basics, and higher-touch fabric positioning",
      fit: "Best when you want fewer options and are comfortable paying more",
    },
    {
      name: "Department stores",
      strength: "In-person try-on and multiple brands in one place",
      fit: "Best when return friction and sizing uncertainty are your biggest concerns",
    },
    {
      name: "Fast-fashion shapewear",
      strength: "Lower entry price and trend-led silhouettes",
      fit: "Best when you need an occasional piece and long-term wear matters less",
    },
  ],
  faqTitle: "FAQ before you shop",
  faqBody:
    "Short answers for shoppers deciding whether to click through and compare Shapellx products.",
  faqs: [
    {
      question: "What is Shapellx best for?",
      answer:
        "Shapellx is best for shapewear, bodysuits, smoothing layers, swim, bras, underwear, and support pieces where compression level and control area matter.",
    },
    {
      question: "How should I choose a Shapellx piece?",
      answer:
        "Start with your outfit and control area, then choose compression level, size, color, and price. Avoid choosing only by the product photo.",
    },
    {
      question: "Is firmer compression always better?",
      answer:
        "No. Firmer compression can create more structure, but comfort and wear time matter. Choose the level you can actually wear for the occasion.",
    },
    {
      question: "What should I check before ordering?",
      answer:
        "Check the size chart, fabric, compression level, control area, reviews, return policy, and whether the item is final sale.",
    },
  ],
  finalEyebrow: "Final recommendation",
  finalTitle:
    "If you need shapewear for a real outfit, Shapellx deserves a fit check.",
  finalBody:
    "Click through when you know the outfit, support level, or body area you want to solve. The best purchase is the piece you can comfortably wear, not simply the firmest option.",
  mobileTitle: "Shapellx shapewear",
  mobileSubtitle: "4.3/5 - Best for support-level shopping",
  popup: {
    productId: "shapellx",
    productName: "Shapellx",
    rating: "4.3/5",
    headline: "Before you leave, match one outfit to the right Shapellx support level.",
    description:
      "Choose a real outfit need first, then compare compression, control area, size, and current pricing.",
    bullets: [
      "Best fit for shapewear, bodysuits, swim, bras, underwear, and support pieces.",
      "Use control area and compression level to avoid buying the wrong style.",
      "Check size chart, reviews, return terms, and final-sale language before ordering.",
    ],
    ctaLabel: "Shop Shapellx",
    ctaHref: affiliateLink,
    storageKey: "product-popup:shapellx",
    banner: {
      eyebrow: "Shapewear fit check",
      headline: "Compare support levels before you buy shapewear",
      description: "4.3/5 BrandDragon verdict for outfit-focused shoppers.",
    },
  },
};

export default function ShapellxReviewPage() {
  return <ConversionReviewPage config={config} />;
}
