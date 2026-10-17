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
      "VENQOR Studios is a professional digital development company. Our dedicated developer, testing, maintenance, and marketing teams build high-performance 3D websites, MERN platforms, and mobile apps with end-to-end support.",
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
    { label: "Founders", href: "/#founders" },
    { label: "Contact", href: "/#contact" },
  ],

  contact: {
    email: "contact@venqor.com",
    emailHref: "mailto:contact@venqor.com",
    phones: [
      { label: "Yojasvi Choudhary", value: "+91 70739 99605", href: "tel:+917073999605" },
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
      "VENQOR Studios is a full-service digital development company. Headed by Neil Verma (Head of Development) and Yojasvi Choudhary (Head of Marketing), our specialized developer, testing, maintenance, and marketing teams work as one unified unit \u2014 delivering enterprise-grade builds with agile ownership. ",
      "We build and maintain every digital solution: immersive 3D experiences, scalable web applications, robust e-commerce, and native mobile apps. Our dedicated development and QA testing teams build with precision, while our ongoing maintenance team ensures continuous uptime, speed, and feature growth after launch. ",
      "Every build is SEO-compatible by default: clean architecture, validated code, and high Core Web Vitals that Google and AI search reward. As a professional development provider, we turn complex technical requirements into high-converting products.",
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
        long: "Our 3D developer team crafts interactive websites that feel premium and keep people scrolling. From subtle depth and motion to full WebGL scenes, everything is rigorously tested by our QA team for fluid 60fps performance across all devices.",
        text: "Immersive 3D, WebGL, motion that converts.",
        image: `${A}/services/3d-interactive.svg`,
        align: "left",
      },
      {
        title: "Static & Dynamic Websites",
        long: "Static for speed, dynamic for flexibility, headless when you need to scale. Built by our web development team with modern architectures, verified by our testing team, and structured for easy management from day one.",
        text: "Fast, modern, headless-ready sites for any scale.",
        image: `${A}/services/static-dynamic.svg`,
        align: "center",
      },
      {
        title: "E-Commerce Platforms",
        long: "Full e-commerce builds with clean product systems, secure checkout, and seamless inventory. Our development team builds the store, and our maintenance team provides ongoing care, updates, and speed optimization as your sales scale.",
        text: "Stores that sell \u2014 and stay fast at scale.",
        image: `${A}/services/ecommerce.svg`,
        align: "right",
      },
      {
        title: "Portfolio Websites",
        long: "For founders, creators, artists, and enterprises who need to stand out. Our creative development and marketing teams craft portfolio sites that put your work first \u2014 clear storytelling, strong visuals, and SEO readiness that converts viewers into clients.",
        text: "Portfolios that make people remember you.",
        image: `${A}/services/portfolio.svg`,
        align: "center",
      },
      {
        title: "App Development",
        long: "Native-quality apps with Flutter and Swift. Our mobile development and QA testing teams build, test across devices, and publish to the App Store and Play Store, followed by dedicated post-launch support and maintenance.",
        text: "iOS & cross-platform apps, shipped to store.",
        image: `${A}/services/app-development.svg`,
        align: "left",
      },
      {
        title: "Launch, Scale & Care",
        long: "Complete lifecycle support by a professional development company. Our QA testing team verifies every release, our maintenance team manages continuous hosting and security, and our marketing team ensures organic search readiness for Google and AI search.",
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
        text: "Our strategy and leadership team clarifies your business goals, target audience, and technical scope. We align development, marketing, and architecture requirements before writing any code.",
      },
      {
        n: "[002]",
        title: "Define",
        text: "We turn goals into an actionable engineering roadmap, technical architecture, and milestones. Scope, testing standards, and sprint schedules are clearly documented.",
      },
      {
        n: "[003]",
        title: "Design",
        text: "We lock a modular design system \u2014 layout, typography, UI components, and 3D interactions. The development and marketing teams ensure every interaction is fast, accessible, and conversion-focused.",
      },
      {
        n: "[004]",
        title: "Build & Test",
        text: "Our developer team writes clean, modular code in MERN, Flutter, and Swift. Simultaneously, our QA testing team runs continuous multi-device verification, security audits, and performance checks.",
      },
      {
        n: "[005]",
        title: "Launch",
        text: "Our deployment team executes a comprehensive launch protocol: full QA sign-off, Core Web Vitals optimization, tracking, and security headers. We actively monitor the first 72 hours with dedicated live support.",
      },
      {
        n: "[006]",
        title: "Maintain & Grow",
        text: "Our dedicated maintenance team handles server monitoring, security patches, and updates, while our marketing team runs ongoing performance and SEO experiments to scale your digital reach.",
      },
    ],
    cta: "Talk to the Team",
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
        name: "Client — AI Platform, Landing Page",
        role: "Aset · AI Investment Platform · Framer",
        mark: `${A}/testimonials/mark-2.svg`,
        project: "Aset",
        initial: "A",
        site: "https://aset.framer.website/",
        preview: `${A}/works/aset-1.jpg`,
        year: "2025",
        quote:
          "VENQOR delivered an exceptionally sharp, high-converting landing page for Aset that perfectly articulates our AI investment thesis. The interactions are fluid, page loading is instantaneous, and investor response has been outstanding.",
      },
      {
        name: "Client — Portfolio Website",
        role: "Portfolio · 3D Website",
        mark: `${A}/testimonials/mark-3.svg`,
        project: "Portfolio client",
        initial: "P",
        site: "",
        preview: `${A}/testimonials/portfolio-preview.jpg`,
        year: "2025",
        quote:
          "From idea to live product, VENQOR handled design and build with clarity. The site is fast, visually stunning, and ready to scale — exactly what we needed to stand out and convert visitors into clients.",
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

  founders: {
    number: "[07]",
    label: "Founders & Leadership",
    tagline: "Executive leadership, specialized teams. From technical architecture and testing to full-scale market growth.",
    subtext:
      "VENQOR Studios combines strategic leadership with specialized developer, testing, maintenance, and marketing teams. Neil Verma heads engineering and technical execution; Yojasvi Choudhary heads marketing, brand strategy, and client operations. Direct leadership with complete team-backed delivery.",
    items: [
      {
        name: "Neil Verma",
        role: "Co-Founder \u2014 Head of Development",
        rolePill: "HEAD OF DEVELOPMENT",
        teamPill: "DEV & TESTING TEAMS",
        focus: "Head of Development \u00B7 Engineering & Testing",
        desc: "Directs our developer and QA testing teams across all digital platforms. Oversees full-stack MERN architecture, 3D WebGL experiences, mobile applications, and code verification for enterprise reliability.",
        image: `${A}/founders/neil-verma.png`,
        skills: ["Technical Architecture", "Developer Team", "Testing & QA", "Next.js & MERN", "WebGL & 3D", "Flutter & Swift"],
        phone: "+91 93066 28339",
        phoneHref: "tel:+919306628339",
        portfolio: "neilverma.world",
        portfolioHref: "https://www.neilverma.world/",
      },
      {
        name: "Yojasvi Choudhary",
        role: "Co-Founder \u2014 Head of Marketing",
        rolePill: "HEAD OF MARKETING",
        teamPill: "MARKETING & CARE TEAMS",
        focus: "Head of Marketing \u00B7 Growth & Operations",
        desc: "Directs our marketing, brand strategy, and client maintenance teams. Leads market positioning, performance marketing, SEO infrastructure, and long-term care operations to turn digital products into scalable brands.",
        image: `${A}/founders/yojasvi.png`,
        skills: ["Marketing Strategy", "Growth Marketing", "Brand Positioning", "Maintenance Team", "SEO Infrastructure", "Client Operations"],
        phone: "+91 70739 99605",
        phoneHref: "tel:+917073999605",
        portfolio: "Start a Project",
        portfolioHref: "#contact",
      },
    ],
  },

  faq: {
    label: "FAQ",
    number: "[08]",
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
        a: "Fixed scope, fixed price after discovery. As a professional development company, we provide transparent milestone-based proposals outlining engineering, QA testing, deployment, and ongoing maintenance phases so you know exactly what you\u2019re paying for.",
      },
      {
        q: "Do you handle deployment and maintenance?",
        a: "Yes. Our developer and dedicated maintenance teams handle everything through live deployment and provide long-term care contracts. That includes continuous uptime monitoring, security patches, performance tuning, and agile feature sprints.",
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
        a: "Absolutely. Our developer, testing, and marketing teams collaborate smoothly alongside in-house teams and brand partners. We align on guidelines, integrate with your existing workflows, and keep communication clear with weekly demos.",
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
