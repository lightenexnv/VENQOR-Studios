/**
 * All copy + asset paths for the page.
 * This is the only file you need to touch to rebrand (MONDRAGON → VENQOR, etc.).
 * Assets live in /public/assets/** and keep their original aspect ratios.
 */

const A = "/assets";

export const SITE = {
  brand: "Mondragon",
  meta: {
    title: "Mondragon — Digital Creative Agency",
    description:
      "From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results.",
  },
  logo: `${A}/brand/logo-m.svg`,
  wordmark: `${A}/brand/wordmark.svg`,

  nav: [
    { label: "Home", href: "#home" },
    { label: "Agency", href: "#agency" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],

  contact: {
    address: "27 Whitfield Yard, Shoreditch, London E2 7NX",
    addressHref: "https://maps.google.com/?q=27+Whitfield+Yard+Shoreditch+London+E2+7NX",
    phone: "+44 20 3999 1245",
    phoneHref: "tel:+442039991245",
    bookCallHref: "#contact",
  },

  socials: [
    { label: "Dribbble", href: "https://dribbble.com", icon: `${A}/footer/icon-1.svg` },
    { label: "X", href: "https://x.com", icon: `${A}/footer/icon-2.svg` },
    { label: "Behance", href: "https://behance.net", icon: `${A}/footer/icon-3.svg` },
    { label: "Instagram", href: "https://instagram.com", icon: `${A}/footer/icon-4.svg` },
  ],

  manager: {
    short: "Kate W.",
    first: "Kate",
    last: "Wilington",
    video: `${A}/hero/manager.mp4`,
    videoPoster: `${A}/hero/manager-poster.jpg`,
    heroImage: `${A}/hero/manager.png`,
    contactImage: `${A}/contact/kate.png`,
    footerImage: `${A}/footer/kate.jpg`,
    ctaImage: `${A}/process/manager.png`,
  },

  hero: {
    tagline: "DIGITAL CREATIVE AGENCY",
    ribbon: [1, 2, 3, 4, 5].map((n) => `${A}/hero/ribbon-${n}.jpg`),
    dots: `${A}/hero/dots.svg`,
    bookTitle: ["Start", "a Project"],
    bookText: "Let's book & talk with our manager.",
    likedBy: ["Liked by", "50+ founders"],
    founders: [1, 2, 3, 4].map((n) => `${A}/hero/founder-${n}.jpg`),
  },

  about: {
    number: "[01]",
    statement:
      "From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results",
    more: "[MORE ABOUT]",
    image: `${A}/about/about.jpg`,
    body: [
      "We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. ",
      "The team is small and senior; every project has a lead for strategy, design and build. ",
      "We partner long-term, iterating with data to keep products fast.",
    ],
    stackTitle: "Our Stack",
    stack: ["Framer", "Design", "Figma", "Typography", "Next.js", "Balance", "Node.js", "Three.js", "React", "WebGL", "3D", "JavaScript"],
  },

  showreel: {
    glyphs: "⧖⧎⟡",
    title: "Showreel",
    imageA: `${A}/showreel/morph-1.jpg`,
    imageB: `${A}/showreel/morph-2.jpg`,
    vimeoId: "642263700",
  },

  services: {
    label: "Services",
    number: "[02]",
    items: [
      { title: "Web Design", long: "We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates.", text: "UX/UI, design systems, prototypes.", image: `${A}/services/web-design.jpg`, align: "left" },
      { title: "Web Development", long: "We build fast, maintainable sites in Framer/Next.js with clean CMS models. Core Web Vitals are monitored from day one. Integrations cover analytics, forms, payments, and automations. Deliverables: component library, CMS setup, environments, and docs.", text: "Framer/Next.js, CMS, analytics.", image: `${A}/services/web-development.jpg`, align: "center" },
      { title: "Brand Strategy", long: "We define positioning, audience, and proof points that set direction. Messaging architecture aligns homepage, product, and campaigns. Differentiation is tested against competitors and constraints. Deliverables: strategy brief, voice guide, and KPI map.", text: "Create history and values.", image: `${A}/services/brand-strategy.jpg`, align: "right" },
      { title: "Visual Identity", long: "We create a scalable system: logo suite, type, color, grid, and iconography. Rules work in light/dark and across web, product, and print. Motion and imagery guidelines keep the brand consistent. Deliverables: guidelines, Figma library, and ready-to-use templates.", text: "Logo, visual system, guidelines.", image: `${A}/services/visual-identity.jpg`, align: "center" },
      { title: "Motion & 3D", long: "We add purposeful motion and lightweight 3D for clarity and impact. Animations use transform/opacity and respect reduced motion. 3D assets are optimized for web and exported as reusable components. Deliverables: motion specs, Lottie/MP4/WebGL assets, and usage rules.", text: "Animation, micro-interactions, launch visuals.", image: `${A}/services/motion-3d.jpg`, align: "left" },
      { title: "Content & Art", long: "We shape the story with concise copy and consistent visuals. Photo/video direction covers style, framing, and color treatment. Editorial workflow keeps content accurate and easy to update. Deliverables: copy deck, asset pack, shoot guidelines, and CMS fields.", text: "Copy, photo, video.", image: `${A}/services/content-art.jpg`, align: "center" },
    ] as const,
  },

  works: {
    number: "[03]",
    label: "Featured Works",
    count: "12",
    viewAll: "[VIEW ALL]",
    intro:
      "Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result. Every case lists scope, timeline, stack and KPI movement with before and after.",
    metrics: [
      { value: "+34%", label: "Conversion", text: "Uplift after redesign and new funnel (90 days)." },
      { value: "+41%", label: "Sign-Ups", text: "Increase in registrations from organic/paid." },
      { value: "3.8×", label: "ROAS", text: "Return on ad spend for campaign N." },
    ],
    // ratio = image height / width as laid out in the reference grid
    projects: [
      { slug: "white-gate-hotel", title: "White Gate Hotel", tags: ["Website", "Content", "Mobile App"], images: [`${A}/works/white-gate-1.jpg`, `${A}/works/white-gate-2.jpg`], ratio: 265 / 396 },
      { slug: "alta-group", title: "Alta Group", tags: ["Branding", "Content"], images: [`${A}/works/alta-1.jpg`, `${A}/works/alta-2.jpg`], ratio: 528 / 396 },
      { slug: "fashionista", title: "Fashionista", tags: ["Content", "Branding", "SEO"], images: [`${A}/works/fashionista-1.jpg`, `${A}/works/fashionista-2.jpg`], ratio: 528 / 396 },
      { slug: "lementa", title: "Lementa", tags: ["Website", "Branding"], images: [`${A}/works/lementa-1.jpg`, `${A}/works/lementa-2.jpg`], ratio: 327 / 396 },
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
        time: "2–4 days",
        text: "We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.",
      },
      {
        n: "[002]",
        title: "Define",
        time: "2–4 days",
        text: "We translate goals into scope, timeline, and KPIs. We draft the roadmap, responsibilities, and the measurement plan so every step is testable.  Trade-offs are explicit and documented.",
      },
      {
        n: "[003]",
        title: "Design",
        time: "1–2 weeks",
        text: "We explore concepts, then systematize into a modular UI and brand toolkit. Content structure, accessibility, and motion are specified so the build phase is predictable. Iterations are time-boxed with weekly reviews.",
      },
      {
        n: "[004]",
        title: "Build",
        time: "1–2 weeks",
        text: "We implement production-ready components, CMS schemas and integrations. Performance budgets guide choices; QA runs continuously across devices. Analytics and events are instrumented from day one.",
      },
      {
        n: "[005]",
        title: "Launch",
        time: "2–4 days",
        text: "We ship behind a checklist: QA, Core Web Vitals, redirects, tracking, and security. We monitor the first 72 hours and fix issues fast. Your team gets a short handover and edit training.",
      },
      {
        n: "[006]",
        title: "Improve",
        time: "2–3 weeks",
        text: "We run experiments against KPIs and maintain in focused sprints. Insights feed the backlog; releases are small and frequent to keep momentum.",
      },
    ],
    cta: "Contact Manager",
    ctaImages: { phone: `${A}/process/phone.png`, email: `${A}/process/email.png`, manager: `${A}/process/manager.png` },
  },

  testimonials: {
    number: "[05]",
    curved: "TESTIMONIALS",
    imageTop: `${A}/testimonials/top.jpg`,
    imageBottom: `${A}/testimonials/bottom.jpg`,
    clients: { value: "200+", label: "Worldwide  Clients" },
    marks: [1, 2, 3, 4].map((n) => `${A}/testimonials/mark-${n}.svg`),
    wordmarks: [
      { src: `${A}/testimonials/wordmark-1.svg`, w: 130 },
      { src: `${A}/testimonials/wordmark-2.svg`, w: 106 },
      { src: `${A}/testimonials/wordmark-3.svg`, w: 122 },
      { src: `${A}/testimonials/wordmark-4.svg`, w: 118 },
    ],
    stats: [
      { value: "93%", label: "Repeat Clients" },
      { value: "100×", label: "Increased clients profits" },
    ],
    items: [
      {
        name: "Maya Patel",
        role: "Head of Growth, Finch Systems",
        mark: `${A}/testimonials/mark-3.svg`,
        quote:
          "From day one they spoke in outcomes, not art. We got a design system, content guidelines, and a build that measured what mattered. Sales calls now start with \"we loved your site\" and our CAC is trending down.",
      },
      {
        name: "Alex Chen",
        role: "Founder, Nova AI",
        mark: `${A}/testimonials/mark-1.svg`,
        quote:
          "The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics – nothing was an afterthought. I like team.",
      },
      {
        name: "Leon Müller",
        role: "COO, Helix Robotics",
        mark: `${A}/testimonials/mark-4.svg`,
        quote:
          "Clear process, crisp communication, and zero drama. Weekly demos kept us aligned, and every decision was documented. Post-launch we saw faster pages, lower bounce, and a brand narrative our team finally rallies behind.",
      },
      {
        name: "Dana Fox",
        role: "VP Marketing, Orbit Labs",
        mark: `${A}/testimonials/mark-2.svg`,
        quote:
          "They brought structure to chaos.  The brief became a clear roadmap, the brand finally had a voice, and the site loaded fast on every device. We launched on schedule and saw meaningful lift in sign-ups within weeks.",
      },
    ],
  },

  caseStudy: {
    title: "Before & After",
    number: "[06]",
    heading: "Brand transformation end to end: positioning → identity → web",
    name: "Lementa",
    href: "#projects",
    tags: ["Website", "Branding"],
    text: "Lementa’s brand was rebuilt end to end: clearer positioning, a modular visual identity, and a streamlined e-commerce UX with faster pages and AA accessibility. Unified content (photo, copy, size/fit notes) and optimized checkout drive conversion and repeat purchase — cleaner story, smoother shopping, better results.",
    info: [
      { value: "2025", label: "Year" },
      { value: "Fashion", label: "Industry" },
      { value: "UK, London", label: "Client Location" },
    ],
    before: `${A}/case/lementa-a.jpg`,
    after: `${A}/case/lementa-b.jpg`,
    logo: `${A}/case/lementa-logo.svg`,
    cta: "View Project",
  },

  insights: {
    number: "[07]",
    label: "Insights",
    all: "[ALL POSTS]",
    readMore: "[READ MORE]",
    posts: [
      {
        title: "Fresh Visual Trends in 2026",
        text: "In 2026, calm, systemic visuals dominate: strict grids, duo-palettes, mono-typography, and micromotion as feedback. Subtle 3D gradients, material textures.",
        image: `${A}/insights/post-1.jpg`,
        href: "#blog",
      },
      {
        title: "Web Design in the Future",
        text: "Web design has always reflected the technology of its time. In the early days, static pages dominated. Then came dynamic sites, mobile responsiveness, and immersive visuals.",
        image: `${A}/insights/post-2.jpg`,
        href: "#blog",
      },
      {
        title: "New Demensions in Marketing",
        text: "Marketing is shifting from channel-first to system-first. Data, models, and context reshape how brands find, speak to, and retain customers. Below is a compact playbook.",
        image: `${A}/insights/post-3.jpg`,
        href: "#blog",
      },
    ],
  },

  faq: {
    label: "FAQ",
    number: "[08]",
    items: [
      {
        q: "What’s the typical timeline?",
        a: "Every project is unique, so timelines can vary. A simple landing page might take 2-4 weeks, while a comprehensive corporate website could take 8-12 weeks. An e-commerce platform or a custom web application with complex features could take 3-6 months or more. The final timeline depends on the project's scope, complexity, and how quickly we receive feedback and content. We always provide a detailed project schedule with key milestones before we begin.",
      },
      {
        q: "How do you price?",
        a: "Our pricing is tailored to the specific needs of each project. We don't offer one-size-fits-all packages because we believe in providing custom solutions that deliver real value. After our initial discovery call, we'll provide a detailed proposal with a full breakdown of the costs, scope of work, and timeline. Key factors that influence the price include project complexity, the number of unique page designs, custom features, and third-party integrations.",
      },
      {
        q: "Do you develop in-house?",
        a: "Yes, our entire core team of designers, developers, and project managers is in-house. This ensures seamless communication, a cohesive workflow, and complete quality control over every aspect of your project. By working together under one roof, we can collaborate efficiently to bring your vision to life and respond quickly to any challenges that may arise.",
      },
      {
        q: "Can you work with our brand team?",
        a: "Absolutely. We view ourselves as an extension of your team and welcome collaboration with your in-house brand or marketing departments. We can work closely with them to ensure the final website is a perfect digital representation of your brand identity, adhering to all guidelines and amplifying your marketing efforts. Great things happen when our teams collaborate.",
      },
      {
        q: "What do you need to start?",
        a: "To get started, the best first step is a discovery call where we can discuss your goals, target audience, and vision. Ideally, you would have a project brief, any existing brand guidelines, and an idea of the content you want to include. But don't worry if you don't have everything figured out—we can help you define the project scope and strategy during our initial workshops.",
      },
      {
        q: "Do you support after launch?",
        a: "Yes, we believe in building long-term partnerships. After your website goes live, we offer a range of ongoing support and maintenance packages to ensure it remains secure, fast, and up-to-date. Our services include technical support, security monitoring, regular backups, and retainers for content updates or new feature development.",
      },
      {
        q: "How do we measure success?",
        a: "Success is measured against the goals we define together at the start of the project. We focus on tangible Key Performance Indicators (KPIs) that matter to your business. This could include metrics like conversion rates, lead generation, user engagement, bounce rate, or online sales. We integrate analytics tools like Google Analytics to track performance and provide you with regular reports, ensuring your new website delivers a measurable return on investment.",
      },
    ],
  },

  startProject: {
    title: ["Start", "a Project"],
    text: ["Tell to our manager about the goal.", "We’ll reply with scope and timeline."],
    fields: { name: "Your Name", email: "Your Email", message: "Message" },
    placeholders: { name: "Michael Johnson", email: "email@company.com", message: "Your Message" },
    submit: "Send Message",
    sent: "Thank you! We’ll be in touch.",
    termsHref: "#terms",
    privacyHref: "#privacy",
  },

  footer: {
    tagline: "Digital Creative Agency",
    newsletterTitle: "Subscribe to Newsletter",
    newsletterText: "Practical notes about brands, industry and performance growth.",
    emailLabel: "Your Email",
    emailPlaceholder: "email@company.com",
    subscribe: "Subscribe",
    subscribed: "Subscribed!",
    follow: "Follow Us",
    helix: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `${A}/footer/helix-${n}.jpg`),
    copyright: "© Mondragon Agency. All Rights Reserved.",
    designedBy: { label: "Designed by", name: "Sabo Sugi", href: "https://framer.com/@sabo-sugi", avatar: `${A}/footer/designer.jpg` },
  },
};

export type Site = typeof SITE;
