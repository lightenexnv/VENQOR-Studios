# design.md — MONDRAGON 1:1 Design System
> Source: https://mondragon.framer.website/ | Brutalist Swiss Minimal Agency Template
> Purpose: Single source of truth for 1:1 replica. All code must import tokens from here.
> Tech: Next.js 14 App Router + Tailwind + Framer Motion

## 1. Philosophy
Swiss / Brutalist Minimalism. Monochrome editorial, strict grid, no decoration. Design = typography + whitespace + 1px borders. No shadows, no gradients, no color accents. Content does the work.

## 2. Tokens — Colors (Exact, No Deviations)
```js
colors: {
  bg: "#FCFCF9",        // page background (warm off-white)
  bg2: "#F2F2F0",       // secondary section bg (showreel/project cards)
  card: "#FFFFFF",      // cards
  fg: "#0A0A0A",        // primary text + black buttons
  fg2: "#6B6B6B",       // secondary paragraph
  muted: "#9A9A9A",     // mono labels, placeholders
  border: "#E5E5E5",    // 1px lines
  borderDark: "#111111",// hover border
}
// CTA: bg-fg text-bg (black pill), hover: invert or opacity 0.85
```

## 3. Typography
```js
fontFamily: {
  display: ["Instrument Sans", "General Sans", "Inter", "system-ui"], // 600-700
  body: ["Inter", "Suisse Intl", "system-ui"],                         // 400/500
  mono: ["JetBrains Mono", "Geist Mono", "monospace"],                  // labels/stats
}
letterSpacing: {
  mono: "0.10em"
}
```
**Scale:**
- H1 Hero: 38px / 56px mobile → 64-72px desktop, weight 600, line 0.92, tracking -0.03em
- H2 Section: 32px mobile → 44-48px desktop, weight 600, line 1.0, tracking -0.02em
- H3 Service: 22px → 26-28px, weight 600
- Label Mono: 10-11px, mono, uppercase, tracking 0.1em, muted
- Body: 14-15px, line 1.6, fg2
- Stat Number: 44px mobile → 56-64px desktop, weight 600, fg
- Nav/Footer: 13-14px, 500

## 4. Layout
```js
maxWidth: "1440px" // centered mx-auto
padding: {
  mobile: "16px",
  tablet: "24px",
  desktop: "40px"
}
grid: "12 columns, gap 16px mobile / 24px desktop"
sectionPaddingY: "72px mobile / 110-120px desktop"
border: "1px solid #E5E5E5"
radius: {
  card: "12px",
  pill: "999px",
  input: "8px",
  image: "12px"
}
```
All sections separated by `border-t border-border`. Nav sticky with `border-b`.

## 5. Components Spec (Pixel-Perfect)

### 5.1 Navigation
- Height 64px, sticky top-0, bg-bg + border-b, z-50
- Left: MONDRAGON wordmark 14px mono tracking 0.08em weight 700
- Center: Agency / Projects / Blog / Contact 13px 500 (hidden <1024px)
- Right: Pill button "Book Call" 12px 20px bg-fg text-bg rounded-full
- Mobile: hamburger → slide drawer with same links + Book Call full-width

### 5.2 Hero [01]
- 12-col grid: Left 7 cols, Right 5 cols (stack on <1024)
- Left: mono label `DIGITAL CREATIVE AGENCY` + H1 + `[MORE ABOUT]` mono link + 15px fg2 paragraph max-w 58ch
- Right: Card bg-card border radius 12px p-24-32. Top: `Start a Project` h3 + `Let's book & talk...` muted. Bottom: `Book Call` black pill + avatar row (40px circle) `Kate W.` + `Liked by 50+ founders` 12px muted
- Number badge `[01]` top-right mono muted

### 5.3 Marquee — Our Stack
- Single line, border-y, py 18px, overflow hidden
- Items mono 13px uppercase tracking 0.06em, separator `·` or `•`
- List (loop 2x): Framer · Design · Figma · Typography · Next.js · Balance · Node.js · Three.js · React · WebGL · 3D · JavaScript
- Animation: linear infinite 25s, pause on hover. Duplicate list for seamless loop.

### 5.4 Showreel
- Full-width card bg2 border radius 12-16px, aspect 16/9, centered label `Showreel` mono top-left, play circle 64px centered (white bg, black icon) on hover scale 1.05
- Placeholder: image or muted video with overlay 0.3

### 5.5 Services [02]
- Header: `Services [02]` mono label + 1px top border
- Grid 2 cols tablet / 3 cols desktop? Original is 2x3 (2 cols, 3 rows). Each item: border-t pt-24, title 24px 600, mono subtitle 11px muted uppercase mt-8
- Items:
  1. Web Design — UX/UI, design systems, prototypes.
  2. Web Development — Framer/Next.js, CMS, analytics.
  3. Brand Strategy — Create history and values.
  4. Visual Identity — Logo, visual system, guidelines.
  5. Motion & 3D — Animation, micro-interactions, launch visuals.
  6. Content & Art — Copy, photo, video.

### 5.6 Featured Works [03]
- Header row: Left `12` 72px 600 + `[VIEW ALL]` mono link, Right paragraph max-w 42ch fg2
- Stats row 3 cols border-y py-28: `+34% Conversion` / `+41% Sign-Ups` / `3.8× ROAS` — number 36px 600 + label 11px mono + desc 12px muted
- Projects grid 2x2 gap-24: Card image 4:3 radius 12px object-cover, bottom row: title 16px 600 + mono subtitle 11px muted, arrow link. Slugs: white-gate-hotel, fashionista, alta, lementa

### 5.7 How We Work [04]
- Header `How We Work [04]` + top border
- Grid 3 cols desktop / 2 cols tablet / 1 col mobile gap-32
- 6 steps each: mono `[001]` muted + H3 (Discover/Define/Design/Build/Launch/Improve) 20px 600 + paragraph 13px fg2 3 lines + mono badge `2–4 days` pill border 1px muted
- Durations: 001 2-4 days, 002 2-4 days, 003 1-2 weeks, 004 1-2 weeks, 005 2-4 days, 006 2-3 weeks
- Bottom: `Contact Manager` black pill button centered

### 5.8 Testimonials [05]
- Top marquee: `T E S T I M O N I A L S 200+ · Worldwide Clients` mono large 14px tracking 0.12em
- Grid 2x2 cards bg-card border p-28 radius 12px: quote 14px line 1.6 fg, bottom row avatar initials circle 36px bg-bg2 + name 13px 600 + role 12px muted
- Data: Maya Patel/Head of Growth,Finch Systems | Alex Chen/Founder,Nova AI | Leon Müller/COO,Helix Robotics | Dana Fox/VP Marketing,Orbit Labs
- Stats footer 2 cols centered border-t mt-32 pt-32: `93% Repeat Clients` + `100× Increased clients profits` (number 44px 600)

### 5.9 Before & After [06]
- Split 7/5 cols (stack mobile)
- Left: large image 1400x900 radius 12px 4:3
- Right: mono label `Brand transformation...` 11px, H2 `Lementa` 36px 600, tags `Website · Branding` mono pills border, paragraph 14px fg2, meta grid 3 cols mono 11px: `2025 / Fashion / UK, London`, button `View Project` black pill

### 5.10 Insights [07]
- Header `Insights [07]` + `[ALL POSTS]` mono link right
- Grid 3 cols gap-24: Card image 800x600 radius 12px aspect 4:3, mono date/category 11px muted, title 18px 600 line 1.2, excerpt 13px fg2 2 lines, `[READ MORE]` mono 11px link with underline offset
- Posts: Fresh Visual Trends in 2026 / Web Design in the Future / New Demensions in Marketing

### 5.11 FAQ [08]
- Header `FAQ [08]` + top border
- Accordion 7 items, each border-b. Q: 15px 500 py-20 flex justify-between, A: 14px fg2 pb-20 pr-32 line 1.6. Icon `+` 18px rotates 45deg when open. First open by default.
- Exact Q/A from mondragon.framer.website (copy verbatim)

### 5.12 Start a Project / Contact Form
- Split 6/6 cols bg-bg2 rounded 16px p-32-48
- Left: H2 `Start a Project` 36px 600 + `Tell to our manager...` fg2 + avatar row `Kate Wilington` 40px circle + role muted 12px
- Right: Form grid 2 cols: Name, Company (row), Email, Budget select (row), Message textarea rows 4 full-width col-span-2, checkbox `Before submitting, you agree to Terms and Privacy Policy.` 12px muted + links underline, Submit black pill full-width on mobile
- Inputs: h-46 border border-border bg-card radius 8px px-14 13px focus:border-fg outline-none

### 5.13 Footer
- 4-col grid border-t pt-40 pb-32
- Col1: MONDRAGON mono 14px + © 2025 12px muted
- Col2: Nav stack Agency/Projects/Blog/Contact 13px
- Col3: Address `27 Whitfield Yard, Shoreditch, London E2 7NX` + `+44 20 3999 1245` 13px
- Col4: Social `X / LinkedIn` + `Sabo Sugi` 12px muted
- Bottom bar border-t mt-32 pt-16 flex justify-between 11px mono muted: `View All Mondragon Templates | Free Remix | Create a free website with Framer`

## 6. Motion
- Page load: fade-up (y 12, opacity 0 → 1, 0.5s easeOut) stagger 0.06 per section via Framer Motion whileInView once
- Marquee: `animate-marquee` keyframes translateX 0 → -50% linear 25s infinite
- Hover: border-color 0.2s ease, image scale 1.02 on project cards 0.4s ease, button opacity 0.85
- Accordion: height auto + opacity 0.25s ease (AnimatePresence)
- Smooth scroll: `scroll-behavior: smooth` + offset for sticky nav

## 7. Responsive
- mobile <768: 1 col stack, H1 38px, section py 64px, nav hamburger
- tablet 768-1024: 2 cols for Services/Works/Testimonials
- desktop >1024: 12 col grid, full layout
- All grids use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` patterns as per spec

## 8. Assets — Replace These Only (Keep Structure Identical)
| Slot | File | Size |
|------|------|------|
| Hero avatar | /assets/avatar-kate.jpg | 200x200 |
| Showreel poster | /assets/showreel-poster.jpg | 1920x1080 |
| Project 1 | /assets/work-whitegate.jpg | 1200x900 |
| Project 2 | /assets/work-fashionista.jpg | 1200x900 |
| Project 3 | /assets/work-alta.jpg | 1200x900 |
| Project 4 | /assets/work-lementa.jpg | 1200x900 |
| Before/After | /assets/lementa-large.jpg | 1400x900 |
| Blog 1-3 | /assets/blog-1..3.jpg | 800x600 |
| Favicon | /assets/favicon.png | 32x32 |

## 9. Do / Don't
DO: Keep monochrome only, keep all 13 sections in order, keep copy verbatim until customization step, keep 1px borders everywhere.
DON'T: Add colors, gradients, shadows, rounded >16px, extra sections, or reorder.

## 10. Tailwind Config Snippet
```js
// tailwind.config.js — paste into extend
colors: { bg: "#FCFCF9", bg2: "#F2F2F0", card: "#FFFFFF", fg: "#0A0A0A", fg2: "#6B6B6B", muted: "#9A9A9A", border: "#E5E5E5" }
fontFamily: { display: ["Instrument Sans","Inter","sans-serif"], body: ["Inter","sans-serif"], mono: ["JetBrains Mono","monospace"] }
```

## 11. Verification Checklist
- [ ] All 13 sections present in order with correct [01]-[08] badges
- [ ] Marquees scroll infinitely without jump
- [ ] FAQ first item open, + rotates to ×
- [ ] Form validates email, shows toast on submit
- [ ] Mobile menu opens/closes, no horizontal scroll
- [ ] No colors outside palette
