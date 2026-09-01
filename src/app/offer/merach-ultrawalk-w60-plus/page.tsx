import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bluetooth,
  Check,
  ChevronRight,
  CircleHelp,
  Gauge,
  Headphones,
  Layers3,
  MoveRight,
  PackageCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  TrendingUp,
  Volume2,
  Warehouse,
  Weight,
  X,
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

const offerHref = "https://hongkongmerachtechnologycolimited.pxf.io/WO4gLM";

const popupConfig: ProductConversionPopupConfig = {
  productId: "merach-ultrawalk-w60-plus",
  productName: "MERACH UltraWalk W60 Plus",
  rating: "Best for compact incline walking",
  headline: "Before you go: compare the W60 Plus with a basic walking pad.",
  description:
    "The W60 Plus combines automatic incline, a wider walking area, and a reinforced frame in a low-profile design made for everyday home walking.",
  bullets: [
    "12% automatic incline with 12 adjustable levels",
    "400 lb maximum user capacity and a 16.5-inch-wide deck",
    "0.6-4.0 mph speed range with app and remote control",
  ],
  ctaLabel: "Check the W60 Plus offer",
  ctaHref: offerHref,
  storageKey: "product-popup:merach-ultrawalk-w60-plus",
  banner: {
    eyebrow: "MERACH W60 Plus",
    headline: "Incline walking without a full-size treadmill footprint",
    description: "Check the current offer, delivery details, and availability.",
  },
};

export const metadata: Metadata = {
  title: "MERACH UltraWalk W60 Plus Review: 12% Incline Walking Pad | BrandDragon",
  description:
    "A practical MERACH UltraWalk W60 Plus review covering its 12% auto incline, 400 lb capacity, wide deck, quiet motor, storage, app controls, and best-fit buyers.",
  alternates: { canonical: withBasePath("/offer/merach-ultrawalk-w60-plus") },
  openGraph: {
    title: "MERACH UltraWalk W60 Plus: A Walking Pad Built for the Long Run",
    description:
      "See how the W60 Plus compares with basic walking pads and folding treadmills for compact incline walking at home.",
    images: [withBasePath("/merach-w60-workspace.jpg")],
  },
};

const highlights = [
  { icon: TrendingUp, value: "12%", label: "automatic incline" },
  { icon: Weight, value: "400 lb", label: "maximum capacity" },
  { icon: Layers3, value: "16.5 in", label: "wide walking deck" },
];

const comparisonRows = [
  {
    label: "Best fit",
    w60: "Daily walking with adjustable incline in a compact room",
    basic: "Simple flat walking while working or watching TV",
    folding: "Faster walking or running with a larger dedicated setup",
  },
  {
    label: "Incline",
    w60: "12 automatic levels, up to 12%",
    basic: "Usually flat or manually adjusted",
    folding: "Varies by model; often available on larger units",
  },
  {
    label: "Walking feel",
    w60: "Wider 16.5 x 41.3 in deck and reinforced frame",
    basic: "Typically narrower and lighter",
    folding: "Usually the largest deck and most handrail support",
  },
  {
    label: "Storage",
    w60: "Low profile, transport wheels, handle, and upright feet",
    basic: "Often the easiest category to slide under furniture",
    folding: "Folds vertically but needs more floor and ceiling space",
  },
  {
    label: "Speed range",
    w60: "0.6-4.0 mph for walking",
    basic: "Generally intended for walking",
    folding: "Often supports jogging or running",
  },
  {
    label: "Main trade-off",
    w60: "Heavier than a basic pad and not designed for running",
    basic: "Less incline capability and a lighter-duty feel",
    folding: "Larger footprint and more involved storage",
  },
];

const faqs = [
  {
    question: "Who is the UltraWalk W60 Plus best for?",
    answer:
      "It is a strong fit for people who want walking-focused exercise, adjustable incline, and a stable deck without dedicating a room to a full-size treadmill. Its 0.6-4.0 mph range is intended for walking rather than running.",
  },
  {
    question: "How much space does it need?",
    answer:
      "MERACH lists the machine at 50.2 x 22.2 x 6.1 inches. Measure both the operating area and the intended storage space, leaving safe clearance around the walking deck.",
  },
  {
    question: "Can it be used under a standing desk?",
    answer:
      "Yes, its low-profile format and walking speed range suit standing-desk sessions. Start flat and slow, then use incline only when your balance, desk position, and workspace make it comfortable to do so.",
  },
  {
    question: "Does it require assembly?",
    answer:
      "The current MERACH product specifications describe it as requiring no assembly. Check the current delivery details and setup instructions before ordering, as packaging and included accessories can change.",
  },
  {
    question: "What should I verify before buying?",
    answer:
      "Confirm the current price, shipping and return terms, warranty, delivery access, product dimensions, user capacity, and whether a walking-only top speed matches your goals.",
  },
];

function OfferButton({ label = "Check the W60 Plus offer", className }: { label?: string; className?: string }) {
  return (
    <Button size="lg" className={className} asChild>
      <a href={offerHref} rel="sponsored">
        {label}
        <ArrowRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

export default function MerachUltraWalkW60PlusPage() {
  return (
    <>
      <main className="bg-[#f4f1eb] pb-20 text-[#172126] lg:pb-0">
        <section className="relative overflow-hidden bg-[#142329] text-white">
          <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
            <Image
              src={withBasePath("/merach-w60-workspace.jpg")}
              alt="MERACH UltraWalk W60 Plus used under a standing desk"
              fill
              priority
              sizes="58vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-2/5 bg-[linear-gradient(90deg,#142329,transparent)]" />
          </div>

          <div className="container relative mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white">
              <ChevronRight />
              BrandDragon Offer Guide
            </Link>

            <div className="flex min-h-[650px] max-w-xl flex-col justify-center gap-6 py-10 lg:min-h-[670px] lg:py-16">
              <div className="flex flex-wrap gap-2">
                <Badge className="border-[#55d7df]/40 bg-[#55d7df]/15 text-[#b9f8fb] hover:bg-[#55d7df]/15">MERACH UltraWalk W60 Plus</Badge>
                <Badge className="border-[#ff7657]/40 bg-[#ff7657]/15 text-[#ffd6cc] hover:bg-[#ff7657]/15">12% auto incline</Badge>
              </div>
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[62px]">
                Incline walking without the full-size treadmill footprint.
              </h1>
              <p className="max-w-lg text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                The W60 Plus adds automatic incline, a wider deck, and a reinforced 400 lb-capacity frame to the compact walking-pad format.
              </p>

              <div className="relative aspect-[5/3] overflow-hidden rounded-lg lg:hidden">
                <Image
                  src={withBasePath("/merach-w60-workspace.jpg")}
                  alt="MERACH UltraWalk W60 Plus used in a bright home workspace"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <OfferButton className="h-14 bg-[#55d7df] px-7 font-bold text-[#09262c] hover:bg-[#7ce5eb]" />
                <Button size="lg" variant="outline" className="h-14 border-white/25 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white" asChild>
                  <a href="#comparison">
                    Compare formats
                    <MoveRight data-icon="inline-end" />
                  </a>
                </Button>
              </div>

              <p className="text-xs leading-5 text-white/55">Confirm current price, availability, delivery terms, and warranty on the offer page.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d7d0c6] bg-white">
          <div className="container mx-auto grid max-w-6xl sm:grid-cols-3">
            {highlights.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-4 border-b border-[#d7d0c6] px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                <Icon className="size-7 shrink-0 text-[#ef5e42]" />
                <div><p className="text-2xl font-bold">{value}</p><p className="text-sm text-[#667177]">{label}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-16">
              <div>
                <p className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-[#d84c34]"><Sparkles /> Why it stands out</p>
                <h2 className="text-4xl font-bold leading-tight md:text-5xl">A more planted take on the walking pad.</h2>
                <p className="mt-5 text-lg leading-8 text-[#5f6b71]">
                  The reinforced structure and wider belt trade some portability for a steadier feel. That makes sense for buyers who expect to use the machine regularly and care more about confidence underfoot than carrying it from room to room.
                </p>
                <div className="mt-8 grid gap-5">
                  {[
                    [ShieldCheck, "Reinforced foundation", "A 400 lb maximum capacity and substantial frame create a more grounded platform."],
                    [TrendingUp, "Incline built in", "Twelve automatic levels make a walking session more varied without manual risers."],
                    [Volume2, "Home-friendly sound", "MERACH lists an average operating noise level of 53.6 dB."],
                  ].map(([Icon, title, body]) => {
                    const FeatureIcon = Icon as typeof ShieldCheck;
                    return <div key={title as string} className="flex gap-4"><FeatureIcon className="mt-1 shrink-0 text-[#0d8d99]" /><div><h3 className="font-bold">{title as string}</h3><p className="mt-1 leading-7 text-[#667177]">{body as string}</p></div></div>;
                  })}
                </div>
              </div>
              <div className="relative aspect-[5/3] overflow-hidden rounded-lg bg-[#dbe6e7]">
                <Image src={withBasePath("/merach-w60-incline.jpg")} alt="MERACH W60 Plus demonstrating automatic incline beside a flat walking pad" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#17272c] py-16 text-white md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[5/3] overflow-hidden rounded-lg">
                <Image src={withBasePath("/merach-w60-wide-deck.jpg")} alt="W60 Plus 16.5 by 41.3 inch walking deck dimensions" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <Badge className="mb-5 w-fit border-[#55d7df]/40 bg-[#55d7df]/15 text-[#b9f8fb] hover:bg-[#55d7df]/15">33% wider deck</Badge>
                <h2 className="text-4xl font-bold leading-tight md:text-5xl">More room for a natural walking rhythm.</h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  The 16.5 x 41.3-inch walking area gives each step more usable room than many narrow desk pads. The speed range stays focused on walking, from 0.6 to 4.0 mph.
                </p>
                <div className="mt-7 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
                  {["No assembly listed", "Magnetic remote dock", "Pause-memory function", "Child-lock protection"].map((item) => <div key={item} className="flex items-center gap-2"><Check className="text-[#55d7df]" />{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase text-[#d84c34]">Fits into the day</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Work, store, and train without rearranging the house.</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-[#ddd7cf] bg-[#f4f1eb]">
                <div className="relative aspect-[5/3]"><Image src={withBasePath("/merach-w60-storage.jpg")} alt="MERACH walking pad stored under a bed" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
                <div className="p-6"><Warehouse className="text-[#d84c34]" /><h3 className="mt-4 text-2xl font-bold">Storage that accounts for the weight</h3><p className="mt-3 leading-7 text-[#667177]">Front wheels, a moving handle, and upright storage feet help manage its heavier reinforced frame. It can also slide under compatible beds or sofas.</p></div>
              </div>
              <div className="overflow-hidden rounded-lg border border-[#ddd7cf] bg-[#f4f1eb]">
                <div className="relative aspect-[5/3]"><Image src={withBasePath("/merach-w60-smart.jpg")} alt="MERACH app controls and training data shown beside the W60 Plus" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /></div>
                <div className="p-6"><Smartphone className="text-[#0d8d99]" /><h3 className="mt-4 text-2xl font-bold">Remote simplicity, app-level detail</h3><p className="mt-3 leading-7 text-[#667177]">Use the remote for basic control or the MERACH app for workout records and guided sessions. The product page also lists Apple Health and Google Fit connectivity.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="comparison" className="scroll-mt-24 py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase text-[#d84c34]">Format comparison</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">Choose the machine around the movement you will repeat.</h2>
              <p className="mt-5 text-lg leading-8 text-[#667177]">The W60 Plus sits between a minimal desk pad and a larger folding treadmill. Its advantage is incline and stability in a walking-focused footprint.</p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-[#d7d0c6] bg-white">
              <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                <thead className="bg-[#17272c] text-white"><tr><th className="p-5">Compare</th><th className="p-5 text-[#86e7ec]">W60 Plus</th><th className="p-5">Basic walking pad</th><th className="p-5">Folding treadmill</th></tr></thead>
                <tbody>{comparisonRows.map((row) => <tr key={row.label} className="border-t border-[#e3ddd5] align-top"><th className="p-5 font-bold">{row.label}</th><td className="bg-[#eaf8f8] p-5 font-semibold text-[#17454b]">{row.w60}</td><td className="p-5 text-[#667177]">{row.basic}</td><td className="p-5 text-[#667177]">{row.folding}</td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[#e7ddd1] py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase text-[#b9432f]">At a glance</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">The details to measure before it arrives.</h2>
              <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {[
                  [Gauge, "Speed", "0.6-4.0 mph"],
                  [TrendingUp, "Incline", "12 levels, up to 12%"],
                  [Layers3, "Walking area", "16.5 x 41.3 in"],
                  [PackageCheck, "Machine size", "50.2 x 22.2 x 6.1 in"],
                  [Headphones, "Average noise", "53.6 dB listed"],
                  [Bluetooth, "Audio", "5W Bluetooth speaker"],
                ].map(([Icon, label, value]) => {
                  const SpecIcon = Icon as typeof Gauge;
                  return <div key={label as string} className="flex gap-3 border-b border-[#cbbfb2] pb-4"><SpecIcon className="shrink-0 text-[#0d8d99]" /><div><p className="text-sm text-[#667177]">{label as string}</p><p className="font-bold">{value as string}</p></div></div>;
                })}
              </div>
            </div>
            <div className="relative aspect-[5/3] overflow-hidden rounded-lg lg:aspect-auto">
              <Image src={withBasePath("/merach-w60-cooling.jpg")} alt="Ventilated brushless motor cooling system in the W60 Plus" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="border-t-4 border-[#0d8d99] bg-white p-7"><BadgeCheck className="text-[#0d8d99]" /><h3 className="mt-5 text-2xl font-bold">Choose it when</h3><p className="mt-3 leading-7 text-[#667177]">You want walking-first exercise, meaningful automatic incline, a wider platform, and compact storage.</p></div>
              <div className="border-t-4 border-[#ef5e42] bg-white p-7"><TimerReset className="text-[#ef5e42]" /><h3 className="mt-5 text-2xl font-bold">Check first</h3><p className="mt-3 leading-7 text-[#667177]">Measure the room, confirm you can move its substantial frame, and compare current shipping, returns, and warranty terms.</p></div>
              <div className="border-t-4 border-[#17272c] bg-white p-7"><X className="text-[#17272c]" /><h3 className="mt-5 text-2xl font-bold">Skip it when</h3><p className="mt-3 leading-7 text-[#667177]">Your priority is running speed, a full handrail, or the lightest possible pad to carry between floors.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[.7fr_1.3fr]">
            <div><CircleHelp className="size-9 text-[#d84c34]" /><h2 className="mt-5 text-4xl font-bold">W60 Plus FAQ</h2><p className="mt-4 leading-7 text-[#667177]">Practical answers before you compare the current offer.</p></div>
            <Accordion type="single" collapsible className="border-t border-[#d7d0c6]">
              {faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger className="text-left text-lg font-bold">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-7 text-[#667177]">{faq.answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>

        <section className="bg-[#ef5e42] py-16 text-[#1b2428] md:py-20">
          <div className="container mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center">
            <div className="max-w-2xl"><p className="text-sm font-bold uppercase">Ready to compare the current offer?</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">See whether the W60 Plus fits your room and routine.</h2></div>
            <OfferButton label="View the current offer" className="h-14 shrink-0 bg-[#17272c] px-7 font-bold text-white hover:bg-[#263b41]" />
          </div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-white/95 p-3 shadow-2xl backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3"><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">MERACH W60 Plus</p><p className="truncate text-xs text-muted-foreground">12% incline - 400 lb capacity</p></div><OfferButton label="Check offer" className="h-11 shrink-0 bg-[#ef5e42] px-5 font-bold text-white hover:bg-[#d94f35]" /></div>
      </div>

      <ProductConversionPopup config={popupConfig} />
    </>
  );
}
