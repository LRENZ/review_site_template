import { ArrowRight, CalendarCheck, Scissors, ShieldCheck, ClipboardCheck, ExternalLink, Check } from "lucide-react";
import { davidsBridalOffer } from "@/data/davidsBridalOffer";

const services = [
  { icon: CalendarCheck, title: "Free bridal appointments", text: "Explore silhouettes with a stylist and try dresses in person. Check local slots and the samples available at your chosen store.", source: "https://www.davidsbridal.com/about-appointments", label: "Appointment details" },
  { icon: Scissors, title: "In-store alterations", text: "Discuss hems, bodice adjustments, support, and finishing details with the store team. Ask for a quote and a fitting schedule.", source: "https://www.davidsbridal.com/inspiration/alterations/", label: "Alteration services" },
  { icon: ShieldCheck, title: "David's Fit Guarantee", text: "The policy describes alteration or exchange options after assessment. Eligibility, timing, and standard fees apply; alterations are not automatically free.", source: "https://www.davidsbridal.com/legal/fit-guarantee-policy", label: "Read the full policy" },
  { icon: ClipboardCheck, title: "Published return terms", text: "Check the exact item's eligibility before ordering. Purchase value, condition, final-sale status, and return fees can affect your options.", source: "https://www.davidsbridal.com/returns-exchanges-policy", label: "Returns and exchanges" },
];
const silhouettes = [
  ["A-line", "A fitted bodice with a skirt that widens gradually.", "Compare waist placement, skirt movement, and fabric weight."],
  ["Ball gown", "A fitted bodice with a fuller, more voluminous skirt.", "Try sitting and walking; check train weight and bustle options."],
  ["Sheath", "A closer, straighter line through the body.", "Check ease through the hips and how the lining moves."],
  ["Mermaid / fit-and-flare", "A fitted shape that opens into a wider skirt.", "Compare where the flare starts and how freely you can step."],
];

export default function DavidsBridalConfidence() {
  return (
    <>
      <section className="border-b border-[#d6ded9] bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a13752]">Brand services, with the details attached</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4"><h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">More confidence before you choose.</h2><p className="text-xs text-[#687078]">Official sources checked November 12, 2026</p></div>
          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({icon: Icon, ...service}) => <article key={service.title} className="border-t-2 border-[#a13752] pt-5"><Icon className="size-7 text-[#243e3c]" aria-hidden="true" /><h3 className="mt-4 text-lg font-bold">{service.title}</h3><p className="mt-3 text-sm leading-6 text-[#596269]">{service.text}</p><a href={service.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8c2a43] underline underline-offset-4">{service.label}<ExternalLink className="size-3.5" /></a></article>)}
          </div>
          <p className="mt-7 text-xs leading-5 text-[#687078]">BrandDragon is an independent shopping guide. Service icons summarise the linked brand information; purchases and appointment bookings take place with David's Bridal.</p>
        </div>
      </section>

      <section className="bg-[#eef3f0] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-widest text-[#a13752]">Your first fitting</p><h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Find the shape you love wearing.</h2><p className="mt-4 leading-7 text-[#596269]">A photo helps you save a favourite. A fitting tells you how the neckline feels, whether the bodice supports you, and how easily you can move. Compare different shapes before committing to one.</p><a href={davidsBridalOffer.affiliateLink} rel="sponsored" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#a13752] px-5 py-3 font-bold text-white">Browse dresses to shortlist<ArrowRight className="size-4 shrink-0" /></a></div>
          <div className="divide-y divide-[#cad6cf] border-y border-[#cad6cf]">{silhouettes.map(([name, shape, fitting]) => <div key={name} className="grid gap-2 py-5 sm:grid-cols-[140px_1fr]"><h3 className="font-bold text-[#243e3c]">{name}</h3><div><p className="text-sm leading-6">{shape}</p><p className="mt-1 text-sm leading-6 text-[#596269]">{fitting}</p></div></div>)}</div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 md:grid-cols-2">
            <div><p className="text-xs font-bold uppercase tracking-widest text-[#a13752]">Bring these to the conversation</p><h2 className="mt-3 text-3xl font-bold">A useful shortlist beats an endless saved folder.</h2><p className="mt-4 leading-7 text-[#596269]">Save three to five styles with something specific you like: a neckline, sleeve, fabric, or skirt. A stylist can use those details to suggest alternatives when a sample is unavailable.</p></div>
            <ul className="grid gap-4">{["Wedding date, venue, and dress code", "A complete-look budget including alterations", "Bust, waist, and hip measurements", "Preferred shoes and undergarments for fittings", "Questions about arrival dates, fit work, and returns"].map(item => <li key={item} className="flex gap-3 border-b border-[#e0e5e1] pb-3 text-sm leading-6"><Check className="mt-0.5 size-5 shrink-0 text-[#a13752]" />{item}</li>)}</ul>
          </div>
          <div className="mt-10 border-l-4 border-[#a13752] bg-[#f7f6f2] px-6 py-5"><h3 className="font-bold">What this guide is based on</h3><p className="mt-2 text-sm leading-6 text-[#596269]">Official product imagery and catalogue information, the appointment guide, alteration services, Fit Guarantee terms, and return policy. We have not personally worn or fitted these gowns. Style observations and planning suggestions are editorial guidance.</p></div>
        </div>
      </section>
    </>
  );
}
