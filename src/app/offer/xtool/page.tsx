import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  Factory,
  Gem,
  Layers3,
  MoveRight,
  Palette,
  PackageCheck,
  Ruler,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Store,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductConversionPopup, {
  type ProductConversionPopupConfig,
} from "@/components/ProductConversionPopup";
import { withBasePath } from "@/lib/site";

const offerHref =
  "https://ecomclik.com/?a=1001796&o=181588&c=0&co=364144&mt=20";

const xtoolPopupConfig: ProductConversionPopupConfig = {
  productId: "xtool",
  productName: "xTool",
  rating: "Best for makers and custom-product businesses",
  headline: "Before you go: match the machine to the work you want to sell.",
  description:
    "xTool spans approachable enclosed craft lasers, portable engravers, color-capable systems, and production-focused CO2 machines. The right choice starts with your material and workflow.",
  bullets: [
    "Compare M2, P3, F2 Ultra, and S1 by material and production volume",
    "Check workspace, ventilation, accessories, and software before ordering",
    "Use the current xTool offer to confirm configuration, price, and availability",
  ],
  ctaLabel: "Explore xTool offers",
  ctaHref: offerHref,
  storageKey: "product-popup:xtool",
  banner: {
    eyebrow: "xTool maker systems",
    headline: "Choose by material, project size, and production pace",
    description: "Compare current machines, bundles, delivery, and support.",
  },
};

export const metadata: Metadata = {
  title: "xTool Review and Buying Guide: Which Machine Fits Your Projects? | BrandDragon",
  description:
    "Compare xTool M2, P3, F2 Ultra, and S1 for home crafting, customization, metal marking, and small-business production.",
  alternates: { canonical: withBasePath("/offer/xtool") },
  openGraph: {
    title: "xTool Buying Guide: From First Project to Production Workflow",
    description:
      "A practical xTool comparison covering materials, machine types, workspace needs, accessories, and the best fit for different makers.",
    images: [withBasePath("/xtool-m2.webp")],
  },
};

const useCases = [
  {
    icon: Palette,
    eyebrow: "Everyday making",
    title: "Color craft and personalized gifts",
    body: "M2 combines full-color printing with diode laser options, making it the most visually flexible starting point for varied craft projects.",
  },
  {
    icon: Factory,
    eyebrow: "Production",
    title: "Larger runs and thicker materials",
    body: "P3 is the high-output option in this group, built around an 80W CO2 laser and automation for a more production-oriented workflow.",
  },
  {
    icon: Gem,
    eyebrow: "Specialty marking",
    title: "Metal work and portable customization",
    body: "F2 Ultra targets fast, detailed metal engraving, while the portable F-series format suits events and on-demand personalization.",
  },
];

const machines = [
  {
    name: "xTool M2",
    image: "/xtool-m2.webp",
    badge: "Color + laser",
    accent: "bg-[#ff6a2b] text-white",
    summary:
      "A hybrid craft system combining full-color CMYK inkjet with 10W or 20W diode laser configurations.",
    bestFor: "Gift makers, visual crafts, and varied everyday projects",
  },
  {
    name: "xTool P3",
    image: "/xtool-p3.webp",
    badge: "80W CO2",
    accent: "bg-[#172429] text-[#8ce6dc]",
    summary:
      "A flagship smart CO2 cutter positioned for higher efficiency, larger jobs, and production-focused work.",
    bestFor: "Established shops, thicker materials, and repeat orders",
  },
  {
    name: "xTool F2 Ultra",
    image: "/xtool-f2-ultra.webp",
    badge: "Metal specialist",
    accent: "bg-[#f1c84b] text-[#211b08]",
    summary:
      "A dual-laser platform built for fast metal marking, deeper engraving, and detailed batch customization.",
    bestFor: "Metal goods, jewelry, tumblers, and high-value personalization",
  },
  {
    name: "xTool S1",
    image: "/xtool-s1.webp",
    badge: "Enclosed diode",
    accent: "bg-[#d8efe9] text-[#153c38]",
    summary:
      "An enclosed, expandable diode system that balances approachable operation with room to grow.",
    bestFor: "First laser buyers, home studios, and side businesses",
  },
];

const comparisonRows = [
  {
    label: "Strongest use case",
    m2: "Color-forward crafts and mixed creative work",
    p3: "High-output cutting and shop production",
    f2: "Fast, detailed metal personalization",
    s1: "Enclosed home crafting and side-business work",
  },
  {
    label: "Core technology",
    m2: "CMYK inkjet plus 10W/20W diode laser options",
    p3: "80W CO2 laser with intelligent automation",
    f2: "MOPA fiber and diode dual-laser platform",
    s1: "Enclosed diode laser with expandable workspace",
  },
  {
    label: "Why choose it",
    m2: "One system for colorful output and laser projects",
    p3: "Power, speed, and repeatable production workflow",
    f2: "Specialized results on metal and small products",
    s1: "A more approachable enclosed entry point",
  },
  {
    label: "Check before buying",
    m2: "Choose the right laser-power configuration",
    p3: "Confirm space, ventilation, power, and throughput needs",
    f2: "Make sure your materials match its specialty",
    s1: "Confirm working area and accessory requirements",
  },
];

const buyingSteps = [
  {
    number: "01",
    title: "List the products you will actually make",
    body: "Start with three repeatable projects and their materials. A machine chosen around real jobs is easier to use than one chosen around the longest feature list.",
  },
  {
    number: "02",
    title: "Measure the complete workspace",
    body: "Include the machine, material loading, ventilation or filtration, computer access, storage, and room to handle finished pieces safely.",
  },
  {
    number: "03",
    title: "Price the full workflow",
    body: "Compare the machine configuration, accessories, materials, extraction, protection plan, delivery, and the software workflow you expect to use.",
  },
];

const faqs = [
  {
    question: "Is xTool only for laser engraving?",
    answer:
      "No. Its current lineup includes laser cutters and engravers, color and apparel printing systems, metal fabrication tools, heat presses, materials, accessories, and supporting software. This guide focuses on four representative laser systems.",
  },
  {
    question: "Which xTool is the easiest starting point?",
    answer:
      "For buyers prioritizing an enclosed craft workflow, S1 is the clearest starting point in this comparison. M2 is more compelling when full-color output is central. The best choice still depends on material, project size, and workspace.",
  },
  {
    question: "When does P3 make more sense than a diode laser?",
    answer:
      "P3 makes more sense when the goal is higher-throughput CO2 cutting, larger or thicker-material jobs, and a production-oriented workflow. It also asks for a more serious space and budget commitment.",
  },
  {
    question: "What should I verify on the offer page?",
    answer:
      "Confirm the exact model and power configuration, included accessories, supported materials, working area, ventilation requirements, delivery estimate, warranty or protection options, return terms, and current price.",
  },
];

function OfferCta({ className, label = "Explore xTool offers" }: { className?: string; label?: string }) {
  return (
    <Button size="lg" className={className} asChild>
      <a href={offerHref} rel="sponsored">
        {label}
        <ArrowRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

export default function XToolOfferPage() {
  return (
    <>
      <main className="bg-[#f4f1ea] text-[#191b1b]">
        <section className="relative min-h-[620px] overflow-hidden bg-[#151817] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">
            <Image
              src={withBasePath("/xtool-m2.webp")}
              alt="xTool M2 color craft laser system"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-contain object-right"
            />
          </div>
          <div className="absolute inset-y-0 left-0 w-2 bg-[#ff6a2b]" />
          <div className="container relative mx-auto flex min-h-[620px] max-w-7xl flex-col px-5 py-6 sm:px-7 lg:px-10">
            <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ChevronRight data-icon="inline-start" />
              BrandDragon Maker Guide
            </Link>
            <div className="my-auto max-w-3xl py-14 lg:max-w-[42%]">
              <div className="mb-5 flex flex-wrap gap-3">
                <Badge className="border-orange-300/30 bg-[#ff6a2b] text-white hover:bg-[#ff6a2b]">xTool</Badge>
                <Badge className="border-white/20 bg-white/10 text-white hover:bg-white/10">Laser, print, and maker systems</Badge>
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-[56px]">
                xTool machines for ideas that need to become real products.
              </h1>
              <div className="relative mt-5 aspect-[16/7] overflow-hidden bg-white lg:hidden">
                <Image
                  src={withBasePath("/xtool-m2.webp")}
                  alt="xTool M2 color craft laser system"
                  fill
                  sizes="100vw"
                  className="object-contain px-4"
                />
              </div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                From colorful gift making to CO2 production and precise metal marking, xTool offers distinct systems for very different jobs. This guide helps you choose by material, space, and production pace.
              </p>
              <div className="mt-8 flex gap-3 sm:items-center">
                <OfferCta label="View xTool options" className="h-12 flex-1 rounded-md bg-[#ff6a2b] px-4 text-sm font-bold text-white shadow-xl hover:bg-[#e9551e] sm:h-14 sm:flex-none sm:px-7 sm:text-base" />
                <a href="#comparison" className="inline-flex h-12 flex-1 items-center justify-center gap-2 border border-white/25 px-4 text-xs font-bold text-white hover:bg-white/10 sm:h-14 sm:flex-none sm:px-7 sm:text-sm">
                  Compare the machines
                  <MoveRight />
                </a>
              </div>
              <div className="mt-7 hidden gap-3 text-sm text-white/72 sm:grid sm:grid-cols-3">
                {[
                  [WandSparkles, "Craft-ready workflows"],
                  [ScanLine, "Multiple laser types"],
                  [Store, "Home to small business"],
                ].map(([Icon, label]) => {
                  const FeatureIcon = Icon as typeof WandSparkles;
                  return <div key={label as string} className="flex items-center gap-2"><FeatureIcon className="text-[#ff9b6d]" /><span>{label as string}</span></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8d2c7] bg-white">
          <div className="container mx-auto grid max-w-6xl gap-5 px-5 py-6 sm:grid-cols-3">
            {[
              [Layers3, "Choose by material", "Wood, acrylic, metal, glass, fabric, or mixed media."],
              [Ruler, "Plan the whole workspace", "Machine footprint, ventilation, loading, and storage."],
              [PackageCheck, "Check the exact bundle", "Power, accessories, delivery, and support can vary."],
            ].map(([Icon, title, body]) => {
              const FeatureIcon = Icon as typeof Layers3;
              return <div key={title as string} className="flex gap-3 border-[#d8d2c7] sm:border-r sm:pr-5 last:border-0"><FeatureIcon className="mt-1 shrink-0 text-[#e85b24]" /><div><p className="font-bold">{title as string}</p><p className="mt-1 text-sm leading-6 text-[#656b68]">{body as string}</p></div></div>;
            })}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-5">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-2 text-[#d84c18]"><Sparkles /><span className="text-sm font-bold uppercase tracking-[.16em]">Start with the job</span></div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">The best machine is the one built for your repeat order.</h2>
              <p className="mt-5 text-lg leading-8 text-[#656b68]">xTool covers several categories, so buying by brand alone is not enough. Begin with the product you want to make, the material it uses, and how many you expect to produce.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {useCases.map(({ icon: Icon, eyebrow, title, body }) => (
                <article key={title} className="border-t-4 border-[#191b1b] bg-white p-7 shadow-sm">
                  <div className="mb-7 flex size-12 items-center justify-center bg-[#ffe1d4] text-[#d84c18]"><Icon /></div>
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d84c18]">{eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-[#656b68]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8d2c7] bg-[#ebe7de] py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-5">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-[#d84c18]"><BadgeCheck /><span className="text-sm font-bold uppercase tracking-[.16em]">Representative lineup</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Four machines, four very different reasons to buy.</h2></div>
              <p className="max-w-sm text-sm leading-6 text-[#656b68]">Models and configurations change. Use these profiles to narrow the category, then confirm current specifications on the offer page.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {machines.map((machine) => (
                <article key={machine.name} className="grid overflow-hidden bg-white shadow-sm sm:grid-cols-[.9fr_1.1fr]">
                  <div className="relative min-h-64 bg-[#f8f8f6]">
                    <Image src={withBasePath(machine.image)} alt={machine.name} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-contain p-6" />
                  </div>
                  <div className="flex flex-col p-6">
                    <Badge className={`w-fit ${machine.accent}`}>{machine.badge}</Badge>
                    <h3 className="mt-5 text-3xl font-bold">{machine.name}</h3>
                    <p className="mt-3 leading-7 text-[#656b68]">{machine.summary}</p>
                    <div className="mt-auto pt-6"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#999289]">Best fit</p><p className="mt-2 text-sm font-semibold leading-6">{machine.bestFor}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="comparison" className="bg-[#172429] py-16 text-white md:py-24">
          <div className="container mx-auto max-w-7xl px-5">
            <div className="mb-10 max-w-3xl"><div className="mb-4 flex items-center gap-2 text-[#8ce6dc]"><Zap /><span className="text-sm font-bold uppercase tracking-[.16em]">Side-by-side guide</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Match capability to the workbench.</h2><p className="mt-5 text-lg leading-8 text-white/65">A specialty machine can beat a generalist when the job is clear. Compare the role each xTool system is designed to play.</p></div>
            <div className="overflow-hidden border border-white/12">
              <div className="hidden grid-cols-[1.1fr_repeat(4,1fr)] border-b border-white/12 bg-white/8 px-5 py-4 text-xs font-bold uppercase tracking-[.14em] text-white/55 lg:grid"><div>Decision point</div><div className="text-[#ff9b6d]">M2</div><div>P3</div><div>F2 Ultra</div><div>S1</div></div>
              {comparisonRows.map((row) => (
                <div key={row.label} className="grid gap-3 border-b border-white/12 px-5 py-5 last:border-0 lg:grid-cols-[1.1fr_repeat(4,1fr)] lg:gap-4">
                  <div className="font-bold">{row.label}</div>
                  {[["M2", row.m2], ["P3", row.p3], ["F2 Ultra", row.f2], ["S1", row.s1]].map(([name, value], index) => <div key={name} className={`p-3 text-sm leading-6 ${index === 0 ? "bg-[#ff6a2b]/15 text-[#ffd6c5]" : "text-white/65"}`}><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/40 lg:hidden">{name}</span>{value}</div>)}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 border border-[#8ce6dc]/30 bg-[#8ce6dc]/10 p-6 md:flex-row md:items-center"><div><p className="font-bold text-[#c4fff8]">Shortlist the category before comparing bundles</p><p className="mt-1 text-sm text-white/60">Then confirm current specifications, included accessories, delivery, and return terms.</p></div><OfferCta className="h-12 shrink-0 rounded-md bg-[#ff6a2b] px-6 font-bold text-white hover:bg-[#e9551e]" /></div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <div><div className="mb-4 flex items-center gap-2 text-[#d84c18]"><WandSparkles /><span className="text-sm font-bold uppercase tracking-[.16em]">Buying workflow</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Plan the work before the machine arrives.</h2><p className="mt-5 text-lg leading-8 text-[#656b68]">The machine is only one part of a reliable making setup. A ten-minute planning pass can prevent the most expensive mismatches.</p><OfferCta className="mt-7 h-13 rounded-md bg-[#191b1b] px-7 font-bold text-white hover:bg-[#343837]" /></div>
            <div className="grid gap-4">{buyingSteps.map((step) => <article key={step.number} className="grid gap-4 border border-[#d8d2c7] bg-white p-6 md:grid-cols-[72px_1fr] md:items-start"><div className="flex size-14 items-center justify-center bg-[#ff6a2b] text-lg font-bold text-white">{step.number}</div><div><h3 className="text-xl font-bold">{step.title}</h3><p className="mt-2 leading-7 text-[#656b68]">{step.body}</p></div></article>)}</div>
          </div>
        </section>

        <section className="bg-[#dcece8] py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
            <div className="bg-white p-7 shadow-sm"><BadgeCheck className="text-[#157b71]" /><h3 className="mt-5 text-2xl font-bold">Choose xTool if...</h3><ul className="mt-5 space-y-4 text-[#596360]"><li className="flex gap-3"><Check className="shrink-0 text-[#157b71]" />You want a maker ecosystem with multiple machine types.</li><li className="flex gap-3"><Check className="shrink-0 text-[#157b71]" />You have repeatable projects and known materials.</li><li className="flex gap-3"><Check className="shrink-0 text-[#157b71]" />You value official materials, software, and support resources.</li></ul></div>
            <div className="bg-white p-7 shadow-sm"><CircleHelp className="text-[#d84c18]" /><h3 className="mt-5 text-2xl font-bold">Check first...</h3><ul className="mt-5 space-y-4 text-[#596360]"><li className="flex gap-3"><Check className="shrink-0 text-[#d84c18]" />Material compatibility and working area.</li><li className="flex gap-3"><Check className="shrink-0 text-[#d84c18]" />Ventilation, filtration, and room layout.</li><li className="flex gap-3"><Check className="shrink-0 text-[#d84c18]" />The exact machine and accessory bundle.</li></ul></div>
            <div className="bg-[#172429] p-7 text-white shadow-sm"><ShieldCheck className="text-[#8ce6dc]" /><h3 className="mt-5 text-2xl font-bold">Pause if...</h3><ul className="mt-5 space-y-4 text-white/68"><li className="flex gap-3"><X className="shrink-0 text-[#8ce6dc]" />You have not identified a first project.</li><li className="flex gap-3"><X className="shrink-0 text-[#8ce6dc]" />Your space cannot support the full workflow.</li><li className="flex gap-3"><X className="shrink-0 text-[#8ce6dc]" />You are counting on unverified income claims.</li></ul></div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr]">
            <div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Questions before you choose.</h2><p className="mt-5 text-lg leading-8 text-[#656b68]">Use these checks to narrow the product family, then verify the current configuration on xTool.</p></div>
            <Accordion type="single" collapsible className="border border-[#d8d2c7] bg-[#f4f1ea] px-6">{faqs.map((item) => <AccordionItem key={item.question} value={item.question}><AccordionTrigger className="text-left text-lg font-bold">{item.question}</AccordionTrigger><AccordionContent className="text-base leading-7 text-[#656b68]">{item.answer}</AccordionContent></AccordionItem>)}</Accordion>
          </div>
        </section>

        <section className="bg-[#ff6a2b] py-16 text-white md:py-20">
          <div className="container mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-white/75"><Sparkles /><span className="text-sm font-bold uppercase tracking-[.16em]">Final check</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Choose the job. Then choose the xTool built to do it.</h2><p className="mt-5 text-lg leading-8 text-white/78">Open the current offer to compare machines, configurations, bundles, availability, delivery, and support before ordering.</p></div>
            <div className="flex flex-col gap-3"><OfferCta className="h-14 rounded-md bg-white px-8 text-base font-bold text-[#b83f13] hover:bg-[#fff4ef]" /><p className="text-center text-xs text-white/70">View current xTool options</p></div>
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8d2c7] bg-white/96 p-3 shadow-2xl backdrop-blur md:hidden"><div className="mx-auto flex max-w-lg items-center gap-3"><div className="min-w-0 flex-1"><div className="truncate text-sm font-bold">xTool maker systems</div><div className="text-xs text-[#656b68]">Compare machines and current bundles</div></div><OfferCta label="View offers" className="h-11 shrink-0 rounded-md bg-[#ff6a2b] px-4 text-sm font-bold text-white hover:bg-[#e9551e]" /></div></div>
      <ProductConversionPopup config={xtoolPopupConfig} />
    </>
  );
}
