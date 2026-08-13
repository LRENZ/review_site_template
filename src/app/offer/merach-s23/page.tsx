import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  Dumbbell,
  HeartPulse,
  Home,
  MonitorSmartphone,
  MoveRight,
  ShieldCheck,
  Sparkles,
  Timer,
  Waves,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const offerHref = "https://hongkongmerachtechnologycolimited.pxf.io/WO4gLM";

export const metadata: Metadata = {
  title: "MERACH S23 Recumbent Bike Review: Low-Impact Home Workout Offer | BrandDragon",
  description:
    "A detailed MERACH S23 recumbent exercise bike offer page covering resistance bands, adjustable comfort, low-impact cardio, comparison points, and who should buy.",
  alternates: { canonical: "/offer/merach-s23" },
  openGraph: {
    title: "MERACH S23 Recumbent Bike: A More Comfortable Way to Move at Home",
    description:
      "See how the S23 combines seated cardio, resistance bands, adjustable comfort, and a compact home-workout setup.",
    images: ["/merach-s23-offer.png"],
  },
};

const featureCards = [
  {
    icon: HeartPulse,
    eyebrow: "Low impact",
    title: "Cardio without the hard landing",
    body: "The recumbent setup keeps your back supported while you build a repeatable daily movement habit.",
  },
  {
    icon: Dumbbell,
    eyebrow: "Full body",
    title: "Pedal plus upper-body work",
    body: "Integrated resistance bands give your arms something to do while your legs keep moving.",
  },
  {
    icon: Home,
    eyebrow: "Home-ready",
    title: "Built for the room you already have",
    body: "A seated bike is easier to approach for short sessions, home routines, and low-friction consistency.",
  },
];

const comparisonRows = [
  {
    label: "Workout feel",
    s23: "Seated, supported, low-impact cardio with optional arm work",
    upright: "More forward-leaning and leg-focused",
    treadmill: "Walking or running impact varies with speed and surface",
  },
  {
    label: "Upper-body option",
    s23: "Integrated resistance bands",
    upright: "Usually requires separate equipment",
    treadmill: "Usually requires separate equipment",
  },
  {
    label: "Best for",
    s23: "Daily movement, comfortable cardio, and gentle full-body routines",
    upright: "Cycling-focused users who prefer a traditional bike position",
    treadmill: "Users who specifically want walking or running practice",
  },
  {
    label: "Main trade-off",
    s23: "Less suited to standing sprints or race-style cycling",
    upright: "Can feel less supported for some users",
    treadmill: "Often louder, larger, and more demanding on joints",
  },
];

const steps = [
  {
    number: "01",
    title: "Start with ten minutes",
    body: "Use a short session to check seat position, pedal rhythm, and how your body feels after moving.",
  },
  {
    number: "02",
    title: "Add the bands when ready",
    body: "Keep the resistance simple at first, then add upper-body work once the cycling motion feels natural.",
  },
  {
    number: "03",
    title: "Make it a daily anchor",
    body: "Pair the bike with a show, podcast, morning routine, or post-work reset so consistency becomes easier.",
  },
];

const faqs = [
  {
    question: "Who is the MERACH S23 best for?",
    answer:
      "It is a strong fit for people who want a seated, low-impact home workout with the option to add simple upper-body resistance. It can also suit users who prefer a more supported position than a traditional upright bike.",
  },
  {
    question: "What makes it different from a regular exercise bike?",
    answer:
      "The S23 is a recumbent bike with a backrest and integrated resistance bands. The position is more supported, and the bands create an easy way to add arm work without buying another piece of equipment.",
  },
  {
    question: "Is this a replacement for a treadmill or gym?",
    answer:
      "Not for every goal. A treadmill is better for walking or running practice, and a gym offers more equipment. The S23 is strongest when the goal is a convenient, repeatable home routine.",
  },
  {
    question: "What should I check before ordering?",
    answer:
      "Check current price, availability, delivery details, dimensions, user-height guidance, return terms, warranty, and whether the supported position matches your mobility and workout needs.",
  },
];

function OfferCta({ className }: { className?: string }) {
  return (
    <Button size="lg" className={className} asChild>
      <a href={offerHref} rel="sponsored">
        Shop the S23 offer
        <ArrowRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

export default function MerachS23OfferPage() {
  return (
    <>
      <main className="bg-[#f7f4ef] text-[#182126]">
        <section className="relative overflow-hidden bg-[#122127] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(48,184,217,.24),transparent_28%),radial-gradient(circle_at_15%_78%,rgba(217,136,61,.18),transparent_30%)]" />
          <div className="container relative mx-auto max-w-6xl px-4 py-6 md:py-10">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 hover:text-white">
              <ChevronRight data-icon="inline-start" />
              BrandDragon Offer Guide
            </Link>

            <div className="grid items-center gap-10 py-10 md:grid-cols-[.9fr_1.1fr] md:py-16">
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-3">
                  <Badge className="border-cyan-200/25 bg-cyan-200/15 text-cyan-100 hover:bg-cyan-200/15">MERACH S23</Badge>
                  <Badge className="border-orange-200/25 bg-orange-200/15 text-orange-100 hover:bg-orange-200/15">Low-impact home fitness</Badge>
                </div>
                <h1 className="max-w-2xl text-5xl font-bold leading-[.95] tracking-tight md:text-7xl">
                  A more comfortable way to move at home.
                </h1>
                <p className="max-w-xl text-lg leading-8 text-white/72 md:text-xl">
                  The MERACH S23 combines a supported recumbent ride with resistance bands, giving you a practical way to build cardio and light upper-body work into your everyday routine.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <OfferCta className="h-14 rounded-full bg-cyan-300 px-7 text-base font-bold text-[#06212a] shadow-2xl shadow-cyan-300/20 hover:bg-cyan-200" />
                  <a href="#comparison" className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-sm font-bold text-white hover:bg-white/10">
                    See the comparison
                    <MoveRight />
                  </a>
                </div>
                <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-3">
                  {[
                    [HeartPulse, "Low-impact"],
                    [Dumbbell, "Resistance bands"],
                    [Home, "Home routine"],
                  ].map(([Icon, label]) => {
                    const FeatureIcon = Icon as typeof HeartPulse;
                    return <div key={label as string} className="flex items-center gap-2"><FeatureIcon className="text-cyan-300" /><span>{label as string}</span></div>;
                  })}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[36px] bg-cyan-300/15 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/8 p-3 shadow-2xl">
                  <Image src="/merach-s23-offer.png" alt="MERACH S23 recumbent bike with resistance bands offer" width={1200} height={900} priority className="w-full rounded-[20px] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#d9d1c6] bg-[#fffdf9]">
          <div className="container mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:grid-cols-3 md:py-7">
            {[
              [Timer, "Short sessions count", "Designed for a routine you can repeat."],
              [ShieldCheck, "Supported position", "Backrest and adjustable seating cues."],
              [MonitorSmartphone, "Track the basics", "LCD display and app-compatible positioning."],
            ].map(([Icon, title, body]) => {
              const FeatureIcon = Icon as typeof Timer;
              return <div key={title as string} className="flex gap-3 border-[#d9d1c6] sm:border-r sm:pr-5 last:border-0"><FeatureIcon className="mt-1 shrink-0 text-[#0e91af]" /><div><p className="font-bold">{title as string}</p><p className="mt-1 text-sm text-[#657078]">{body as string}</p></div></div>;
            })}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 max-w-3xl">
              <div className="mb-4 flex items-center gap-2 text-[#0e91af]"><Sparkles /><span className="text-sm font-bold uppercase tracking-[.18em]">Why this offer stands out</span></div>
              <h2 className="text-4xl font-bold leading-tight md:text-6xl">The appeal is consistency, not punishment.</h2>
              <p className="mt-5 text-lg leading-8 text-[#657078]">A home fitness product earns its space when it makes the next session feel easier to start. The S23 is built around that idea: seated comfort, adjustable effort, and one simple way to add arms.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {featureCards.map(({ icon: Icon, eyebrow, title, body }) => <Card key={title} className="border-[#ded7ce] bg-[#fffdf9] shadow-sm"><CardHeader><div className="mb-3 flex size-12 items-center justify-center rounded-2xl bg-[#dff6fa] text-[#0e91af]"><Icon /></div><div className="text-xs font-bold uppercase tracking-[.16em] text-[#0e91af]">{eyebrow}</div><CardTitle className="text-2xl">{title}</CardTitle></CardHeader><CardContent><p className="leading-7 text-[#657078]">{body}</p></CardContent></Card>)}
            </div>
          </div>
        </section>

        <section id="comparison" className="bg-[#172b31] py-16 text-white md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 max-w-3xl"><div className="mb-4 flex items-center gap-2 text-cyan-300"><Waves /><span className="text-sm font-bold uppercase tracking-[.18em]">Compare the use case</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Which workout setup fits your life?</h2><p className="mt-5 text-lg leading-8 text-white/65">The S23 is not trying to be every machine. It is strongest when comfort and repeatability matter more than maximum intensity.</p></div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="hidden grid-cols-[1.1fr_1.2fr_1.2fr_1.2fr] border-b border-white/10 bg-white/8 px-5 py-4 text-xs font-bold uppercase tracking-[.16em] text-white/55 md:grid"><div>Decision point</div><div className="text-cyan-200">MERACH S23</div><div>Upright bike</div><div>Treadmill</div></div>
              {comparisonRows.map((row) => <div key={row.label} className="grid gap-3 border-b border-white/10 px-5 py-5 last:border-0 md:grid-cols-[1.1fr_1.2fr_1.2fr_1.2fr] md:gap-5"><div className="font-bold text-white">{row.label}</div><div className="rounded-xl bg-cyan-300/10 p-3 leading-6 text-cyan-50"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-cyan-300 md:hidden">MERACH S23</span>{row.s23}</div><div className="p-3 leading-6 text-white/60"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/35 md:hidden">Upright bike</span>{row.upright}</div><div className="p-3 leading-6 text-white/60"><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/35 md:hidden">Treadmill</span>{row.treadmill}</div></div>)}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6 md:flex-row md:items-center"><div><p className="font-bold text-cyan-100">Best fit: comfortable daily movement at home</p><p className="mt-1 text-sm text-white/60">Check the current offer, delivery, dimensions, and return terms before ordering.</p></div><OfferCta className="h-12 shrink-0 rounded-full bg-cyan-300 px-6 font-bold text-[#06212a] hover:bg-cyan-200" /></div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div><div className="mb-4 flex items-center gap-2 text-[#0e91af]"><Dumbbell /><span className="text-sm font-bold uppercase tracking-[.18em]">A simple starting plan</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Make the first week easy to win.</h2><p className="mt-5 text-lg leading-8 text-[#657078]">The best equipment is the equipment you can use without negotiating with yourself every day.</p><OfferCta className="mt-7 h-13 rounded-full bg-[#0e91af] px-7 font-bold text-white hover:bg-[#087993]" /></div>
            <div className="grid gap-4">{steps.map((step) => <Card key={step.number} className="border-[#ded7ce] bg-[#fffdf9]"><CardContent className="grid gap-4 p-6 md:grid-cols-[72px_1fr] md:items-start"><div className="flex size-14 items-center justify-center rounded-xl bg-[#172b31] text-lg font-bold text-cyan-200">{step.number}</div><div><h3 className="text-xl font-bold">{step.title}</h3><p className="mt-2 leading-7 text-[#657078]">{step.body}</p></div></CardContent></Card>)}</div>
          </div>
        </section>

        <section className="bg-[#e7f5f6] py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4"><div className="grid gap-6 md:grid-cols-3"><div className="rounded-2xl bg-white p-7 shadow-sm"><BadgeCheck className="text-[#0e91af]" /><h3 className="mt-5 text-2xl font-bold">Choose it if...</h3><ul className="mt-5 space-y-4 text-[#52626a]"><li className="flex gap-3"><Check className="shrink-0 text-[#0e91af]" />You prefer supported, seated cardio.</li><li className="flex gap-3"><Check className="shrink-0 text-[#0e91af]" />You want one machine for legs and light arms.</li><li className="flex gap-3"><Check className="shrink-0 text-[#0e91af]" />You need a low-friction home routine.</li></ul></div><div className="rounded-2xl bg-white p-7 shadow-sm"><CircleHelp className="text-[#d47b34]" /><h3 className="mt-5 text-2xl font-bold">Check first...</h3><ul className="mt-5 space-y-4 text-[#52626a]"><li className="flex gap-3"><Check className="shrink-0 text-[#d47b34]" />Your available floor space.</li><li className="flex gap-3"><Check className="shrink-0 text-[#d47b34]" />Seat range and user-height fit.</li><li className="flex gap-3"><Check className="shrink-0 text-[#d47b34]" />Current stock, price, and warranty.</li></ul></div><div className="rounded-2xl bg-[#172b31] p-7 text-white shadow-sm"><Sparkles className="text-cyan-300" /><h3 className="mt-5 text-2xl font-bold">Skip it if...</h3><ul className="mt-5 space-y-4 text-white/70"><li className="flex gap-3"><X className="shrink-0 text-cyan-300" />You specifically need running training.</li><li className="flex gap-3"><X className="shrink-0 text-cyan-300" />You want standing sprint intervals.</li><li className="flex gap-3"><X className="shrink-0 text-cyan-300" />You already have a complete gym setup.</li></ul></div></div></div>
        </section>

        <section className="bg-[#fffdf9] py-16 md:py-24"><div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Questions before you click.</h2><p className="mt-5 text-lg leading-8 text-[#657078]">A few practical checks to make sure the S23 matches your home and your routine.</p></div><Accordion type="single" collapsible className="rounded-2xl border border-[#ded7ce] bg-[#f7f4ef] px-6">{faqs.map((item) => <AccordionItem key={item.question} value={item.question}><AccordionTrigger className="text-left text-lg font-bold">{item.question}</AccordionTrigger><AccordionContent className="text-base leading-7 text-[#657078]">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section className="bg-[#0e91af] py-16 text-white md:py-20"><div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[1fr_auto] md:items-center"><div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-cyan-100"><Sparkles /><span className="text-sm font-bold uppercase tracking-[.18em]">Final check</span></div><h2 className="text-4xl font-bold leading-tight md:text-6xl">If comfort is what gets you moving, start with the S23 offer.</h2><p className="mt-5 text-lg leading-8 text-white/75">Open the current offer to confirm price, availability, delivery, dimensions, and return details before making your decision.</p></div><div className="flex flex-col gap-3"><OfferCta className="h-14 rounded-full bg-white px-8 text-base font-bold text-[#075d70] hover:bg-cyan-50" /><p className="text-center text-xs text-white/65">Check the current offer</p></div></div></section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d9d1c6] bg-[#fffdf9]/95 p-3 shadow-2xl backdrop-blur md:hidden"><div className="mx-auto flex max-w-lg items-center gap-3"><div className="min-w-0 flex-1"><div className="truncate text-sm font-bold">MERACH S23 Recumbent Bike</div><div className="text-xs text-[#657078]">Low-impact cardio + resistance bands</div></div><OfferCta className="h-11 shrink-0 rounded-full bg-[#0e91af] px-4 text-sm font-bold text-white hover:bg-[#087993]" /></div></div>
    </>
  );
}
