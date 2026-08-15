import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  CalendarDays,
  CreditCard,
  Map,
  Palmtree,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import ConversionReviewPage, {
  type ConversionReviewConfig,
} from "@/components/ConversionReviewPage";
import { withBasePath } from "@/lib/site";

const affiliateLink =
  "https://ecomclik.com/?a=1001796&c=417842&co=364144&mt=20";

export const metadata: Metadata = {
  title:
    "Vacations by Marriott Bonvoy Review 2026: Travel Packages, Points, and Deals | BrandDragon",
  description:
    "A conversion-focused Vacations by Marriott Bonvoy review for travelers comparing hotel-and-flight packages, Marriott Bonvoy points, featured deals, and resort getaways.",
  alternates: {
    canonical: withBasePath("/review/vacations-by-marriott-bonvoy"),
  },
  openGraph: {
    title: "Vacations by Marriott Bonvoy Review",
    description:
      "See who should book through Vacations by Marriott Bonvoy and how to evaluate package value before reserving.",
    images: [withBasePath("/vacations-marriott-review.svg")],
  },
};

const config: ConversionReviewConfig = {
  categoryHref: "/category/market",
  categoryLabel: "Travel Packages",
  affiliateLink,
  ctaLabel: "Search Marriott Vacations",
  ctaMicrocopy: "Compare hotel + flight packages before booking separately.",
  heroImage: "/vacations-marriott-review.svg",
  heroImageAlt: "Vacations by Marriott Bonvoy travel package interface concept",
  heroTags: ["Best for Marriott loyalists"],
  heroTitle:
    "Vacations by Marriott Bonvoy Review: hotel + flight packages with points upside.",
  heroDescription:
    "Vacations by Marriott Bonvoy is most compelling when you want a polished hotel-and-flight booking path, recognizable Marriott brands, featured destination deals, and a chance to earn Marriott Bonvoy points on qualifying packages.",
  heroTiles: ["Hotel", "Flight", "Points"],
  proofPoints: [
    "Official landing page promotes hotel + flight packages and featured deals",
    "Useful for Caribbean, Mexico, Hawaii, all-inclusive, beach, golf, spa, and family trips",
    "Best first test: compare the same destination against booking hotel and flights separately",
  ],
  ctaHighlights: ["Hotel + flight", "Bonvoy points", "Deal scan"],
  verdictEyebrow: "BrandDragon Verdict",
  verdictTitle:
    "Vacations by Marriott Bonvoy is worth checking when the trip is bigger than a room booking.",
  verdictBody:
    "The value is not just finding a hotel. The stronger use case is packaging a stay with flights, browsing destination-led deals, and keeping the reservation inside a Marriott-flavored travel ecosystem. It is especially useful for travelers who already care about Marriott Bonvoy points or want resort destinations without piecing together every part of the trip manually.",
  rating: "4.5",
  ratingSummary:
    "Strong fit for Marriott loyalists, resort travelers, and anyone comparing bundled vacation packages.",
  decisionRows: [
    ["Best for", "Couples, families, Marriott loyalists, and resort travelers"],
    ["Main value", "Hotel + flight package discovery with familiar Marriott brands"],
    ["Biggest strength", "Destination deals, resort discovery, and points-oriented booking"],
    ["Watch out for", "Compare package totals against booking each component separately"],
  ],
  useCases: [
    {
      icon: Plane,
      title: "Hotel + flight packages",
      body: "Use it when you want to compare a bundled vacation instead of juggling airline and hotel tabs on your own.",
    },
    {
      icon: Palmtree,
      title: "Resort and beach trips",
      body: "The landing page highlights destinations such as Aruba, Punta Cana, Costa Rica, Bahamas, Caribbean, Hawaii, and all-inclusive resorts.",
    },
    {
      icon: CreditCard,
      title: "Marriott Bonvoy points",
      body: "The site emphasizes Marriott Bonvoy points on qualifying vacation packages, which matters if points strategy is part of your travel planning.",
    },
    {
      icon: CalendarDays,
      title: "Deal-led planning",
      body: "Featured offers and destination modules make it useful when your dates are flexible and you want a shortlist of vacation ideas.",
    },
  ],
  winsTitle: "Why it can convert",
  wins: [
    "Package shoppers can compare hotel and flight value from one travel flow.",
    "Marriott brand familiarity reduces friction for travelers who already trust the hotel ecosystem.",
    "Featured destination deals create a clear reason to click before booking elsewhere.",
  ],
  cautionsTitle: "What to check first",
  cautions: [
    "Verify current package rules, cancellation terms, taxes, fees, and points eligibility before purchase.",
    "Compare the same hotel and flight booked separately so the package value is clear.",
    "Check whether the deal fits your destination, dates, room type, and loyalty goals.",
  ],
  ctaBandEyebrow: "Best first test",
  ctaBandTitle:
    "Price one real destination as a package before you book anything separately.",
  ctaBandBody:
    "Start with a trip you already want to take. Search your destination and dates, then compare the Marriott package total against separate hotel and flight prices.",
  workflowEyebrow: "How to evaluate it",
  workflowTitle: "Use this 4-step booking check before you decide.",
  workflowBody:
    "A travel package should either save money, reduce planning friction, or improve the overall stay experience.",
  workflow: [
    {
      title: "Start with fixed dates and one destination",
      body: "Search the same destination you would book elsewhere so the package comparison is grounded in a real trip.",
    },
    {
      title: "Compare package total against separate booking",
      body: "Look at the total after taxes and fees, not just the headline per-person or nightly price.",
    },
    {
      title: "Check Marriott Bonvoy value",
      body: "If points earning or brand status matters to you, confirm the current rules before checkout.",
    },
    {
      title: "Review cancellation and flight details",
      body: "Vacation package terms can differ from standard hotel reservations, so read the policy before paying.",
    },
  ],
  audienceTitle: "Who should click through?",
  audienceBody:
    "The strongest fit is a traveler who wants a real package quote, not just destination inspiration.",
  audienceCards: [
    {
      icon: Users,
      title: "Families",
      body: "Useful for resort stays, beach trips, and multi-person planning where fewer booking steps can matter.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Bonvoy loyalists",
      body: "A natural check if you already prefer Marriott brands and want a package that may align with points goals.",
    },
    {
      icon: Sparkles,
      title: "Deal hunters",
      body: "Worth checking when featured offers, bonus points, or destination packages line up with your dates.",
    },
  ],
  comparisonTitle: "Vacations by Marriott Bonvoy vs. booking separately",
  comparisonBody:
    "The question is whether a package gives you better value or less planning friction than assembling the same trip yourself.",
  comparisons: [
    {
      name: "Vacations by Marriott Bonvoy",
      strength: "Hotel + flight package discovery with Marriott brand familiarity and points-oriented offers",
      fit: "Best when you want a vacation package quote from the Marriott ecosystem",
      highlight: true,
    },
    {
      name: "Booking hotel directly",
      strength: "Simple hotel-only reservations and direct property selection",
      fit: "Best when flights, cars, or package deals do not matter",
    },
    {
      name: "Airline vacation portals",
      strength: "Flight-first package planning, often tied to airline loyalty programs",
      fit: "Best when airline miles and flight choice are the priority",
    },
    {
      name: "General travel aggregators",
      strength: "Broad comparison across many brands and inventory sources",
      fit: "Best when you want the widest possible marketplace scan",
    },
  ],
  faqTitle: "FAQ before you book",
  faqBody:
    "Short answers for travelers deciding whether to click through and compare a Marriott vacation package.",
  faqs: [
    {
      question: "What is Vacations by Marriott Bonvoy best for?",
      answer:
        "It is best for travelers comparing vacation packages, especially hotel + flight trips built around Marriott brands, resort destinations, and points-oriented offers.",
    },
    {
      question: "Can I earn Marriott Bonvoy points?",
      answer:
        "The official landing page promotes earning Marriott Bonvoy points on qualifying vacation packages. Check current terms on the booking page before relying on the points value.",
    },
    {
      question: "Should I still compare prices elsewhere?",
      answer:
        "Yes. The smartest move is to compare the package total against booking the same hotel and flights separately.",
    },
    {
      question: "What should I search first?",
      answer:
        "Start with one trip you are already considering, such as a Caribbean, Mexico, Hawaii, all-inclusive, spa, golf, or family vacation.",
    },
  ],
  finalEyebrow: "Final recommendation",
  finalTitle:
    "If you already want a resort trip, price the Marriott package before you book.",
  finalBody:
    "The click is most worthwhile when you have a real destination and date range. Use the package result as a benchmark against direct hotel and flight pricing.",
  mobileTitle: "Marriott vacation packages",
  mobileSubtitle: "4.5/5 - Best for hotel + flight comparison",
  popup: {
    productId: "vacations-by-marriott-bonvoy",
    productName: "Vacations by Marriott Bonvoy",
    rating: "4.5/5",
    headline: "Before you leave, price one real Marriott vacation package.",
    description:
      "Search a destination you already want and compare the hotel + flight package against booking each piece separately.",
    bullets: [
      "Best fit for resort, beach, family, all-inclusive, and Marriott-loyalty travel.",
      "Use it as a quick benchmark before committing to a hotel-only or airline-only booking.",
      "Check current deal terms, package totals, cancellation rules, and points eligibility before buying.",
    ],
    ctaLabel: "Search Marriott Vacations",
    ctaHref: affiliateLink,
    storageKey: "product-popup:vacations-by-marriott-bonvoy",
    banner: {
      eyebrow: "Travel package check",
      headline: "Compare hotel + flight packages before you book",
      description: "4.5/5 BrandDragon verdict for Marriott vacation shoppers.",
    },
  },
};

export default function VacationsByMarriottBonvoyReviewPage() {
  return <ConversionReviewPage config={config} />;
}
