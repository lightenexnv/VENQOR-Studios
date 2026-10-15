# VENQOR Studios — Master Prompt for Claude Code

> **Purpose:** This is the single executable prompt you paste into Claude Code (or any AI coding agent) to transform the current Mondragon template clone into the real, production-ready **VENQOR Studios** website.
>
> **Rule 0 — Do not skip this file.** Read `business-information.md` first for full context. Then execute every task below in order. Do not add new sections. Do not remove existing sections. Update 100% of template copy.

---

## 1. Your Role & Non-Negotiable Constraints

You are a **senior Next.js developer + SEO executive + brand copywriter** working on `D:\Coding\VENQOR\venqor` (Next.js 14 App Router, Tailwind, Framer Motion).

**Constraints — violating any of these is a failure:**

1. **Structure lock:** Keep all 13 sections in exact order. Do not add, remove, or reorder sections. Sections: `Nav → Hero → About [01] → Showreel → Services [02] → Featured Works [03] → How We Work [04] → Testimonials [05] → Before & After [06] → Insights [07] → FAQ [08] + Start a Project → Footer`. IDs (`#home`, `#agency`, `#projects`, `#process`, `#case`, `#blog`, `#contact`) must stay.
2. **Design lock:** Obey `design.md` tokens. Monochrome only (`#FCFCF9` / `#0A0A0A` / `#6B6B6B` / `#9A9A9A` / `#E5E5E5`). No new colors, no gradients, no shadows, no extra border-radius >16px. Keep Swiss/brutalist typography, grid, 1px borders, and motion as-is.
3. **Zero template residue:** After you finish, **no string from the Mondragon template may remain** — not in `content/site.ts`, not in metadata, not in alt text, not in comments. Grep must return 0 hits for `Mondragon`, `mondragon`, `MONDRAGON`, `Kate W`, `Kate Wilington`, `Sabo Sugi`, `27 Whitfield Yard`, `Finch Systems`, `Nova AI`, `Helix Robotics`, `Orbit Labs`, `Maya Patel`, `Alex Chen`, `Leon Müller`, `Dana Fox`, `White Gate Hotel`, `Fashionista`, `Alta Group`, `Lementa`, `Fresh Visual Trends`, `Digital Creative Agency` (old tagline). If any hit remains, you are not done.
4. **Single source of truth:** All copy lives in `content/site.ts` (exported `SITE`). Components read from it. Never hardcode copy inside components. Update `app/layout.tsx` metadata from `SITE.meta`.
5. **Theme preservation for thumbnails:** Do not paste raw website screenshots into cards. Generate/replace card images as **styled assets that match the template's expressive, monochrome, editorial vibe**, with the real project thumbnail subtly composited inside the template's card frame. See §11.
6. **Tech fidelity:** Keep all animations (TwistGallery, WordSphere, Rotor, HelixGallery, ParticleMorph, BeforeAfter, Reveal, Scramble). Only change the data you feed them.

---

## 2. Brand Identity — VENQOR Studios

- **Studio name:** `VENQOR Studios` — spelling is **V-E-N-Q-O-R** (all caps in wordmarks, `Venqor` in body copy is also acceptable but default to `VENQOR`). Never write `Venkor`, `Venqor Studios` is one brand.
- **What we do (one line):** We build 3D, high-performance websites and apps that look premium and rank higher.
- **Tagline — use this exact one everywhere a tagline is required:**

  > **We Build Websites That Move — And Businesses That Grow.**

  Alternatives approved if layout needs a shorter line: `Websites & Apps That Grow Your Business` / `3D Websites. Real Results.`
- **Elevator (use in About / footer / OG description):**

  > VENQOR Studios is a two-founder studio — Neil Verma (development) and Yojasvi (marketing & management) — backed by a small senior team. We design and build every kind of website and app: 3D & interactive, static, dynamic, headless, e-commerce, and portfolio sites for founders and creators, plus iOS and cross-platform apps. We ship fast, SEO-ready builds that work with Google and AI search, and we stay on for deployment and long-term maintenance.

---

## 3. Founders & Team — How to Talk About People

- **Neil Verma** — handles all coding and development. Do not call him "CEO" or "CTO" — use `Founder, Development` or `Founder — Engineering`.
- **Yojasvi** — handles marketing and management. Use `Founder, Marketing & Operations`.
- **Team:** Mention that VENQOR is backed by a senior team, but **do not list team members, roles, or bios**. One sentence max. Example: `Backed by a small senior team that ships with us project to project.`
- **Manager avatar/card:** Replace every `Kate Wilington / Kate W.` instance. The `Book Call` card should show **VENQOR** as the contact — use a neutral studio avatar or a combined Neil+Yojasvi treatment, labelled `VENQOR Studios` or `Talk to the Founders`. Update `SITE.manager` fields and all `BookCallCard` usages. Remove any "Kate" image references from copy (filenames can stay until assets are replaced, but alt/label text must not say Kate).
- **Testimonials:** **Never show real client names.** Anonymize to region/industry. See §8.

---

## 4. Services We Actually Offer — Rewrite All 6 Service Items

> Keep 6 items. Keep the pill/accordion layout. Replace titles, short text (`text`), and long descriptions (`long`) with VENQOR services. Keep `align` and `image` keys but update image paths to new assets.

Use these **exact 6 services** (wording is final — do not invent others):

| # | `title` | `text` (short, shown on pill) | `long` (accordion expanded, 3–4 sentences, simple, benefit-led) |
|---|---------|-------------------------------|-------------------------------------------------------------------|
| 1 | 3D & Interactive Websites | Immersive 3D, WebGL, motion that converts. | We build 3D and interactive websites that feel premium and keep people scrolling. From subtle depth and motion to full WebGL scenes, everything is fast, responsive, and built to guide visitors toward action. Delivered with clean components and handover docs. |
| 2 | Static & Dynamic Websites | Fast, modern, headless-ready sites for any scale. | Static for speed, dynamic for flexibility, headless when you need to scale. We build sites that load fast, read well on every device, and are easy for your team to update. CMS, analytics, and forms included from day one. |
| 3 | E-Commerce Platforms | Stores that sell — and stay fast at scale. | Full e-commerce builds with clean product systems, fast checkout, and inventory that just works. We handle catalog, payments, and integrations, and we stay on for maintenance so the store keeps growing after launch. |
| 4 | Portfolio Websites | Portfolios that make people remember you. | For founders, creators, artists, and professionals who need to stand out. We craft portfolio sites that put your work first — clear story, strong visuals, and a structure that turns viewers into enquiries. 15+ portfolios shipped for well-known names. |
| 5 | App Development | iOS & cross-platform apps, shipped to store. | Native-quality apps with Flutter and Swift — one codebase where it makes sense, native where it matters. We design, build, test, and publish to the App Store / Play Store, then maintain and iterate with you. |
| 6 | Launch, Scale & Care | From development to deployment — and long after. | We take you from idea to live — build, QA, deploy, monitor — and stay on for large-scale maintenance. Every site is SEO-compatible by default: clean semantics, structured data, and performance that helps you rank on Google and AI search. We build the foundation; you own the growth. |

**Copy rules for services:** Short sentences. No jargon. Start with the benefit. Every `long` must mention a deliverable and an outcome. Do not mention Figma/Canva as a service — they are internal tools.

---

## 5. Tech Stack — Replace the Marquee

Replace `SITE.about.stack` and any hardcoded stack lists. New marquee (loop 2×, same animation):

```
Three.js · WebGL · React Three Fiber · GSAP · Framer Motion · Next.js · React · Node.js · Express · MongoDB · MERN · Flutter · Swift · Tailwind · TypeScript · JavaScript
```

Keep it mono, uppercase, `·` separator, seamless infinite scroll, pause on hover. Update `SITE.about.stackTitle` to `Our Stack` (keep) — or `Technologies We Use` if space allows, but keep short.

In `business-information.md` there is a full stack table — the marquee is the short public version. Do not dump the whole table into the marquee.

---

## 6. Projects / Featured Works [03] — Showcase Only Real Projects

**Critical:** Replace all 4 demo projects. Do not keep `white-gate-hotel`, `fashionista`, `alta`, `lementa`. Use **only the real VENQOR projects** the owner provided.

### 6.1 What you must do

1. **Ask for / locate project links.** If the user has not pasted them in this session, search the repo for any file containing links, check `content/site.ts` comments, and if still missing, leave a clearly marked `TODO: Replace with real VENQOR project` and render a visible TODO badge in dev — but do not ship demo content to production.
2. For each of the 4 slots in `SITE.works.projects`, set:
   - `title`: Real project name (e.g., client brand or descriptive name — anonymize if client is private, e.g., `E-Commerce Platform — Fashion Retail (Los Angeles)`)
   - `slug`: URL-safe slug derived from title (`ecommerce-fashion-la`)
   - `tags`: 2–3 from: `3D Website` · `E-Commerce` · `Portfolio` · `Dynamic Website` · `App` · `Branding` — must reflect what was actually built
   - `images`: Two images per project `[cover, hover]` — see §11 for how to generate them. Paths: `/assets/works/<slug>-1.jpg`, `/assets/works/<slug>-2.jpg` (keep ratio field accurate)
   - `ratio`: Keep the 4 ratios that create the staggered grid — `265/396`, `528/396`, `528/396`, `327/396` in order. Do not change the grid structure.
3. **Stats row above projects** — replace demo metrics with VENQOR proof points (real numbers owner gave):
   - `25+` — Websites Delivered — `25+ websites shipped across industries and countries.`
   - `15+` — Portfolios Built — `15+ portfolios for founders, creators, and well-known names.`
   - `5+` — E-Commerce Platforms — `5+ stores live with ongoing maintenance and growth.`
   Keep the `Scramble` on `value`, mono label, and muted desc layout.

### 6.2 Placeholder table (fill immediately if links are available)

| Slot | Real Title | Tags | Live URL | Cover Image |
|------|-----------|------|----------|-------------|
| 1 | TODO — Project 1 (e.g., Los Angeles — Large-Scale E-Commerce) | E-Commerce · Dynamic Website | `https://…` | `/assets/works/project-1-1.jpg` |
| 2 | TODO — Project 2 (e.g., Portfolio — Public Figure, India) | Portfolio · 3D Website | `https://…` | `/assets/works/project-2-1.jpg` |
| 3 | TODO — Project 3 (Germany Client — Business Website) | Dynamic Website · Branding | `https://…` | `/assets/works/project-3-1.jpg` |
| 4 | TODO — Project 4 (App — iOS / Flutter) | App · E-Commerce | `https://…` | `/assets/works/project-4-1.jpg` |

Link each card to the live URL (or to `#projects` with an external-link icon if client prefers not to link directly). Never link to `#white-gate-hotel` etc.

---

## 7. Copy for Every Remaining Section — Final Wording to Paste

> The strings below are **final, SEO-aware, human, and simple**. Paste them into `content/site.ts` verbatim (adjust only if a string overflows its container at 390px — then shorten, don't complicate).

### 7.1 `SITE.meta` (also drives `app/layout.tsx` `metadata`)

```ts
meta: {
  title: "VENQOR Studios — 3D Websites & Apps That Grow Your Business",
  description: "VENQOR Studios builds 3D, high-performance websites and apps — static, dynamic, e-commerce, portfolios, and iOS apps with Flutter & Swift. SEO-ready for Google and AI search. From development to deployment and long-term care.",
}
```

- Title: 58 chars. Description: 152 chars. Both include `VENQOR Studios`, `3D websites`, `apps`, `e-commerce`, `portfolio`, `Flutter`, `Swift`, `SEO`, `Google and AI search`.

### 7.2 `SITE.nav`

```ts
nav: [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#agency" },   // was Agency
  { label: "Work", href: "#projects" },   // was Projects
  { label: "Insights", href: "#blog" },   // was Blog
  { label: "Contact", href: "#contact" },
]
```

### 7.3 `SITE.hero`

```ts
hero: {
  tagline: "WE BUILD WEBSITES THAT MOVE — AND BUSINESSES THAT GROW",
  bookTitle: ["Start", "a Project"],
  bookText: "Tell us your idea. We'll reply with scope, timeline, and next steps.",
  likedBy: ["Trusted by", "founders & brands"],
  // founders: keep 4 small avatars but label them as client types, not names — alt=""
}
```

Update `SITE.hero.ribbon` — keep 5 ribbon images but replace with VENQOR-styled 3D abstract renders (monochrome, editorial). Keep `dots` SVG.

### 7.4 `SITE.about` [01]

```ts
about: {
  number: "[01]",
  statement: "We build fast, 3D-ready websites and apps that make your business look premium — and rank higher on Google and AI search",
  more: "[MORE ABOUT US]",
  body: [
    "VENQOR Studios is a two-founder studio. Neil Verma leads development, Yojasvi leads marketing and operations. Backed by a small senior team, we ship together — every project has clear ownership and no hand-offs. ",
    "We build every kind of website — 3D and interactive, static, dynamic, headless, e-commerce, and portfolios — plus iOS and cross-platform apps. From development to deployment and long-term maintenance, we stay on so large-scale projects keep getting better after launch. ",
    "Every build is SEO-compatible by default: clean code, fast pages, and structure that both Google and AI search can understand. We don't sell SEO — we build sites that are ready to rank.",
  ],
  stackTitle: "Our Stack",
  stack: ["Three.js","WebGL","React Three Fiber","GSAP","Framer Motion","Next.js","React","Node.js","Express","MongoDB","MERN","Flutter","Swift","Tailwind","TypeScript","JavaScript"],
}
```

### 7.5 `SITE.showreel`

```ts
showreel: {
  glyphs: "◆◇⟡",
  title: "Showreel",
  // Keep imageA/imageB as abstract monochrome renders that match the editorial theme
  // vimeoId: replace with VENQOR showreel URL, or set to "" and show the ParticleMorph still if no video yet
}
```

If no showreel video exists, keep `ParticleMorph` on desktop and `[Play]` still on mobile but point the CTA to `#projects` — do not leave a broken Vimeo embed.

### 7.6 `SITE.process` — How We Work [04]

Keep 6 steps, same durations, update copy to VENQOR voice:

```ts
process: {
  label: "How We Work",
  number: "[04]",
  steps: [
    { n: "[001]", title: "Discover", time: "2–4 days", text: "We get clear on your goals, audience, and constraints. We look at what's live, what's working, and what's blocking growth — so we agree on what success looks like before we design anything." },
    { n: "[002]", title: "Define", time: "2–4 days", text: "We turn goals into a clear scope, timeline, and measurable outcomes. Roadmap, responsibilities, and what we'll track — all written down so there are no surprises." },
    { n: "[003]", title: "Design", time: "1–2 weeks", text: "We explore directions, then lock a modular design system — layout, type, motion, and 3D where it adds value. Content structure and accessibility are specified so build is predictable." },
    { n: "[004]", title: "Build", time: "1–2 weeks", text: "We build fast, maintainable products — MERN for web, Flutter and Swift for apps — with CMS, payments, and analytics from day one. Performance budgets and QA run continuously." },
    { n: "[005]", title: "Launch", time: "2–4 days", text: "We ship with a checklist: QA, Core Web Vitals, redirects, tracking, and security. We watch the first 72 hours closely and fix fast. Your team gets editing training and docs." },
    { n: "[006]", title: "Improve", time: "2–3 weeks", text: "We improve in focused sprints — experiments, content, and performance — driven by real data. Small releases, steady growth, and ongoing care for large-scale products." },
  ],
  cta: "Talk to the Founders",
}
```

### 7.7 `SITE.caseStudy` — Before & After [06]

Pick the strongest real project (recommend the Los Angeles large-scale platform — it is still growing, great story). Update all fields:

```ts
caseStudy: {
  title: "Before & After",
  number: "[06]",
  heading: "From idea to scale: design, build, launch, and long-term growth",
  name: "Large-Scale Platform — Los Angeles",
  href: "#projects", // or live URL if public
  tags: ["E-Commerce", "Dynamic Website"],
  text: "We rebuilt a large, fully-settled Los Angeles platform end to end — clearer structure, faster pages, and a store that scales. Modular design, MERN build, and ongoing maintenance keep it growing month after month. Cleaner story, smoother shopping, better results.",
  info: [
    { value: "2025", label: "Year" },
    { value: "E-Commerce", label: "Industry" },
    { value: "Los Angeles, USA", label: "Client Location" },
  ],
}
```

If the LA project cannot be named, keep it anonymized as above. Do not invent a fashion brand.

### 7.8 `SITE.insights` [07] — 3 Trending, SEO-Driven Posts

Replace all 3 posts with current, trending, VENQOR-relevant topics. Keep the card layout, image aspect, and `[READ MORE]` pattern.

```ts
insights: {
  number: "[07]",
  label: "Insights",
  all: "[ALL POSTS]",
  readMore: "[READ MORE]",
  posts: [
    { title: "Why 3D Websites Convert Better in 2026", text: "Subtle depth, motion, and WebGL aren't just eye candy — they guide attention and build trust. Here's when 3D helps conversion and when it hurts performance, with a simple checklist.", image: "/assets/insights/post-1.jpg", href: "#blog" },
    { title: "Static vs Dynamic vs Headless: What Do You Actually Need?", text: "Not every business needs a complex stack. We break down static, dynamic, and headless in plain language — cost, speed, scale, and who each is best for.", image: "/assets/insights/post-2.jpg", href: "#blog" },
    { title: "Make Your Website AI-Search Ready", text: "Google and AI search now answer before they send clicks. Learn how clean semantics, structured data, and fast pages make your site understandable — without buying an SEO package.", image: "/assets/insights/post-3.jpg", href: "#blog" },
  ],
}
```

### 7.9 `SITE.faq` [08] — 7 Questions VENQOR Actually Gets

```ts
faq: {
  label: "FAQ",
  number: "[08]",
  items: [
    { q: "What do you build?", a: "We build every kind of website — 3D and interactive, static, dynamic, headless, e-commerce, and portfolios — plus iOS and cross-platform apps with Flutter and Swift. If it lives on the web or in the App Store, we can build it." },
    { q: "What's the typical timeline?", a: "A portfolio or static site: 2–4 weeks. A dynamic or e-commerce platform: 6–12 weeks. A large-scale app or marketplace: 3–6 months. We share a clear schedule with milestones before we start, and we ship in small, testable increments." },
    { q: "How do you price?", a: "Fixed scope, fixed price after discovery. We don't do one-size-fits-all packages. After a short call, we send a proposal with scope, timeline, and cost broken down by phase so you know exactly what you're paying for." },
    { q: "Do you handle deployment and maintenance?", a: "Yes. We handle development through deployment and stay on for long-term maintenance — especially for large-scale projects. That includes updates, performance, security, and small feature sprints so your product keeps improving." },
    { q: "Are your websites SEO-compatible?", a: "Every site we build is SEO-compatible by default — clean semantics, fast Core Web Vitals, structured data, and sitemaps that both Google and AI search can read. We don't sell SEO as a service, but we build the foundation so you can rank higher." },
    { q: "What tech stack do you use?", a: "Web: MERN — MongoDB, Express, React, Next.js — plus Three.js, WebGL, React Three Fiber, GSAP, and Framer Motion for 3D and motion. Apps: Flutter for cross-platform and Swift for native iOS. Design is done in Figma." },
    { q: "Can you work with our existing team or brand?", a: "Absolutely. We often work alongside in-house teams and brand partners. We align on guidelines, share a design system in Figma, and keep communication in one place with weekly demos." },
  ],
}
```

### 7.10 `SITE.startProject` + `SITE.footer` + `SITE.contact`

```ts
contact: {
  address: "India — working worldwide (Germany · Los Angeles · India)", // Replace with real studio address if you have a public one, or keep as region line. If you have a street address, use it and update addressHref.
  addressHref: "https://maps.google.com/?q=India",
  phone: "Contact via form", // Replace with real number if public, else keep form-only and hide phone in UI
  phoneHref: "#contact",
  bookCallHref: "#contact",
},
startProject: {
  title: ["Start", "a Project"],
  text: ["Tell us your idea and goals.", "We'll reply with scope and timeline."],
  fields: { name: "Your Name", email: "Your Email", message: "Tell us about your project" },
  placeholders: { name: "Your name", email: "email@company.com", message: "What do you want to build? Budget and timeline help us reply faster." },
  submit: "Send Message",
  sent: "Thank you — we'll be in touch within 24 hours.",
  termsHref: "#terms",
  privacyHref: "#privacy",
},
footer: {
  tagline: "VENQOR Studios — Websites & Apps That Grow Your Business",
  newsletterTitle: "Get notes on 3D, web, and growth",
  newsletterText: "Short, practical notes on building websites and apps that perform — no spam.",
  emailLabel: "Your Email",
  emailPlaceholder: "email@company.com",
  subscribe: "Subscribe",
  subscribed: "You're in!",
  follow: "Follow Us",
  copyright: "© " + new Date().getFullYear() + " VENQOR Studios. All Rights Reserved.",
  designedBy: null, // Remove Sabo Sugi credit. If you must credit the template, do it in a comment, not in the footer UI.
}
```

- Remove `SITE.footer.helix` caption that says `Sabo Sugi` — this is now a VENQOR site.
- Update `SITE.socials` to VENQOR's real profiles (Instagram, LinkedIn, X, Dribbble/Behance if you have them). If a profile doesn't exist, remove that icon — don't link to `dribbble.com` generically.
- Update `SITE.manager` to VENQOR founders (see §3).

---

## 8. Testimonials [05] — Anonymized, Region-Based

Replace all 4 named testimonials. Keep the 2×2 card layout, quote marks, and stats footer. **Use regions, not names. Use industries, not company names.**

```ts
testimonials: {
  number: "[05]",
  curved: "TESTIMONIALS",
  clients: { value: "25+", label: "Websites Delivered" }, // was 200+ Worldwide — replace with honest count
  stats: [
    { value: "15+", label: "Portfolios for well-known names" },
    { value: "5+", label: "E-Commerce stores under care" },
  ],
  items: [
    {
      name: "Client — Los Angeles, USA",
      role: "Large-Scale E-Commerce Platform · Ongoing Growth",
      mark: "/assets/testimonials/mark-1.svg",
      quote: "VENQOR rebuilt our platform from the ground up and stayed on after launch. The site is faster, clearer, and keeps growing with us. Communication was direct and every decision was documented.",
    },
    {
      name: "Client — Germany",
      role: "Business Website · Dynamic Platform",
      mark: "/assets/testimonials/mark-2.svg",
      quote: "They turned a complex brief into a simple, fast website our team can actually manage. We shipped on time and the new structure made everything easier for our customers.",
    },
    {
      name: "Client — India",
      role: "Portfolio · Founder / Creator",
      mark: "/assets/testimonials/mark-3.svg",
      quote: "My portfolio finally feels like me — clean, fast, and memorable. Enquiries went up within weeks and the site is effortless to update.",
    },
    {
      name: "Client — India",
      role: "E-Commerce · Growing Store",
      mark: "/assets/testimonials/mark-4.svg",
      quote: "From store setup to payments and ongoing care, VENQOR handled everything. The checkout is smooth, the catalog is clear, and maintenance has been reliable.",
    },
  ],
}
```

- Keep `imageTop` / `imageBottom` but replace with neutral monochrome textures that match the editorial vibe.
- The `Ticker` wordmarks/marks row: replace brand logos with neutral geometric marks or remove if you don't have permission to show logos. Do not show fake brand wordmarks.
- On `bp === "phone"` the `Carousel` order must match the anonymized list above — update the `byName` lookup to match new `name` values or refactor to index-based.

---

## 9. SEO — Make VENQOR 100% SEO-Compatible & Scalable

Act as a professional SEO executive. Implement **all** of the following. This is not optional.

### 9.1 Metadata (`app/layout.tsx`)

- `metadata.title`: Use `SITE.meta.title` with template `{ title: "%s — VENQOR Studios" }` if you add sub-pages.
- `metadata.description`: `SITE.meta.description` (unique, 150–160 chars, includes primary keywords: `3D websites`, `app development`, `e-commerce`, `portfolio`, `MERN`, `Flutter`, `Swift`, `SEO-ready`).
- `metadata.keywords`: `["VENQOR Studios","3D websites","MERN stack","Next.js","Flutter","Swift","iOS app development","e-commerce","portfolio websites","SEO ready websites"]`
- `metadata.authors`, `metadata.creator`: `VENQOR Studios`
- `metadata.metadataBase`: `new URL("https://venqor.com")` — **ask the owner for the real domain and replace immediately** (fallback to `https://venqor.studio` if undecided, but never leave `example.com`).
- `metadata.alternates.canonical`: `/`
- `metadata.openGraph`: `type: "website"`, `locale: "en_IN"`, `url`, `siteName: "VENQOR Studios"`, `title`, `description`, `images: [{ url: "/assets/brand/og.jpg", width: 1200, height: 630, alt: "VENQOR Studios — We Build Websites That Move" }]`
- `metadata.twitter`: `card: "summary_large_image"`, `title`, `description`, `images`
- `metadata.robots`: `{ index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }`
- `metadata.icons`: keep favicon + apple-touch-icon (generate if missing — monochrome V mark)
- `metadata.verification`: leave placeholder for `google` / `other` — owner will paste Search Console token later.

### 9.2 Technical SEO Files (create if missing)

- `app/sitemap.ts` — list `/`, `/#agency`, `/#projects`, `/#blog`, `/#contact` (and any real sub-pages). `changeFrequency: "monthly"`, `priority` 1.0 for `/`.
- `app/robots.ts` — `rules: { userAgent: "*", allow: "/", disallow: ["/api/"] }`, `sitemap: "https://<domain>/sitemap.xml"`.
- `public/manifest.json` if you add PWA — not required but keep icons consistent.

### 9.3 Structured Data (JSON-LD) — inject in `app/layout.tsx` via `<script type="application/ld+json">`

Include **all three**:

1. `Organization` — name `VENQOR Studios`, url `https://<domain>`, logo `/assets/brand/logo-m.svg`, founders `Neil Verma` / `Yojasvi`, `sameAs` = real social URLs, `areaServed`: `["India","Germany","United States"]`.
2. `WebSite` — name, url, `potentialAction` SearchAction if you have search.
3. `FAQPage` — generate from `SITE.faq.items` (question/answer pairs).
4. (Optional) `Service` — one per service in `SITE.services.items`.

Validate with `https://validator.schema.org/` — no errors.

### 9.4 On-Page SEO

- Exactly one `h1` per page (the hero wordmark). All section headings are `h2`, service/step titles are `h3`. Never skip levels.
- Every `<img>` has a descriptive `alt` (or `alt=""` only if purely decorative). Project cards: `alt="{title} — {tags.join(', ')}"`. No empty alt on content images.
- Semantic landmarks: `header`/`nav`/`main`/`section`/`footer`/`address`. The FAQ uses `dl` or proper heading + region pattern (keep existing a11y).
- Internal linking: hero CTA → `#contact`, `[MORE ABOUT]` → `#services`, `[VIEW ALL]` → `#projects`, process CTA → `#contact`.
- Performance: keep images as `jpg`/`webp` under 250KB each, `loading="lazy"` except hero, `width`/`height` set to avoid CLS. No layout shift from fonts (keep `display: swap`).
- No `noindex` on production. No `__NEXT_DATA__` leaks.

### 9.5 Copy-Level SEO (in `SITE`)

- Primary keywords naturally woven in (not stuffed): `3D websites`, `MERN`, `Next.js`, `e-commerce`, `portfolio websites`, `app development`, `Flutter`, `Swift`, `iOS`, `deployment`, `maintenance`, `SEO-compatible`, `AI search`.
- No duplicate descriptions across sections. Each `text`/`long` is unique.

---

## 10. Files You Must Edit — And How

| File | What to do |
|------|-----------|
| `content/site.ts` | **Main task.** Replace every field listed in §7–§8. This is the only copy source. Keep the `const A = "/assets"` pattern and `as const` on services. Export type stays `Site`. |
| `app/layout.tsx` | Wire `metadata` fully from `SITE.meta` + §9.1. Add JSON-LD `<script>` tags. Keep `Space_Mono` + `InterDisplay` fonts. Set `html lang="en"`. Update `themeColor` to `#FCFCF9` or `#0A0A0A`. |
| `app/sitemap.ts` | **Create** — see §9.2. |
| `app/robots.ts` | **Create** — see §9.2. |
| `public/assets/**` | Replace images per §11. Keep filenames or update `site.ts` paths to match — but never leave a broken `src`. |
| `components/**/*` | Do **not** edit layout/CSS unless a string overflow forces a truncation fix. If you must, keep changes minimal and monochrome. |
| `design.md` | Do **not** edit. It is the design contract. |
| `tailwind.config.ts` / `app/globals.css` | Do **not** edit unless SEO requires a `scroll-behavior` or `sr-only` addition. |

**Order of execution:**

1. Read `business-information.md`.
2. Replace `content/site.ts` in one atomic edit (or section-by-section with verification).
3. Update `app/layout.tsx` metadata + JSON-LD.
4. Create `app/sitemap.ts` + `app/robots.ts`.
5. Replace/generate assets in `public/assets/**` (or update paths if assets are not yet available — leave TODO comments).
6. Run `npm run build` — must pass with 0 type errors and 0 ESLint errors.
7. Grep for every banned template string — 0 hits.
8. Manual visual QA at 390, 810, 1200, 1600px — no overflow, no missing images, no broken anchors.

---

## 11. Asset / Thumbnail Rule — Keep the Template's Vibe

> The template's images are expressive, monochrome, editorial, and highly art-directed. Raw screenshots of client websites **will break the vibe**.

**For every project card, blog card, service image, and showreel poster:**

1. Start from the template's original card composition (rounded 12px frame, generous whitespace, 1px border, monochrome palette).
2. Generate a new asset that **feels like the template** — abstract, editorial, Swiss — and **composite the real project thumbnail inside it** (e.g., as a centered device mockup, or a subtle inset, or a duotone overlay). The viewer should understand it's a real project without the card looking like a raw screenshot.
3. Export at the exact sizes from `design.md` §8: `1200×900` for work cards (or 2:3 as per `ratio`), `800×600` for insights, `1920×1080` for showreel poster. Keep file size < 250KB.
4. If you cannot generate images in this environment, replace `site.ts` paths with the existing template images **temporarily** and leave a `// TODO: Replace with VENQOR-styled asset — see master-prompt §11` comment next to each. Do not leave the old project names in copy even if the image is temporarily old.

**Other assets to replace:**

- `public/assets/brand/logo-m.svg` → VENQOR `V` mark (monochrome)
- `public/assets/brand/wordmark.svg` → `VENQOR` wordmark (Space Mono, uppercase, tracking ~0.08em)
- `public/assets/brand/og.jpg` → 1200×630 OG image with `VENQOR Studios` + tagline on off-white
- `public/assets/brand/favicon.png` + `apple-touch-icon.png`
- `public/assets/about/about.jpg` → editorial studio / abstract image (not a stock photo that clashes with monochrome)
- `public/assets/showreel/morph-1.jpg` / `morph-2.jpg` → abstract monochrome stills for ParticleMorph

---

## 12. What You Need From the Owner Before You Can Finish

If any of these are missing, **ask explicitly** and do not guess:

1. **Real project links + names + live URLs** — the 4 featured projects to show. For each: title, URL, 1-sentence outcome, and 2 screenshots (or permission to screenshot).
2. **Domain** — e.g., `venqor.com` / `venqor.studio` / `venqor.in` — required for `metadataBase`, canonical, OG, sitemap, JSON-LD.
3. **Contact** — public email, phone (if you want it shown), studio address or region line, and preferred booking link (Calendly or `#contact`).
4. **Social URLs** — Instagram, LinkedIn, X, Behance, Dribbble — only those that exist.
5. **Showreel video** — Vimeo/YouTube ID or file, or confirm `no video yet` so you keep the abstract still.
6. **Favicon / logo source** — if owner has a `V` mark, use it; otherwise generate a monochrome geometric `VQ` mark.
7. **Legal URLs** — real `/terms` and `/privacy` or keep as `#terms` / `#privacy` with a TODO.

Do not block the rest of the work while waiting — replace copy first, leave TODOs for assets/links, and make the build pass.

---

## 13. Verification Checklist — You Are Done Only When All Are ✅

- [ ] `content/site.ts` contains zero banned strings (grep list in §1).
- [ ] `SITE.brand` is `VENQOR` / `VENQOR Studios` everywhere; wordmark alt is `VENQOR`.
- [ ] Hero tagline is the VENQOR tagline, not `DIGITAL CREATIVE AGENCY`.
- [ ] About statement + body mention Neil Verma + Yojasvi + team (one sentence) + SEO-compatible note.
- [ ] All 6 services are the VENQOR services (§4) with correct `title`/`text`/`long`.
- [ ] Stack marquee is the VENQOR stack (§5).
- [ ] Featured Works: 4 real VENQOR projects, no demo names, metrics are `25+` / `15+` / `5+` (or honest updated counts).
- [ ] How We Work: 6 steps with VENQOR copy, CTA is `Talk to the Founders`.
- [ ] Testimonials: 4 anonymized region-based quotes, no personal names.
- [ ] Before & After: real VENQOR case (LA platform or best available), not Lementa.
- [ ] Insights: 3 trending VENQOR posts (§7.8), no `Fresh Visual Trends` etc.
- [ ] FAQ: 7 VENQOR questions (§7.9).
- [ ] Contact + Footer: VENQOR tagline, no Sabo Sugi credit, socials point to real profiles or are removed.
- [ ] `app/layout.tsx` metadata is complete (§9.1), JSON-LD is present and valid.
- [ ] `app/sitemap.ts` + `app/robots.ts` exist and point to the real domain.
- [ ] Assets: project/blog cards are VENQOR-styled (or TODO-commented), no raw screenshots breaking the theme.
- [ ] `npm run build` passes (0 errors).
- [ ] Visual QA at 390 / 810 / 1200 / 1600px — no overflow, no 404 images, all anchors work.
- [ ] `design.md` was not edited.

---

## 14. Tone & Language Rules

- **Simple, confident, human.** Short sentences. No buzzword stuffing. No "leverage synergies" or "cutting-edge solutions".
- **Benefit first, tech second.** Always say what the client gets before how you built it.
- **Attractive but honest.** Don't claim awards, years, or client names you can't prove. Stick to the numbers given: 25+ sites, 15+ portfolios, 5+ e-commerce.
- **Trending but grounded.** Mention `3D`, `AI search`, `headless`, `MERN`, `Flutter`, `Swift` naturally — because VENQOR actually uses them.
- **SEO without spam.** Keywords flow in copy; never repeat a keyword more than twice in one paragraph.

---

## 15. Quick Start — Paste This Into Claude Code

> **Prompt to paste:**
>
> `Read business-information.md, then execute master-prompt.md end-to-end. Replace 100% of template copy in content/site.ts with VENQOR Studios content, update app/layout.tsx metadata + JSON-LD, create app/sitemap.ts and app/robots.ts, and ensure npm run build passes with zero banned strings remaining. Ask me only for the 7 items in §12 if missing.`

---

*End of master prompt. Next: `business-information.md` is the persistent context file — keep it updated whenever VENQOR's facts change.*
