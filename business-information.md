# VENQOR Studios — Business Information (Persistent AI Context)

> **Purpose:** Single source of truth for any AI agent working on the VENQOR Studios website (`D:\Coding\VENQOR\venqor`).  
> **How to use:** Read this file FIRST before any edit. It contains every fact the agent needs — brand, founders, services, tech stack, clients, stats, SEO rules, and voice — so you don't need to re-ask the owner. If a fact changes, update this file.  
> **Companion:** `master-prompt.md` is the executable task list. This file is the knowledge base that task list draws from.

---

## 1. Brand Snapshot

| Field | Value |
|-------|-------|
| **Studio name** | **VENQOR Studios** — spelling `V-E-N-Q-O-R` (all caps in wordmarks/logos, `VENQOR` in headlines, `Venqor` acceptable in sentence case) |
| **What we are** | Two-founder studio + small senior team. We design, build, deploy, and maintain websites and apps. |
| **One-line pitch** | We build 3D, high-performance websites and apps that look premium and rank higher. |
| **Tagline (primary)** | **We Build Websites That Move — And Businesses That Grow.** |
| **Tagline (short alternates)** | `Websites & Apps That Grow Your Business` · `3D Websites. Real Results.` |
| **Elevator (use in About / OG / meta)** | VENQOR Studios is a digital development company led by Neil Verma (Head of Development) and Yojasvi Choudhary (Head of Marketing), backed by specialized developer, testing, maintenance, and marketing teams. We build and maintain 3D & interactive, static, dynamic, headless, e-commerce, and portfolio platforms, plus iOS and cross-platform apps. We ship fast, SEO-ready builds for Google and AI search, and provide long-term care contracts. |
| **Domain** | `https://venqor.online` — live domain. Used for `metadataBase`, canonical, OG (`/assets/brand/og.jpg`), `sitemap.xml`, `robots.txt`, and JSON-LD `Organization.url`. |
| **Public contact** | Email `contact@venqor.com` · Phones `Yojasvi +91 70739 99605` / `Neil Verma +91 93066 28339` · Region `India — working worldwide` · Booking via `#contact` form (Calendly not yet). |
| **Socials** | Not yet public — `SITE.socials` is empty until real URLs are provided. Footer hides the Follow block when empty. Never link to generic `dribbble.com`. |

---

## 2. Founders & Leadership

| Person | Role | What they own | How to write it |
|--------|------|---------------|-----------------|
| **Neil Verma** | Co-Founder — Head of Development | Engineering architecture, developer team, and QA testing team oversight | `Neil Verma, Co-Founder — Head of Development` |
| **Yojasvi Choudhary** | Co-Founder — Head of Marketing | Brand strategy, growth marketing, client operations, and maintenance team oversight | `Yojasvi Choudhary, Co-Founder — Head of Marketing` |
| **Teams** | Specialized in-house teams | Developer team (frontend, 3D, full-stack, mobile), QA testing team, ongoing maintenance team, and marketing team | Highlight team capabilities across development, continuous testing, long-term maintenance, and marketing |

**Avatar / Book Call card rule:** Every `Kate Wilington / Kate W.` reference must be replaced. The card should read `VENQOR Studios` or `Talk to the Founders` with a neutral studio avatar (or combined Neil+Yojasvi treatment). Update `SITE.manager` fields and all `BookCallCard` instances.

---

## 3. What We Build — 6 Services (Final, Do Not Invent Others)

Keep exactly 6 items. Keep the pill/accordion layout. Wording below is final.

| # | Title | Short (`text` on pill) | Long (`long` in accordion — benefit-led, 3–4 sentences, mentions deliverable + outcome) |
|---|-------|------------------------|-------------------------------------------------------------------------------------------|
| 1 | **3D & Interactive Websites** | Immersive 3D, WebGL, motion that converts. | We build 3D and interactive websites that feel premium and keep people scrolling. From subtle depth and motion to full WebGL scenes, everything is fast, responsive, and built to guide visitors toward action. Delivered with clean components and handover docs. |
| 2 | **Static & Dynamic Websites** | Fast, modern, headless-ready sites for any scale. | Static for speed, dynamic for flexibility, headless when you need to scale. We build sites that load fast, read well on every device, and are easy for your team to update. CMS, analytics, and forms included from day one. |
| 3 | **E-Commerce Platforms** | Stores that sell — and stay fast at scale. | Full e-commerce builds with clean product systems, fast checkout, and inventory that just works. We handle catalog, payments, and integrations, and we stay on for maintenance so the store keeps growing after launch. |
| 4 | **Portfolio Websites** | Portfolios that make people remember you. | For founders, creators, artists, and professionals who need to stand out. We craft portfolio sites that put your work first — clear story, strong visuals, and a structure that turns viewers into enquiries. 15+ portfolios shipped for well-known names. |
| 5 | **App Development** | iOS & cross-platform apps, shipped to store. | Native-quality apps with Flutter and Swift — one codebase where it makes sense, native where it matters. We design, build, test, and publish to the App Store / Play Store, then maintain and iterate with you. |
| 6 | **Launch, Scale & Care** | From development to deployment — and long after. | We take you from idea to live — build, QA, deploy, monitor — and stay on for large-scale maintenance. Every site is SEO-compatible by default: clean semantics, structured data, and performance that helps you rank on Google and AI search. We build the foundation; you own the growth. |

**What we DON'T sell as a service:** SEO packages. We build **SEO-compatible** sites (see §7). Figma/Canva are internal tools — don't list them as services.

---

## 4. Tech Stack

### 4.1 Public marquee (what visitors see — `SITE.about.stack`)

```
Three.js · WebGL · React Three Fiber · GSAP · Framer Motion · Next.js · React · Node.js · Express · MongoDB · MERN · Flutter · Swift · Tailwind · TypeScript · JavaScript
```
Style: mono, uppercase, `·` separator, infinite seamless scroll, pause on hover.

### 4.2 Full stack (for FAQ, copy, and agent context — don't dump into marquee)

| Layer | Stack |
|-------|-------|
| **3D / Interactive Web** | Three.js, WebGL, React Three Fiber (R3F), GSAP, Framer Motion |
| **Web — Frontend** | React, Next.js 14 (App Router), TypeScript, JavaScript, Tailwind CSS |
| **Web — Backend** | Node.js, Express |
| **Database** | MongoDB |
| **Full-stack label** | **MERN** — MongoDB + Express + React + Node.js (use `MERN` everywhere, not `MER`) |
| **Apps — Cross-platform** | Flutter (iOS + Android from one codebase) |
| **Apps — Native iOS** | Swift |
| **Design (internal, not a service)** | Figma (primary), Canva (supporting) — mention only if asked "what do you design in" |
| **SEO foundation** | Semantic HTML, structured data (JSON-LD), sitemaps, Core Web Vitals, fast loads |

> If owner confirms additional tools (e.g., Firebase, Supabase, Stripe, Vercel), append here — don't invent.

---

## 5. Proof Points & Client Footprint

### 5.1 Numbers (use these exact counts — don't inflate)

| Metric | Value | How to write it |
|--------|-------|-----------------|
| Websites delivered | **25+** | `25+ websites shipped across industries and countries.` |
| Portfolios for well-known names | **15+** | `15+ portfolios for founders, creators, and well-known names.` |
| E-Commerce platforms (still under maintenance) | **5+** | `5+ stores live with ongoing maintenance and growth.` |

Use these in `SITE.works.metrics` (replace the demo `+34% / +41% / 3.8×` row) and in `SITE.testimonials.clients` / `stats`.

### 5.2 Portfolio footprint

Live work spans e-commerce (Shopify + custom), AI web apps, and business websites — all shipped and live. Clients across India and international (via Shopify/Vercel deployments). The 4 testimonials are mapped to real projects (MORPHO, DT VR Universe, Barkha AI, Nath Paint House) with anonymized client labels like `Client — E-Commerce, Brand Website`.

**Testimonial rule:** Never show a person's or company's real name. Use `Client — <category>` with role `<Project> · <Category> · <Note>`.

### 5.3 Case study in [06] Before & After

**MORPHO — Natural Spring Water** (`https://morphowater.com/`). Tags `E-Commerce · Brand Website`. Before/after images: `/assets/case/morpho-a.jpg` + `morpho-b.jpg`, logo `/assets/case/morpho-logo.svg`. Copy: premium brand store, fast pages, clear storytelling, checkout that converts.

### 5.4 How We Work — no durations

Owner requested **no timeline badges** under How We Work (no `2–4 days` / `1–2 weeks` pills). `SITE.process.steps` must not have a `time` field, and `Process.tsx` must not render `styles.time`. Keep only `[001]` number, title, and paragraph.

---

## 6. Projects — What to Showcase

### 6.1 Rule

Show **only real VENQOR projects**. The template's 4 demo projects (`White Gate Hotel`, `Fashionista`, `Alta Group`, `Lementa`) have been replaced with 5 live projects. Each card has 2 images `[cover, hover]` and keeps the original staggered `ratio` values.

| # | Slug | Title | Live URL | Tags | Ratio |
|---|------|-------|----------|------|-------|
| 1 | `morpho-water` | MORPHO, Natural Spring Water | https://morphowater.com/ | E-Commerce · Brand Website | `265 / 396` — also used for **Before & After [06]** (`/assets/case/morpho-a.jpg`, `morpho-b.jpg`, `morpho-logo.svg`) |
| 2 | `dt-vr-universe` | DT VR Universe | https://dt-vruniverse.myshopify.com/ | E-Commerce · Shopify | `528 / 396` |
| 3 | `barkha-ai` | Barkha AI | https://barkha-ai.vercel.app/ | AI · Web App | `528 / 396` |
| 4 | `nath-paint-house` | Nath Paint House | https://nath-paint-house.vercel.app/ | Business website | `327 / 396` |
| 5 | `little-luxe-hamper` | Little Luxe Hamper | https://little-luxe-hamper.vercel.app/ | E-Commerce · Gifting | `265 / 396` |

For each real project, set: `title`, `slug` (URL-safe), `tags` (2–3 from `3D Website · E-Commerce · Portfolio · Dynamic Website · App · Branding`), `images` (`/assets/works/<slug>-1.jpg`, `/assets/works/<slug>-2.jpg`), `ratio` (as above), `href` (live URL or `#projects` if private). See `master-prompt.md` §6 for the full table to fill.

### 6.2 Thumbnail / asset rule (critical for beauty)

Raw screenshots **break the template's expressive, monochrome, editorial vibe**. For every card:

1. Start from the template's card frame (rounded 12px, 1px border, generous whitespace, monochrome).
2. Generate a new asset that **feels like the template** and **composite the real project thumbnail inside it** (device mockup, subtle inset, or duotone overlay) so it's recognizably real without looking like a pasted screenshot.
3. Export at `1200×900` (work cards, respect `ratio`), `800×600` (insights), `1920×1080` (showreel poster), each < 250KB.
4. If generation isn't possible in this session, keep the old image file **temporarily** but leave a `// TODO: Replace with VENQOR-styled asset — see master-prompt §11` comment next to every path in `content/site.ts` and replace the **copy** immediately (no demo names may ship).

---

## 7. SEO — VENQOR Must Be 100% SEO-Compatible

The owner wants a site that **ranks on Google and AI search** without buying an SEO package. We build the foundation.

### 7.1 What "SEO-compatible" means here

- We **do not** sell SEO services. Every site we deliver is **built to be SEO-ready**: clean semantics, fast Core Web Vitals, structured data, and content AI can understand.

### 7.2 Metadata (`app/layout.tsx` ← `SITE.meta`)

| Field | Value |
|-------|-------|
| `title` | `VENQOR Studios — 3D Websites & Apps That Grow Your Business` (58 chars) |
| `description` | `VENQOR Studios builds 3D, high-performance websites and apps — static, dynamic, e-commerce, portfolios, and iOS apps with Flutter & Swift. SEO-ready for Google and AI search. From development to deployment and long-term care.` (152 chars) |
| `keywords` | `VENQOR Studios, 3D websites, MERN stack, Next.js, Flutter, Swift, iOS app development, e-commerce, portfolio websites, SEO ready websites` |
| `authors` / `creator` | `VENQOR Studios` |
| `metadataBase` | `new URL("https://venqor.online")` |
| `canonical` | `/` |
| `openGraph` | `type: website`, `locale: en_IN`, `siteName: VENQOR Studios`, `images: [{ url: "/assets/brand/og.jpg", width: 1200, height: 630 }]` |
| `twitter` | `card: summary_large_image` |
| `robots` | `{ index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }` |
| `icons` | favicon + apple-touch-icon (monochrome V mark) |
| `verification` | placeholder for Search Console token |

### 7.3 Files to create

- `app/sitemap.ts` — routes `/`, `/#agency`, `/#projects`, `/#blog`, `/#contact`
- `app/robots.ts` — `allow: /`, `disallow: /api/`, `sitemap: https://<domain>/sitemap.xml`

### 7.4 Structured data (JSON-LD in `app/layout.tsx`)

Include: `Organization` (name VENQOR Studios, founders Neil Verma + Yojasvi, `areaServed` India/Germany/US, `sameAs` real socials), `WebSite`, `FAQPage` (from `SITE.faq.items`), optional `Service` per service. Validate at `validator.schema.org`.

### 7.5 On-page rules

- One `h1` per page (hero). Sections are `h2`, service/step titles `h3`.
- Every `<img>` has a descriptive `alt` (content images) or `alt=""` (decorative only).
- Landmarks: `header`/`nav`/`main`/`section`/`footer`/`address`.
- Internal links: hero → `#contact`, `[MORE ABOUT]` → `#services`, process CTA → `#contact`.
- Images < 250KB, `loading="lazy"` except hero, `width`/`height` set, no CLS, `display: swap` fonts.

### 7.6 Keywords (weave naturally, never stuff)

`3D websites`, `MERN`, `Next.js`, `e-commerce`, `portfolio websites`, `app development`, `Flutter`, `Swift`, `iOS`, `deployment`, `maintenance`, `SEO-compatible`, `AI search` — max 2 uses per paragraph.

---

## 8. Voice & Copy Rules

- **Simple, confident, human.** Short sentences. Easy to understand. No jargon, no "leverage synergies / cutting-edge solutions".
- **Benefit first, tech second.** What the client gets → how we built it.
- **Honest.** Only claim 25+ / 15+ / 5+ and regions we can prove. No fake awards, years, or names.
- **Trending but grounded.** Mention `3D`, `AI search`, `headless`, `MERN`, `Flutter`, `Swift` because we actually use them.
- **SEO without spam.** Keywords flow; never repeat a keyword more than twice in one paragraph.
- **No template residue.** After any edit, grep must return 0 hits for: `Mondragon`, `mondragon`, `MONDRAGON`, `Kate W`, `Kate Wilington`, `Sabo Sugi`, `27 Whitfield Yard`, `Finch Systems`, `Nova AI`, `Helix Robotics`, `Orbit Labs`, `Maya Patel`, `Alex Chen`, `Leon Müller`, `Dana Fox`, `White Gate Hotel`, `Fashionista`, `Alta Group`, `Lementa` (the brand), `Fresh Visual Trends`, and the old `DIGITAL CREATIVE AGENCY` tagline.

---

## 9. Site Structure (Do Not Add/Remove/Reorder)

```
Nav
Hero (#home)
About [01] (#agency) — statement + body + Our Stack sphere
Showreel — ParticleMorph / video
Services [02] (#services) — 6 pills/accordion
Featured Works [03] (#projects) — count + [VIEW ALL] + metrics + 2×2 cards
How We Work [04] (#process) — 6 steps + CTA
Testimonials [05] (#testimonials) — 2×2 cards + stats
Before & After [06] (#case) — image compare + info
Insights [07] (#blog) — 3 posts
FAQ [08] + Start a Project (#contact)
Footer
```

IDs must stay: `#home`, `#agency`, `#projects`, `#process`, `#case`, `#blog`, `#contact`. Keep `design.md` tokens (monochrome, `#FCFCF9` bg, 1px borders, Space Mono + Inter Display, motion as-is).

---

## 10. File Map — Where Things Live

| Path | Role |
|------|------|
| `content/site.ts` | **Single source of truth for all copy + asset paths.** Edit this to rebrand. Export `SITE` + `Site` type. |
| `app/layout.tsx` | Fonts, `metadata` (from `SITE.meta`), JSON-LD, `html lang="en"`, `themeColor` |
| `app/page.tsx` | Section order (don't reorder) |
| `app/sitemap.ts` | **Create** — SEO sitemap |
| `app/robots.ts` | **Create** — SEO robots |
| `app/globals.css` | Tokens + type scale — don't edit unless SEO needs `sr-only` |
| `design.md` | Design contract — **never edit** |
| `tailwind.config.ts` | Minimal — don't expand |
| `components/sections/*` | Read from `SITE` — don't hardcode copy |
| `components/layout/Nav.tsx` | Reads `SITE.nav`, `SITE.contact`, `SITE.socials` |
| `components/layout/Footer.tsx` | Reads `SITE.footer`, `SITE.socials`, `SITE.wordmark` |
| `components/blocks/BookCallCard.tsx` | Reads `SITE.manager`, `SITE.hero` |
| `components/blocks/ProjectCard.tsx` | Reads `SITE.works.projects` |
| `public/assets/**` | All images — keep aspect ratios from `design.md` §8 |
| `public/assets/brand/*` | `logo-m.svg` (V mark), `wordmark.svg` (VENQOR), `og.jpg` (1200×630), `favicon.png`, `apple-touch-icon.png` |

---

## 11. Remaining TODOs / What Still Needs Real Assets

1. **Project thumbnails** — `/assets/works/morpho-*.jpg`, `dtvr-*.jpg`, `barkha-*.jpg`, `nath-*.jpg`, `littleluxe-*.jpg` are currently placeholders (copied from template). Replace with VENQOR-styled composites: template card frame + real screenshot inset (see §6.2 / master-prompt §11).
2. **Before & After images** — `/assets/case/morpho-a.jpg` / `morpho-b.jpg` are placeholders; replace with real MORPHO before/after.
3. **Showreel video** — `SITE.showreel.vimeoId` is empty (shows `[Coming Soon]`). Provide Vimeo/YouTube ID when ready.
4. **Social URLs** — `SITE.socials` is empty; add real Instagram/LinkedIn/X when available.
5. **Brand polish** — `logo-m.svg` (geometric V) and `wordmark.svg` (VENQOR) are minimal; replace with final designed versions if you have them. `og.jpg` is now branded but can be polished.
6. **Legal pages** — `/terms` and `/privacy` are now live with original copy (written for VENQOR, not template). Review with a lawyer if needed.

Domain, contact, brand copy, SEO, testimonials, FAQ, insights, and project links are done.

Don't block copy work while waiting — replace text first, leave TODOs for assets/links, and keep `npm run build` passing.

---

## 12. How to Make a Future Edit (For Any Agent)

1. Read this file (you are doing it now).
2. Read `master-prompt.md` for the step-by-step task list and final copy blocks to paste.
3. Edit `content/site.ts` (and `app/layout.tsx` if SEO is involved).
4. If copy changed, ensure no banned template string was reintroduced (grep).
5. Run `npm run build` — must pass with 0 type/ESLint errors.
6. If a brand fact changed (new stat, new service, new region), update **this file** so the next agent inherits it.

---

## 13. Quick Glossary

| Term | Meaning |
|------|---------|
| **VENQOR Studios** | Studio brand — always `VENQOR`, never `Venkor` |
| **MERN** | MongoDB + Express + React + Node.js — our web stack label |
| **R3F** | React Three Fiber — React renderer for Three.js |
| **SEO-compatible** | Site is built so it *can* rank (semantics, speed, structured data) — we don't sell SEO services |
| **AI search** | Answer engines (ChatGPT, Perplexity, Google AI Overviews) that read structured data and semantics |
| **Headless** | Frontend and CMS decoupled for scale |
| **ParticleMorph / Rotor / HelixGallery** | Template FX components — keep them, only change the images/data fed in |

---

*Last updated: 2026-10-15 — by VENQOR Studios (Neil Verma + Yojasvi). Keep this file as the persistent memory for every future change.*
