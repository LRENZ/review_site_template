import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleHelp,
  ExternalLink,
  MoveRight,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProductConversionPopup, { type ProductConversionPopupConfig } from "@/components/ProductConversionPopup";
import { withBasePath } from "@/lib/site";

type Highlight = { label: string; value: string };
type Feature = { eyebrow: string; title: string; body: string };
type Category = { image: string; alt: string; eyebrow: string; title: string; body: string; bestFor: string };
type ComparisonRow = { label: string; brand: string; alternative: string; marketplace: string };
type Step = { number: string; title: string; body: string };
type Faq = { question: string; answer: string };

export type RetailOfferPageConfig = {
  brand: string;
  region?: string;
  category: string;
  badges: string[];
  headline: string;
  description: string;
  affiliateLink: string;
  ctaLabel: string;
  heroImage: string;
  heroAlt: string;
  accent: string;
  accentDark: string;
  accentSoft: string;
  heroBackground: string;
  heroForeground?: string;
  highlights: Highlight[];
  sectionEyebrow: string;
  sectionTitle: string;
  sectionBody: string;
  features: Feature[];
  categories: Category[];
  comparisonTitle: string;
  comparisonBody: string;
  comparisonColumns: [string, string, string];
  comparisonRows: ComparisonRow[];
  stepsTitle: string;
  stepsBody: string;
  steps: Step[];
  choose: string[];
  check: string[];
  skip: string[];
  faqs: Faq[];
  finalTitle: string;
  finalBody: string;
  popup: ProductConversionPopupConfig;
};

function OfferCta({ config, label, className }: { config: RetailOfferPageConfig; label?: string; className?: string }) {
  return (
    <Button size="lg" className={className} style={{ backgroundColor: config.accent }} asChild>
      <a href={config.affiliateLink} rel="sponsored">
        {label ?? config.ctaLabel}
        <ArrowRight data-icon="inline-end" />
      </a>
    </Button>
  );
}

export default function RetailOfferPage({ config }: { config: RetailOfferPageConfig }) {
  const heroText = config.heroForeground ?? "#ffffff";

  return (
    <>
      <main className="bg-[#f7f6f2] text-[#171a1d]">
        <section className="overflow-hidden" style={{ backgroundColor: config.heroBackground, color: heroText }}>
          <div className="container mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold opacity-65 transition-opacity hover:opacity-100">
              <ChevronRight className="size-4" /> BrandDragon Offer Guide
            </Link>
            <div className="grid gap-8 py-8 lg:min-h-[650px] lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-12 lg:py-10">
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-wrap gap-2">
                  {config.badges.map((badge) => <Badge key={badge} className="border-white/20 bg-white/10 text-current hover:bg-white/10">{badge}</Badge>)}
                </div>
                <h1 className="max-w-2xl text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-[64px]">{config.headline}</h1>
                <p className="max-w-xl text-base leading-7 opacity-75 sm:text-lg sm:leading-8">{config.description}</p>
                <div className="hidden flex-col gap-3 sm:flex sm:flex-row">
                  <OfferCta config={config} className="h-14 rounded-md px-7 text-base font-bold text-white shadow-xl" />
                  <a href="#comparison" className="inline-flex h-14 items-center justify-center gap-2 rounded-md border border-current/20 px-7 text-sm font-bold hover:bg-white/10">
                    Compare the options <MoveRight className="size-5" />
                  </a>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] opacity-55">Independent shopping guide · Opens the official {config.brand} store</p>
              </div>
              <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-lg border border-white/15 bg-white shadow-2xl">
                <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                  <Image src={withBasePath(config.heroImage)} alt={config.heroAlt} fill priority sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                </div>
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-md bg-white/95 px-4 py-3 text-[#171a1d] shadow-lg backdrop-blur">
                  <div className="min-w-0"><p className="truncate text-sm font-bold">{config.brand}{config.region ? ` · ${config.region}` : ""}</p><p className="truncate text-xs text-[#667078]">Check current selection, fit, delivery, and returns.</p></div>
                  <ExternalLink className="size-5 shrink-0" style={{ color: config.accentDark }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#ddd8cf] bg-white">
          <div className="container mx-auto grid max-w-6xl gap-5 px-5 py-6 sm:grid-cols-3">
            {config.highlights.map((item) => <div key={item.label} className="border-[#ddd8cf] sm:border-r sm:pr-5 last:border-0"><p className="text-xl font-bold" style={{ color: config.accentDark }}>{item.value}</p><p className="mt-1 text-sm text-[#687078]">{item.label}</p></div>)}
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-5">
            <div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em]" style={{ color: config.accentDark }}><Sparkles className="size-5" />{config.sectionEyebrow}</div><h2 className="text-4xl font-bold leading-tight md:text-6xl">{config.sectionTitle}</h2><p className="mt-5 text-lg leading-8 text-[#687078]">{config.sectionBody}</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {config.features.map((item, index) => <article key={item.title} className="rounded-lg border border-[#ddd8cf] bg-white p-7 shadow-sm"><div className="mb-5 flex size-11 items-center justify-center rounded-md text-sm font-bold text-white" style={{ backgroundColor: index === 1 ? config.accentDark : config.accent }}>{String(index + 1).padStart(2, "0")}</div><p className="text-xs font-bold uppercase tracking-[.16em]" style={{ color: config.accentDark }}>{item.eyebrow}</p><h3 className="mt-2 text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-[#687078]">{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddd8cf] bg-white py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-5">
            <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[.16em]" style={{ color: config.accentDark }}>{config.category}</p><h2 className="mt-3 text-4xl font-bold md:text-5xl">Start with the job, then choose the product.</h2></div><OfferCta config={config} className="hidden h-12 rounded-md px-6 font-bold text-white md:inline-flex" /></div>
            <div className="grid gap-6 md:grid-cols-2">
              {config.categories.map((item) => <article key={item.title} className="overflow-hidden rounded-lg border border-[#ddd8cf] bg-[#f7f6f2]"><div className="relative aspect-[16/9] bg-[#eceae5]"><Image src={withBasePath(item.image)} alt={item.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div><div className="p-6"><p className="text-xs font-bold uppercase tracking-[.16em]" style={{ color: config.accentDark }}>{item.eyebrow}</p><h3 className="mt-2 text-2xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-[#687078]">{item.body}</p><p className="mt-4 border-t border-[#ddd8cf] pt-4 text-sm"><span className="font-bold">Best for:</span> {item.bestFor}</p></div></article>)}
            </div>
          </div>
        </section>

        <section id="comparison" className="py-16 text-white md:py-24" style={{ backgroundColor: config.accentDark }}>
          <div className="container mx-auto max-w-6xl px-5">
            <div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] opacity-70"><BadgeCheck className="size-5" />Practical comparison</div><h2 className="text-4xl font-bold leading-tight md:text-6xl">{config.comparisonTitle}</h2><p className="mt-5 text-lg leading-8 text-white/65">{config.comparisonBody}</p></div>
            <div className="mt-10 overflow-hidden rounded-lg border border-white/15 bg-white/5">
              <div className="hidden grid-cols-[1.05fr_repeat(3,1fr)] border-b border-white/15 bg-white/8 px-5 py-4 text-xs font-bold uppercase tracking-[.12em] text-white/55 md:grid"><div>Decision point</div>{config.comparisonColumns.map((column, index) => <div key={column} className={index === 0 ? "text-white" : ""}>{column}</div>)}</div>
              {config.comparisonRows.map((row) => <div key={row.label} className="grid gap-2 border-b border-white/12 px-5 py-5 last:border-0 md:grid-cols-[1.05fr_repeat(3,1fr)] md:gap-4"><div className="font-bold">{row.label}</div>{[[config.comparisonColumns[0], row.brand], [config.comparisonColumns[1], row.alternative], [config.comparisonColumns[2], row.marketplace]].map(([name, value], index) => <div key={name} className={`rounded-md p-3 text-sm leading-6 ${index === 0 ? "bg-white/12 text-white" : "text-white/62"}`}><span className="mb-1 block text-xs font-bold uppercase tracking-wider text-white/45 md:hidden">{name}</span>{value}</div>)}</div>)}
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border border-white/20 bg-white/8 p-6 md:flex-row md:items-center"><div><p className="font-bold">Best next step: verify the exact option on the official store.</p><p className="mt-1 text-sm text-white/60">Inventory, terms, and delivery can change by product and location.</p></div><OfferCta config={config} className="h-12 shrink-0 rounded-md px-6 font-bold text-white" /></div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr]">
            <div><p className="text-sm font-bold uppercase tracking-[.16em]" style={{ color: config.accentDark }}>Buying workflow</p><h2 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{config.stepsTitle}</h2><p className="mt-5 text-lg leading-8 text-[#687078]">{config.stepsBody}</p></div>
            <div className="grid gap-4">{config.steps.map((step) => <article key={step.number} className="grid gap-4 rounded-lg border border-[#ddd8cf] bg-white p-6 md:grid-cols-[64px_1fr]"><div className="flex size-12 items-center justify-center rounded-md text-sm font-bold text-white" style={{ backgroundColor: config.accent }}>{step.number}</div><div><h3 className="text-xl font-bold">{step.title}</h3><p className="mt-2 leading-7 text-[#687078]">{step.body}</p></div></article>)}</div>
          </div>
        </section>

        <section className="py-16 md:py-24" style={{ backgroundColor: config.accentSoft }}>
          <div className="container mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
            {[[BadgeCheck, "Choose it if...", config.choose], [CircleHelp, "Check first...", config.check], [ShieldCheck, "Skip it if...", config.skip]].map(([Icon, title, items], column) => { const ItemIcon = Icon as typeof BadgeCheck; return <article key={title as string} className={`rounded-lg p-7 shadow-sm ${column === 2 ? "text-white" : "bg-white"}`} style={column === 2 ? { backgroundColor: config.accentDark } : undefined}><ItemIcon style={{ color: column === 2 ? "white" : config.accentDark }} /><h3 className="mt-5 text-2xl font-bold">{title as string}</h3><ul className={`mt-5 space-y-4 ${column === 2 ? "text-white/70" : "text-[#596269]"}`}>{(items as string[]).map((item) => <li key={item} className="flex gap-3">{column === 2 ? <X className="shrink-0" /> : <Check className="shrink-0" style={{ color: config.accentDark }} />}{item}</li>)}</ul></article>; })}
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="text-4xl font-bold leading-tight md:text-6xl">Questions before you click.</h2><p className="mt-5 text-lg leading-8 text-[#687078]">Use these checks to narrow the choice, then confirm current details at {config.brand}.</p></div><Accordion type="single" collapsible className="rounded-lg border border-[#ddd8cf] bg-[#f7f6f2] px-6">{config.faqs.map((item) => <AccordionItem key={item.question} value={item.question}><AccordionTrigger className="text-left text-lg font-bold">{item.question}</AccordionTrigger><AccordionContent className="text-base leading-7 text-[#687078]">{item.answer}</AccordionContent></AccordionItem>)}</Accordion></div>
        </section>

        <section className="py-16 text-white md:py-20" style={{ backgroundColor: config.accent }}>
          <div className="container mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center"><div className="max-w-3xl"><div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-white/75"><Sparkles className="size-5" />Final check</div><h2 className="text-4xl font-bold leading-tight md:text-6xl">{config.finalTitle}</h2><p className="mt-5 text-lg leading-8 text-white/80">{config.finalBody}</p></div><Button size="lg" className="h-14 rounded-md bg-white px-8 text-base font-bold hover:bg-white/90" style={{ color: config.accentDark }} asChild><a href={config.affiliateLink} rel="sponsored">{config.ctaLabel}<ArrowRight data-icon="inline-end" /></a></Button></div>
        </section>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#ddd8cf] bg-white/96 p-3 shadow-2xl backdrop-blur md:hidden"><div className="mx-auto flex max-w-lg items-center gap-3"><div className="min-w-0 flex-1"><div className="truncate text-sm font-bold">{config.brand}{config.region ? ` · ${config.region}` : ""}</div><div className="truncate text-xs text-[#687078]">See current selection and terms</div></div><OfferCta config={config} label="Visit store" className="h-11 shrink-0 rounded-md px-4 text-sm font-bold text-white" /></div></div>
      <ProductConversionPopup config={config.popup} />
    </>
  );
}
