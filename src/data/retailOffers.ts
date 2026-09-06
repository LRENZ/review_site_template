import type { RetailOfferPageConfig } from "@/components/RetailOfferPage";

const sauconyCaLink = "https://c.ga-net.com/click?w=1004409&c=5184&t=&d=https%3A%2F%2Fwww.saucony.com%2FCA%2Fen_CA%2Fhome";
const sauconyUsLink = "https://c.ga-net.com/click?w=1004409&c=6358&t=&d=https%3A%2F%2Fwww.saucony.com%2Fen%2Fhome";
const kohlsLink = "https://c.ga-net.com/click?w=1004409&c=2846&t=&d=https%3A%2F%2Fwww.kohls.com";
const zenniLink = "https://zenni.pxf.io/4axXdn";

const sauconyShared = {
  brand: "Saucony",
  category: "Running shoe rotation guide",
  badges: ["Saucony", "Running · Trail · Walking"],
  heroImage: "/saucony-running-hero.webp",
  heroAlt: "Runner wearing Saucony shoes during a city training run",
  accent: "#f04b35",
  accentDark: "#132b3a",
  accentSoft: "#e6f2f3",
  heroBackground: "#102934",
  highlights: [
    { value: "Daily", label: "Road trainers for regular mileage" },
    { value: "Fast", label: "Endorphin options for speed and race day" },
    { value: "Trail", label: "Grippier shoes for uneven terrain" },
  ],
  sectionEyebrow: "The useful way to shop",
  sectionTitle: "Build around the run you actually do.",
  sectionBody: "Saucony spans easy-day trainers, cushioned and guided options, speed-focused shoes, walking styles, and trail footwear. The fastest route to a good shortlist is to start with terrain, support, and pace before colour.",
  features: [
    { eyebrow: "Everyday miles", title: "Start with a versatile trainer", body: "A daily shoe is the practical anchor for easy runs, steady mileage, and the sessions that make up most of a training week." },
    { eyebrow: "Ride preference", title: "Separate cushion from support", body: "Softness and guidance solve different needs. Compare underfoot feel, platform geometry, width, and your usual gait before choosing." },
    { eyebrow: "Purpose-built speed", title: "Add a faster shoe only when useful", body: "The Endorphin line covers fast training through race-day use. Match the plate, foam, and durability trade-offs to a real goal." },
  ],
  categories: [
    { image: "/saucony-road-running.webp", alt: "Saucony road running shoes in motion", eyebrow: "Road rotation", title: "Daily comfort or faster turnover", body: "Compare neutral daily trainers such as Ride and Triumph with guided or max-cushion options, then look at Endorphin models for speed sessions and racing.", bestFor: "pavement, regular training, long runs, and race goals" },
    { image: "/saucony-trail-running.webp", alt: "Saucony trail shoes on rugged terrain", eyebrow: "Beyond the road", title: "Trail grip, walking, and lifestyle", body: "Trail shoes prioritise traction and protection, while walking and lifestyle lines serve a different rhythm. Do not choose one category only because it looks similar to another.", bestFor: "uneven terrain, everyday walking, or casual wear" },
  ],
  comparisonTitle: "Choose a shoe family before a colourway.",
  comparisonBody: "A Saucony purchase makes more sense when the shoe has a defined role. This comparison keeps performance, fit, and seller confidence in the same decision.",
  comparisonColumns: ["Saucony official store", "Specialty running shop", "General marketplace"] as [string, string, string],
  comparisonRows: [
    { label: "Best strength", brand: "Broad current Saucony selection and direct product details", alternative: "In-person fitting and multi-brand advice", marketplace: "Convenient cross-brand browsing" },
    { label: "Fit confidence", brand: "Use size, width, and product guidance; verify return terms", alternative: "Often strongest when a fitting is available", marketplace: "Varies significantly by seller and listing" },
    { label: "Model choice", brand: "Daily, cushion, support, speed, trail, and walking ranges", alternative: "Curated performance assortment", marketplace: "Wide, but model age and seller quality can vary" },
    { label: "Check before buying", brand: "Current stock, width, delivery, and final-sale terms", alternative: "Store inventory and return policy", marketplace: "Seller, authenticity, version, and returns" },
  ],
  stepsTitle: "Turn your weekly miles into a shortlist.",
  stepsBody: "A three-minute check of use, feel, and fit will usually remove most of the wrong options before you reach checkout.",
  steps: [
    { number: "01", title: "Name the primary use", body: "Choose daily road running, speed training, race day, trail, walking, or casual wear. One clear job is better than five vague ones." },
    { number: "02", title: "Choose feel and support", body: "Decide whether you want balanced, plush, springy, guided, or trail-protective. If you are unsure about support needs, use a professional fitting." },
    { number: "03", title: "Confirm size, width, and terms", body: "Check the exact model page, width availability, regional shipping, return eligibility, and whether the item is marked final sale." },
  ],
  choose: ["You know the main run or activity the shoe must handle.", "You want to compare Saucony models in one official catalogue.", "You are prepared to verify size and width before ordering."],
  check: ["Whether you prefer neutral or guided support.", "The outsole and terrain match your usual route.", "Current regional stock, delivery, and return terms."],
  skip: ["You need a hands-on gait assessment before choosing.", "You are selecting only by colour or discount.", "The required size or width is unavailable."],
  faqs: [
    { question: "Which Saucony shoe is best for daily running?", answer: "Start with the current daily-trainer range and compare Ride, Triumph, Guide, and Hurricane by cushioning and support. The right choice depends on your gait, preferred feel, weekly distance, and fit." },
    { question: "When does an Endorphin model make sense?", answer: "Endorphin models are aimed at faster training and racing at different levels. Compare the current model's plate, foam, stability, durability, and intended pace rather than assuming the most aggressive shoe is automatically best." },
    { question: "Can I use trail shoes on the road?", answer: "Occasional road sections may be fine, but trail outsoles and protection are designed for uneven terrain. A road shoe is generally the more natural choice when nearly all mileage is on pavement." },
    { question: "What should I confirm before ordering online?", answer: "Confirm size, width, intended use, current product specifications, delivery estimate, return eligibility, and final-sale status. Product availability and terms can differ by region." },
  ],
  finalTitle: "Match the shoe to the miles, then check the current selection.",
  finalBody: "Open the official Saucony storefront to compare current models, colours, sizes, widths, delivery, and return terms for your region.",
};

export const sauconyCanadaOffer: RetailOfferPageConfig = {
  ...sauconyShared,
  region: "Canada",
  headline: "Find the Saucony that fits your Canadian miles.",
  description: "A practical guide to Saucony road, trail, walking, and speed shoes, with the final step routed to the Canadian storefront for local inventory and terms.",
  affiliateLink: sauconyCaLink,
  ctaLabel: "Visit Saucony Canada",
  popup: { productId: "saucony-canada", productName: "Saucony Canada", rating: "Road, trail, and walking guide", headline: "Before you go: choose the shoe by purpose, not colour.", description: "Start with terrain and support, then compare the current Canadian selection, sizes, delivery, and returns.", bullets: ["Daily trainers for regular road mileage", "Endorphin options for speed sessions and racing", "Trail, walking, width, and lifestyle choices"], ctaLabel: "See Saucony Canada", ctaHref: sauconyCaLink, storageKey: "product-popup:saucony-canada", banner: { eyebrow: "Saucony Canada", headline: "Find the right shoe family for your next run", description: "Check local sizes, widths, stock, delivery, and returns." } },
};

export const sauconyUsOffer: RetailOfferPageConfig = {
  ...sauconyShared,
  region: "United States",
  headline: "Build a Saucony rotation around the way you run.",
  description: "Compare daily trainers, cushioned and guided shoes, Endorphin speed options, trail footwear, and walking styles before opening the US storefront.",
  affiliateLink: sauconyUsLink,
  ctaLabel: "Visit Saucony US",
  popup: { productId: "saucony-us", productName: "Saucony US", rating: "Runner-first buying guide", headline: "One last check: what job should your next shoe do?", description: "Use pace, terrain, cushion, and support to narrow the range before you compare current US stock.", bullets: ["Versatile daily and max-cushion options", "Speed and race-day Endorphin models", "Trail, walking, lifestyle, and width choices"], ctaLabel: "See Saucony US", ctaHref: sauconyUsLink, storageKey: "product-popup:saucony-us", banner: { eyebrow: "Saucony US", headline: "Daily miles, speed work, or trail: start with the job", description: "Compare current models, sizes, widths, delivery, and returns." } },
};

export const kohlsOffer: RetailOfferPageConfig = {
  brand: "Kohl's", region: "United States", category: "Department store shopping guide", badges: ["Kohl's", "Style · Home · Family"],
  headline: "One cart for the people, rooms, and routines at home.",
  description: "Kohl's brings clothing, shoes, home, kitchen, bedding, toys, and beauty into one broad catalogue. This guide helps you plan the cart before the promotions start competing for attention.",
  affiliateLink: kohlsLink, ctaLabel: "Shop Kohl's", heroImage: "/kohls-shopping-hero.png", heroAlt: "Family comparing shoes, clothing, and home goods in a department store",
  accent: "#c81d3c", accentDark: "#262d47", accentSoft: "#f4e9dd", heroBackground: "#8d172d",
  highlights: [{ value: "Style", label: "Clothing, shoes, and accessories" }, { value: "Home", label: "Bedding, bath, decor, and kitchen" }, { value: "Family", label: "Women, men, kids, toys, and gifts" }],
  sectionEyebrow: "The smart cart strategy", sectionTitle: "Shop by mission, not by homepage noise.", sectionBody: "A large department-store catalogue is useful when you have a list. Group purchases by wardrobe, home refresh, or gifting, then evaluate each item on fit, dimensions, brand exclusions, delivery, and return terms.",
  features: [{ eyebrow: "Consolidate", title: "Solve several errands at once", body: "The strongest use case is a mixed basket: school basics, shoes, bath linens, kitchen replacements, or gifts in one shopping session." }, { eyebrow: "Compare", title: "Read the item-level details", body: "Materials, sizing, dimensions, fulfilment, coupons, and return eligibility can differ across brands and categories, even inside the same cart." }, { eyebrow: "Prioritise", title: "Let the list lead the deal", body: "A promotion is only useful when it applies to something already needed. Check exclusions and final checkout totals before adding extras." }],
  categories: [{ image: "/kohls-shopping-hero.png", alt: "Family looking at footwear and clothing in a department store", eyebrow: "Wear", title: "Clothing, shoes, and active basics", body: "Start with the wearer, size, use, and brand. Compare garment measurements, materials, reviews, and return eligibility instead of relying only on a familiar size label.", bestFor: "family wardrobes, seasonal basics, shoes, and gifts" }, { image: "/kohls-shopping-hero.png", alt: "Home textiles and kitchen items displayed in a department store", eyebrow: "Live", title: "Home, bedding, bath, and kitchen", body: "For home goods, dimensions and care instructions matter more than the thumbnail. Measure the space and compare what is included before checkout.", bestFor: "practical home refreshes and multi-category baskets" }],
  comparisonTitle: "When does a department store make more sense?", comparisonBody: "Kohl's is strongest for a planned, mixed-category basket. Brand-direct and marketplace shopping can be better when specialisation or seller breadth matters more.", comparisonColumns: ["Kohl's", "Brand-direct store", "General marketplace"],
  comparisonRows: [{ label: "Best strength", brand: "Multi-category family and home shopping", alternative: "Deepest focus on one brand's range", marketplace: "Large seller and product breadth" }, { label: "Promotions", brand: "Layered offers may vary by item and exclusions", alternative: "Brand-specific offers and launches", marketplace: "Seller-specific pricing and events" }, { label: "Decision quality", brand: "Strong when the list spans departments", alternative: "Strong for model-level expertise", marketplace: "Requires more seller and listing checks" }, { label: "Check before buying", brand: "Coupon eligibility, fulfilment, dimensions, and returns", alternative: "Fit, stock, and direct warranty", marketplace: "Seller, authenticity, condition, and returns" }],
  stepsTitle: "Make a list that survives the sale page.", stepsBody: "A disciplined basket is easier to compare, easier to return, and less likely to grow just because a countdown appears.",
  steps: [{ number: "01", title: "Group the mission", body: "Separate wardrobe basics, footwear, home replacements, and gifts. Set a rough budget for each group before browsing." }, { number: "02", title: "Check the product, not just the promotion", body: "Confirm materials, dimensions, size, colour, what is included, fulfilment method, and item-level coupon exclusions." }, { number: "03", title: "Review the final cart", body: "At checkout, verify discounts, shipping or pickup, delivery dates, return eligibility, and the final total before placing the order." }],
  choose: ["Your list spans clothing, shoes, home, or gifts.", "You want one cart and flexible fulfilment options.", "You will compare item-level details and exclusions."], check: ["Measurements, materials, and size charts.", "Coupon and brand exclusions at checkout.", "Pickup, shipping, delivery, and return terms."], skip: ["You are buying only because a timer is running.", "A specialist fitting or expert consultation is essential.", "The seller, condition, or return status is unclear."],
  faqs: [{ question: "What is Kohl's best for?", answer: "Kohl's is most useful for a planned basket spanning apparel, footwear, kids, home, kitchen, bedding, toys, beauty, or gifts. The broad catalogue can reduce separate shopping trips." }, { question: "Do all coupons apply to every product?", answer: "No. Eligibility and brand exclusions can vary. Read the current promotion details and confirm the discount in the cart before deciding." }, { question: "What should I check for clothing and shoes?", answer: "Use the item-specific size chart, materials, reviews, width or fit notes, fulfilment method, and return eligibility. Do not assume identical sizing across brands." }, { question: "What should I check for home goods?", answer: "Measure the space and confirm dimensions, material, care instructions, quantity, included pieces, delivery timing, and return terms." }],
  finalTitle: "Take the list to Kohl's, then let the final cart prove the value.", finalBody: "Browse the current Kohl's selection and verify product details, offer eligibility, fulfilment, delivery, and returns before checkout.",
  popup: { productId: "kohls", productName: "Kohl's", rating: "Best for a planned multi-category cart", headline: "Before you go: turn the sale into a useful basket.", description: "Start with the people and rooms on your list, then confirm item details and checkout eligibility.", bullets: ["Clothing, shoes, kids, home, kitchen, and gifts", "One cart across several everyday categories", "Verify exclusions, fulfilment, and returns before paying"], ctaLabel: "Shop Kohl's", ctaHref: kohlsLink, storageKey: "product-popup:kohls", banner: { eyebrow: "Kohl's shopping guide", headline: "Build the list first, then compare the current cart", description: "Check product details, promotions, pickup or delivery, and returns." } },
};

export const zenniOffer: RetailOfferPageConfig = {
  brand: "Zenni Optical", category: "Online eyewear buying guide", badges: ["Zenni Optical", "Frames · Lenses · Sunglasses"],
  headline: "A better pair starts with fit, prescription, and real life.",
  description: "Zenni combines a large online frame catalogue with lens choices and virtual try-on tools. Use this guide to narrow style and fit before entering prescription details.",
  affiliateLink: zenniLink, ctaLabel: "Browse Zenni", heroImage: "/zenni-eyewear-hero.png", heroAlt: "Person comparing modern eyeglass frames at home",
  accent: "#ef5d50", accentDark: "#075e66", accentSoft: "#dff3ef", heroBackground: "#dff4f2", heroForeground: "#073f45",
  highlights: [{ value: "Fit", label: "Frame width, bridge, and temple length" }, { value: "Vision", label: "Prescription and lens configuration" }, { value: "Style", label: "Shape, colour, material, and use" }],
  sectionEyebrow: "The three-part decision", sectionTitle: "A frame can look right and still be the wrong pair.", sectionBody: "Online eyewear works best when you treat frame fit, prescription accuracy, and lens use as separate checks. Virtual try-on helps with appearance, but measurements and a valid prescription still carry the decision.",
  features: [{ eyebrow: "Measure", title: "Use a pair that already fits", body: "Compare frame width, bridge, lens width, lens height, and temple length with glasses you wear comfortably now." }, { eyebrow: "Configure", title: "Enter the prescription carefully", body: "Match sphere, cylinder, axis, add, prism, and pupillary distance exactly where applicable. Ask an eye-care professional when anything is unclear." }, { eyebrow: "Live in them", title: "Choose lenses for the real routine", body: "Single-vision, progressive, sunglasses, coatings, and lens materials solve different needs. Prioritise the environments where the pair will be worn." }],
  categories: [{ image: "/zenni-eyewear-hero.png", alt: "Modern translucent eyeglasses being tried on at home", eyebrow: "Everyday optical", title: "Prescription frames for work and daily wear", body: "Filter by measurements and material before shape or colour. Then confirm the frame supports the prescription and lens options you need.", bestFor: "daily prescription wear, backup pairs, and style variety" }, { image: "/zenni-eyewear-hero.png", alt: "Several eyeglass frame shapes arranged beside a mirror", eyebrow: "Purpose-specific", title: "Sunglasses, progressives, and task pairs", body: "A dedicated sun, reading, computer, sport, or progressive pair may deserve different frame coverage, weight, lens design, and durability.", bestFor: "specific light, distance, activity, or style needs" }],
  comparisonTitle: "Online value is only useful when the order is accurate.", comparisonBody: "Zenni offers breadth and self-service tools. A local optical practice remains valuable for exams, complex needs, measurements, fitting, and adjustments.", comparisonColumns: ["Zenni online", "Local optical practice", "General marketplace"],
  comparisonRows: [{ label: "Best strength", brand: "Large frame selection and online configuration", alternative: "In-person exam, fitting, and adjustments", marketplace: "Broad non-prescription fashion selection" }, { label: "Try-on", brand: "Virtual preview plus published measurements", alternative: "Physical try-on and professional fitting", marketplace: "Varies; often limited measurement support" }, { label: "Prescription path", brand: "Customer enters a valid prescription and lens choices", alternative: "Professional support through the process", marketplace: "Suitability and support vary by seller" }, { label: "Check before buying", brand: "Measurements, PD, prescription fields, lenses, and returns", alternative: "Fees, frame selection, lens options, and follow-up", marketplace: "Seller, lens claims, measurements, and returns" }],
  stepsTitle: "Make the order boringly accurate.", stepsBody: "The exciting part is choosing the frame. The important part is checking every number and option before checkout.",
  steps: [{ number: "01", title: "Start with current measurements", body: "Use a comfortable existing frame or professional measurement as the baseline. Compare width, bridge, lens height, and temple length." }, { number: "02", title: "Confirm the prescription and PD", body: "Use a current prescription and enter each value exactly. Contact your optometrist or qualified provider if any field or measurement is uncertain." }, { number: "03", title: "Review the complete configuration", body: "Check frame colour, size, lens type, material, coatings, tint, prescription values, delivery estimate, and return policy before submitting." }],
  choose: ["You have a valid prescription and reliable measurements.", "You want a wide range of frame styles and lens choices.", "You are comfortable configuring eyewear online."], check: ["Every prescription field and pupillary distance.", "Frame dimensions against a pair that fits.", "Lens compatibility, delivery, and return terms."], skip: ["You need an eye exam or urgent clinical advice.", "Your prescription or PD is uncertain.", "You need hands-on fitting for a complex requirement."],
  faqs: [{ question: "What do I need before ordering prescription glasses online?", answer: "Use a valid, current prescription and an accurate pupillary distance, plus frame measurements that fit your face. Ask an eye-care professional if any value or lens recommendation is unclear." }, { question: "Is virtual try-on enough to confirm fit?", answer: "It is useful for previewing shape and style, but it does not replace frame measurements. Compare the listed dimensions with a comfortable pair you already own." }, { question: "How should I choose lens options?", answer: "Start with the prescription and primary use, then compare lens material, thickness, coatings, tint, and progressive or single-vision design. Suitability depends on your prescription and lifestyle." }, { question: "When should I use a local optical professional?", answer: "Use professional care for eye exams, symptoms, uncertain prescriptions, complex lens needs, precise fitting, and adjustments. This page is a shopping guide, not medical advice." }],
  finalTitle: "Choose the look, verify the numbers, then build the pair.", finalBody: "Open Zenni to compare current frames and lens options. Review every measurement, prescription value, delivery estimate, and return term before ordering.",
  popup: { productId: "zenni-optical", productName: "Zenni Optical", rating: "Fit-first online eyewear guide", headline: "Before you go: check the numbers behind the frame.", description: "The right style still needs the right measurements, prescription, and lens configuration.", bullets: ["Compare frame dimensions with a pair that fits", "Use a valid prescription and accurate pupillary distance", "Review lens options, delivery, and return terms"], ctaLabel: "Browse Zenni", ctaHref: zenniLink, storageKey: "product-popup:zenni-optical", banner: { eyebrow: "Zenni buying guide", headline: "Frame style is step one; fit and prescription finish the order", description: "Compare current frames, lens options, delivery, and returns." } },
};
