/**
 * All copy + asset paths for the page.
 * Single source of truth — every component reads from here.
 * Brand: VENQOR Studios (V-E-N-Q-O-R)
 * Assets live in /public/assets/** and keep their original aspect ratios.
 */

const A = "/assets";

export const SITE = {
  brand: "VENQOR Studios",
  shortBrand: "VENQOR",
  domain: "https://venqor.online",
  meta: {
    title: "VENQOR Studios \u2014 3D Websites & Apps That Grow Your Business",
    description:
      "VENQOR Studios builds 3D, high-performance websites and apps \u2014 static, dynamic, e-commerce, portfolios, and iOS apps with Flutter & Swift. SEO-ready for Google and AI search. From development to deployment and long-term care.",
    keywords: [
      "VENQOR Studios",
      "VENQOR",
      "3D websites",
      "MERN stack",
      "Next.js",
      "Flutter",
      "Swift",
      "iOS app development",
      "e-commerce",
      "Shopify",
      "portfolio websites",
      "SEO ready websites",
      "AI search",
      "WebGL",
      "Three.js",
    ],
  },
  logo: `${A}/brand/logo-m.svg`,
  wordmark: `${A}/brand/wordmark.svg`,

  nav: [
    { label: "Home", href: "/#home" },
    { label: "Studio", href: "/#agency" },
    { label: "Work", href: "/#projects" },
    { label: "Insights", href: "/#blog" },
    { label: "Contact", href: "/#contact" },
  ],

  contact: {
    email: "contact@venqor.com",
    emailHref: "mailto:contact@venqor.com",
    phones: [
      { label: "Yojasvi", value: "+91 70739 99605", href: "tel:+917073999605" },
      { label: "Neil Verma", value: "+91 93066 28339", href: "tel:+919306628339" },
    ],
    // Keep address as region line — no single street address public yet
    address: "India \u2014 working worldwide",
    addressHref: "https://maps.google.com/?q=India",
    phone: "+91 70739 99605",
    phoneHref: "tel:+917073999605",
    bookCallHref: "/#contact",
  },

  socials: [
    // Real profiles will be added later — keep placeholders hidden until then.
    // Do not link to generic dribbble.com / etc.
  ] as { label: string; href: string; icon: string }[],

  manager: {
    short: "VENQOR",
    first: "VENQOR",
    last: "Studios",
    fullName: "VENQOR Studios",
    role: "Talk to the Founders",
    video: `${A}/hero/manager.mp4`,
    videoPoster: `${A}/hero/manager-poster.jpg`,
    heroImage: `${A}/hero/manager.png`,
    contactImage: `${A}/contact/kate.png`,
    footerImage: `${A}/footer/kate.jpg`,
    ctaImage: `${A}/process/manager.png`,
  },

  hero: {
    tagline: "WE BUILD WEBSITES THAT MOVE \u2014 AND BUSINESSES THAT GROW",
    ribbon: [1, 2, 3, 4, 5].map((n) => `${A}/hero/ribbon-${n}.jpg`),
    dots: `${A}/hero/dots.svg`,
    bookTitle: ["Start", "a Project"] as [string, string],
    bookText: "Tell us your idea. We\u2019ll reply with scope, timeline, and next steps.",
    likedBy: ["Trusted by", "founders & brands"] as [string, string],
    founders: [1, 2, 3, 4].map((n) => `${A}/hero/founder-${n}.jpg`),
  },

  about: {
    number: "[01]",
    statement:
      "We build fast, 3D-ready websites and apps that make your business look premium \u2014 and rank higher on Google and AI search",
    more: "[MORE ABOUT US]",
    image: `${A}/about/about.jpg`,
    body: [
      "VENQOR Studios is a two-founder studio. Neil Verma leads development, Yojasvi leads marketing and operations. Backed by a small senior team, we ship together \u2014 every project has clear ownership and no hand-offs. ",
      "We build every kind of website \u2014 3D and interactive, static, dynamic, headless, e-commerce, and portfolios \u2014 plus iOS and cross-platform apps. From development to deployment and long-term maintenance, we stay on so large-scale projects keep getting better after launch. ",
      "Every build is SEO-compatible by default: clean code, fast pages, and structure that both Google and AI search can understand. We don\u2019t sell SEO \u2014 we build sites that are ready to rank.",
    ],
    stackTitle: "Our Stack",
    stack: [
      "Three.js",
      "WebGL",
      "React Three Fiber",
      "GSAP",
      "Framer Motion",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "MERN",
      "Flutter",
      "Swift",
      "Tailwind",
      "TypeScript",
      "JavaScript",
    ],
  },

  showreel: {
    glyphs: "\u25C6\u25C7\u27E1",
    title: "Showreel",
    imageA: `${A}/showreel/morph-1.jpg`,
    imageB: `${A}/showreel/morph-2.jpg`,
    vimeoId: "",
  },

  services: {
    label: "Services",
    number: "[02]",
    items: [
      {
        title: "3D & Interactive Websites",
        long: "We build 3D and interactive websites that feel premium and keep people scrolling. From subtle depth and motion to full WebGL scenes, everything is fast, responsive, and built to guide visitors toward action. Delivered with clean components and handover docs.",
        text: "Immersive 3D, WebGL, motion that converts.",
        image: `${A}/services/3d-interactive.svg`,
        align: "left",
      },
      {
        title: "Static & Dynamic Websites",
        long: "Static for speed, dynamic for flexibility, headless when you need to scale. We build sites that load fast, read well on every device, and are easy for your team to update. CMS, analytics, and forms included from day one.",
        text: "Fast, modern, headless-ready sites for any scale.",
        image: `${A}/services/static-dynamic.svg`,
        align: "center",
      },
      {
        title: "E-Commerce Platforms",
        long: "Full e-commerce builds with clean product systems, fast checkout, and inventory that just works. We handle catalog, payments, and integrations, and we stay on for maintenance so the store keeps growing after launch.",
        text: "Stores that sell \u2014 and stay fast at scale.",
        image: `${A}/services/ecommerce.svg`,
        align: "right",
      },
      {
        title: "Portfolio Websites",
        long: "For founders, creators, artists, and professionals who need to stand out. We craft portfolio sites that put your work first \u2014 clear story, strong visuals, and a structure that turns viewers into enquiries. 15+ portfolios shipped for well-known names.",
        text: "Portfolios that make people remember you.",
        image: `${A}/services/portfolio.svg`,
        align: "center",
      },
      {
        title: "App Development",
        long: "Native-quality apps with Flutter and Swift \u2014 one codebase where it makes sense, native where it matters. We design, build, test, and publish to the App Store and Play Store, then maintain and iterate with you.",
        text: "iOS & cross-platform apps, shipped to store.",
        image: `${A}/services/app-development.svg`,
        align: "left",
      },
      {
        title: "Launch, Scale & Care",
        long: "We take you from idea to live \u2014 build, QA, deploy, monitor \u2014 and stay on for large-scale maintenance. Every site is SEO-compatible by default: clean semantics, structured data, and performance that helps you rank on Google and AI search. We build the foundation; you own the growth.",
        text: "From development to deployment \u2014 and long after.",
        image: `${A}/services/launch-care.svg`,
        align: "center",
      },
    ] as const,
  },

  works: {
    number: "[03]",
    label: "Featured Work",
    count: "05",
    viewAll: "[VIEW ALL]",
    intro:
      "Real projects, real outcomes. Every build shows the brief, the system we created, and the impact \u2014 problem \u2192 approach \u2192 result. Explore live sites across e-commerce, portfolios, and business websites.",
    metrics: [
      { value: "25+", label: "Websites Delivered", text: "Websites shipped across industries and countries." },
      { value: "15+", label: "Portfolios Built", text: "Portfolios for founders, creators, and well-known names." },
      { value: "5+", label: "Stores Under Care", text: "E-commerce stores live with ongoing maintenance and growth." },
    ],
    projects: [
      {
        slug: "morpho-water",
        title: "MORPHO, Natural Spring Water",
        href: "https://morphowater.com/",
        tags: ["E-Commerce", "Brand Website"],
        images: [`${A}/works/morpho-1.jpg`, `${A}/works/morpho-2.jpg`],
        ratio: 900 / 1440,
      },
      {
        slug: "aset",
        title: "Aset — AI Investment Platform",
        href: "https://aset.framer.website/",
        tags: ["Framer", "Landing Page"],
        images: [`${A}/works/aset-1.jpg`, `${A}/works/aset-2.jpg`],
        ratio: 900 / 1440,
      },
      {
        slug: "neil-verma",
        title: "Neil Verma — Developer Portfolio",
        href: "https://www.neilverma.world/",
        tags: ["Portfolio", "3D Website"],
        images: [`${A}/works/neilverma-1.jpg`, `${A}/works/neilverma-2.jpg`],
        ratio: 900 / 1440,
      },
      {
        slug: "nath-paint-house",
        title: "Nath Paint House",
        href: "https://nath-paint-house.vercel.app/",
        tags: ["Business Website", "Dynamic"],
        images: [`${A}/works/nath-1.jpg`, `${A}/works/nath-2.jpg`],
        ratio: 900 / 1440,
      },
      {
        slug: "little-luxe-hamper",
        title: "Little Luxe Hamper",
        href: "https://little-luxe-hamper.vercel.app/",
        tags: ["E-Commerce", "Gifting"],
        images: [`${A}/works/littleluxe-1.jpg`, `${A}/works/littleluxe-2.jpg`],
        ratio: 900 / 1440,
      },
    ],
  },

  process: {
    label: "How We Work",
    number: "[04]",
    rotor: [1, 2, 3, 4].map((n) => `${A}/process/rotor-${n}.jpg`),
    steps: [
      {
        n: "[001]",
        title: "Discover",
        time: "2\u20134 days",
        text: "We get clear on your goals, audience, and constraints. We look at what\u2019s live, what\u2019s working, and what\u2019s blocking growth \u2014 so we agree on what success looks like before we design anything.",
      },
      {
        n: "[002]",
        title: "Define",
        time: "2\u20134 days",
        text: "We turn goals into a clear scope, timeline, and measurable outcomes. Roadmap, responsibilities, and what we\u2019ll track \u2014 all written down so there are no surprises.",
      },
      {
        n: "[003]",
        title: "Design",
        time: "1\u20132 weeks",
        text: "We explore directions, then lock a modular design system \u2014 layout, type, motion, and 3D where it adds value. Content structure and accessibility are specified so build is predictable.",
      },
      {
        n: "[004]",
        title: "Build",
        time: "1\u20132 weeks",
        text: "We build fast, maintainable products \u2014 MERN for web, Flutter and Swift for apps \u2014 with CMS, payments, and analytics from day one. Performance budgets and QA run continuously.",
      },
      {
        n: "[005]",
        title: "Launch",
        time: "2\u20134 days",
        text: "We ship with a checklist: QA, Core Web Vitals, redirects, tracking, and security. We watch the first 72 hours closely and fix fast. Your team gets editing training and docs.",
      },
      {
        n: "[006]",
        title: "Improve",
        time: "2\u20133 weeks",
        text: "We improve in focused sprints \u2014 experiments, content, and performance \u2014 driven by real data. Small releases, steady growth, and ongoing care for large-scale products.",
      },
    ],
    cta: "Talk to the Founders",
    ctaImages: { phone: `${A}/process/phone.png`, email: `${A}/process/email.png`, manager: `${A}/process/manager.png` },
  },

  testimonials: {
    number: "[05]",
    curved: "TESTIMONIALS",
    imageTop: `${A}/testimonials/top.jpg`,
    imageBottom: `${A}/testimonials/bottom.jpg`,
    clients: { value: "25+", label: "Websites Delivered" },
    // Floating review sphere — short lines lifted from the client quotes below
    reviewsTitle: "What clients say",
    reviews: [
      "“Feels premium”",
      "“Loads quickly”",
      "“Decisions documented”",
      "“Payments just work”",
      "“Stayed on after launch”",
      "“Ready to scale”",
      "“Done on time”",
      "“Effortless to update”",
      "“Clear story”",
      "“Simple, fast shopping”",
      "“Easy to use”",
      "“Direct communication”",
    ],
    marks: [1, 2, 3, 4].map((n) => `${A}/testimonials/mark-${n}.svg`),
    wordmarks: [
      { src: `${A}/testimonials/wordmark-1.svg`, w: 130 },
      { src: `${A}/testimonials/wordmark-2.svg`, w: 106 },
      { src: `${A}/testimonials/wordmark-3.svg`, w: 122 },
      { src: `${A}/testimonials/wordmark-4.svg`, w: 118 },
    ],
    stats: [
      { value: "15+", label: "Portfolios for well-known names" },
      { value: "5+", label: "E-Commerce stores under care" },
    ],
    items: [
      {
        name: "Client \u2014 E-Commerce, Brand Website",
        role: "MORPHO Water \u00B7 E-Commerce \u00B7 Ongoing Growth",
        mark: `${A}/testimonials/mark-1.svg`,
        project: "MORPHO",
        initial: "M",
        site: "https://morphowater.com/",
        preview: `${A}/works/morpho-1.jpg`,
        year: "2025",
        quote:
          "VENQOR built a clean, fast brand store that actually feels premium. The site loads quickly, tells the story clearly, and keeps customers moving toward checkout. Communication was direct and every decision was documented.",
      },
      {
        name: "Client \u2014 E-Commerce, Shopify",
        role: "DT VR Universe \u00B7 E-Commerce \u00B7 Shopify",
        mark: `${A}/testimonials/mark-2.svg`,
        project: "DT VR Universe",
        initial: "D",
        site: "",
        preview: `${A}/services/ecommerce.svg`,
        year: "2025",
        quote:
          "They turned a complex product catalog into a simple, fast shopping experience. Setup, payments, and integrations just work \u2014 and the team stayed on after launch to keep improving.",
      },
      {
        name: "Client \u2014 Portfolio Website",
        role: "Portfolio \u00B7 3D Website",
        mark: `${A}/testimonials/mark-3.svg`,
        project: "Portfolio client",
        initial: "P",
        site: "",
        preview: `${A}/services/portfolio.svg`,
        year: "2025",
        quote:
          "From idea to live product, VENQOR handled design and build with clarity. The app is fast, easy to use, and ready to scale \u2014 exactly what we needed to show the product to real users quickly.",
      },
      {
        name: "Client \u2014 Business Website",
        role: "Nath Paint House \u00B7 Business Website \u00B7 Dynamic",
        mark: `${A}/testimonials/mark-4.svg`,
        project: "Nath Paint House",
        initial: "N",
        site: "https://nath-paint-house.vercel.app/",
        preview: `${A}/works/nath-1.jpg`,
        year: "2025",
        quote:
          "Our business website finally does its job \u2014 clear services, easy contact, and a structure our customers understand. The build was on time and the site is effortless to update.",
      },
    ],
  },

  insights: {
    number: "[06]",
    label: "Insights",
    all: "[ALL POSTS]",
    allHref: "/blog",
    readMore: "[READ MORE]",
    posts: [
      {
        title: "Why 3D Websites Convert Better in 2026",
        text: "Subtle depth, motion, and WebGL aren\u2019t just eye candy \u2014 they guide attention and build trust. Here\u2019s when 3D helps conversion and when it hurts performance, with a simple checklist.",
        image: `${A}/insights/post-1.svg`,
        href: "/blog/why-3d-websites-convert",
      },
      {
        title: "Static vs Dynamic vs Headless: What Do You Actually Need?",
        text: "Not every business needs a complex stack. We break down static, dynamic, and headless in plain language \u2014 cost, speed, scale, and who each is best for.",
        image: `${A}/insights/post-2.svg`,
        href: "/blog/static-vs-dynamic-vs-headless",
      },
      {
        title: "Make Your Website AI-Search Ready",
        text: "Google and AI search now answer before they send clicks. Learn how clean semantics, structured data, and fast pages make your site understandable \u2014 without buying an SEO package.",
        image: `${A}/insights/post-3.svg`,
        href: "/blog/ai-search-ready-website",
      },
    ],
  },

  faq: {
    label: "FAQ",
    number: "[07]",
    items: [
      {
        q: "What do you build?",
        a: "We build every kind of website \u2014 3D and interactive, static, dynamic, headless, e-commerce, and portfolios \u2014 plus iOS and cross-platform apps with Flutter and Swift. If it lives on the web or in the App Store, we can build it.",
      },
      {
        q: "What\u2019s the typical timeline?",
        a: "A portfolio or static site: 2\u20134 weeks. A dynamic or e-commerce platform: 6\u201312 weeks. A large-scale app or marketplace: 3\u20136 months. We share a clear schedule with milestones before we start, and we ship in small, testable increments.",
      },
      {
        q: "How do you price?",
        a: "Fixed scope, fixed price after discovery. We don\u2019t do one-size-fits-all packages. After a short call, we send a proposal with scope, timeline, and cost broken down by phase so you know exactly what you\u2019re paying for.",
      },
      {
        q: "Do you handle deployment and maintenance?",
        a: "Yes. We handle development through deployment and stay on for long-term maintenance \u2014 especially for large-scale projects. That includes updates, performance, security, and small feature sprints so your product keeps improving.",
      },
      {
        q: "Are your websites SEO-compatible?",
        a: "Every site we build is SEO-compatible by default \u2014 clean semantics, fast Core Web Vitals, structured data, and sitemaps that both Google and AI search can read. We don\u2019t sell SEO as a service, but we build the foundation so you can rank higher.",
      },
      {
        q: "What tech stack do you use?",
        a: "Web: MERN \u2014 MongoDB, Express, React, Next.js \u2014 plus Three.js, WebGL, React Three Fiber, GSAP, and Framer Motion for 3D and motion. Apps: Flutter for cross-platform and Swift for native iOS. Design is done in Figma.",
      },
      {
        q: "Can you work with our existing team or brand?",
        a: "Absolutely. We often work alongside in-house teams and brand partners. We align on guidelines, share a design system in Figma, and keep communication in one place with weekly demos.",
      },
    ],
  },

  startProject: {
    title: ["Start", "a Project"] as [string, string],
    text: ["Tell us your idea and goals.", "We\u2019ll reply with scope and timeline."] as [string, string],
    fields: { name: "Your Name", email: "Your Email", message: "Tell us about your project" },
    placeholders: {
      name: "Your name",
      email: "email@company.com",
      message: "What do you want to build? Budget and timeline help us reply faster.",
    },
    submit: "Send Message",
    sent: "Thank you \u2014 we\u2019ll be in touch within 24 hours.",
    termsHref: "/terms",
    privacyHref: "/privacy",
  },

  footer: {
    tagline: "VENQOR Studios \u2014 Websites & Apps That Grow Your Business",
    newsletterTitle: "Get notes on 3D, web, and growth",
    newsletterText: "Short, practical notes on building websites and apps that perform \u2014 no spam.",
    emailLabel: "Your Email",
    emailPlaceholder: "email@company.com",
    subscribe: "Subscribe",
    subscribed: "You\u2019re in!",
    follow: "Follow Us",
    helix: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${A}/footer/helix-${n}.jpg`),
    copyright: `\u00A9 ${new Date().getFullYear()} VENQOR Studios. All Rights Reserved.`,
    designedBy: null as { label: string; name: string; href: string; avatar: string } | null,
  },
};

export type Site = typeof SITE;
