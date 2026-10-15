/**
 * Insights articles. Written in a "teacher" voice: start from an everyday analogy,
 * build the idea step by step, then check understanding with a short quiz + takeaways.
 * Block types render in app/blog/[slug]/page.tsx.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "callout"; label: string; text: string }
  | { type: "compare"; columns: { title: string; points: string[] }[] }
  | { type: "quiz"; items: { q: string; a: string }[] }
  | { type: "takeaways"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  lesson: string;
  body: Block[];
};

const A = "/assets";

export const POSTS: Post[] = [
  {
    slug: "why-3d-websites-convert",
    title: "Why 3D Websites Convert Better in 2026",
    excerpt:
      "Subtle depth, motion, and WebGL aren’t just eye candy — they guide attention and build trust. Here’s when 3D helps conversion and when it hurts performance, with a simple checklist.",
    image: `${A}/insights/post-1.svg`,
    category: "3D & Motion",
    readTime: "7 min read",
    lesson: "Lesson 01",
    body: [
      { type: "h2", text: "Start with a shop window" },
      {
        type: "p",
        text: "Picture two shops on the same street. One has a flat printed poster in the window. The other has a slowly turning product on a lit stand. Most people glance at the poster — but they stop at the turning product. That pause is the whole point. On the web, a well-placed 3D object or a bit of depth does the same job: it earns a second look, and a second look is where interest starts.",
      },
      {
        type: "p",
        text: "So the honest answer to “do 3D websites convert better?” is: they can — when the 3D is doing a job. Let’s learn what that job is, and when it backfires.",
      },
      { type: "h2", text: "The three jobs 3D can do" },
      {
        type: "steps",
        items: [
          { title: "Direct attention", text: "Movement and depth pull the eye. Use that pull to point at the one thing you want people to notice first — your product, your headline, or your call to action." },
          { title: "Explain the product", text: "A rotating model shows shape, material, and scale faster than a paragraph. If customers ask “what does it look like from the side?”, 3D answers before they ask." },
          { title: "Signal quality", text: "Smooth, polished motion tells visitors the brand cares about detail. People quietly transfer that impression to the product itself — that’s trust." },
        ],
      },
      { type: "callout", label: "Teacher’s note", text: "If you can’t name which of these three jobs a 3D element is doing, it’s decoration. Decoration costs loading time and gives nothing back." },
      { type: "h2", text: "When 3D hurts instead of helps" },
      {
        type: "p",
        text: "Think of 3D like a heavy suitcase. It’s worth carrying if it holds what you need for the trip. It’s a burden if it’s full of things you never use. On a website, the “weight” is file size and processing power — and a slow page loses people before they ever see the clever animation.",
      },
      {
        type: "list",
        items: [
          "The page takes noticeably longer to show its main content because a 3D scene is loading first.",
          "The animation fights the text — visitors can’t read the headline because something is spinning behind it.",
          "Phones get hot or scrolling stutters, because the scene was built only with a desktop in mind.",
          "Nothing happens when motion is reduced — people who turned on “reduce motion” in their settings get a broken or empty section.",
        ],
      },
      { type: "h2", text: "A simple checklist before you add 3D" },
      {
        type: "steps",
        items: [
          { title: "Content first", text: "The headline and the main button should appear immediately. Load the 3D after, so the page is useful even while it is still loading." },
          { title: "One hero moment", text: "Pick one place for a big 3D moment. Everywhere else, use light touches: subtle depth, gentle parallax, small hover effects." },
          { title: "Budget the weight", text: "Compress models and textures, and only animate while the section is on screen. Pause it when it scrolls away." },
          { title: "Respect reduced motion", text: "If a visitor asked their device for less motion, show a calm still version instead." },
          { title: "Test on a real phone", text: "Not just the browser’s phone preview. Real hardware tells you about heat, battery, and stutter." },
        ],
      },
      { type: "h2", text: "How to know it worked" },
      {
        type: "p",
        text: "Don’t judge 3D by “it looks cool.” Judge it the way a teacher grades homework: against the goal. Compare how far people scroll, how long they stay on the section, and — most importantly — how many click the button that matters. If those move in the right direction, the 3D is earning its place.",
      },
      {
        type: "quiz",
        items: [
          { q: "A spinning logo sits behind your headline and makes it hard to read. Is it helping?", a: "No — it competes with the message instead of directing attention to it. Move it, slow it, or remove it." },
          { q: "Your 3D scene loads before the page text appears. What should change?", a: "Load the text and button first, then bring the 3D in. The page must be useful before the show starts." },
          { q: "What’s the best single measure of whether 3D is working?", a: "Whether more people take the action you care about (enquire, buy, book) — not just whether it looks impressive." },
        ],
      },
      {
        type: "takeaways",
        items: [
          "3D converts when it directs attention, explains the product, or signals quality.",
          "Speed comes first — a beautiful page nobody waits for converts nobody.",
          "Use one hero moment and light touches elsewhere.",
          "Measure actions, not applause.",
        ],
      },
    ],
  },
  {
    slug: "static-vs-dynamic-vs-headless",
    title: "Static vs Dynamic vs Headless: What Do You Actually Need?",
    excerpt:
      "Not every business needs a complex stack. We break down static, dynamic, and headless in plain language — cost, speed, scale, and who each is best for.",
    image: `${A}/insights/post-2.svg`,
    category: "Web Basics",
    readTime: "8 min read",
    lesson: "Lesson 02",
    body: [
      { type: "h2", text: "Think about how food gets to the table" },
      {
        type: "p",
        text: "Imagine three ways to serve lunch. A packed lunchbox is made in the morning and is ready the moment you open it. A restaurant cooks each plate when you order. A central kitchen cooks food once and delivers it to many different shops, food trucks, and cafes. Websites work the same three ways — and once you see the analogy, the jargon stops being scary.",
      },
      {
        type: "compare",
        columns: [
          {
            title: "Static — the lunchbox",
            points: [
              "Pages are prepared in advance, so they open instantly.",
              "Very little can break, and hosting is cheap.",
              "Best for: portfolios, landing pages, small business sites that change occasionally.",
              "Trade-off: changing content usually means a quick rebuild.",
            ],
          },
          {
            title: "Dynamic — the restaurant",
            points: [
              "Pages are “cooked” on each request, so they can be personal and always current.",
              "Needs a server and a database working together.",
              "Best for: stores, dashboards, member areas, anything with logins or live stock.",
              "Trade-off: more moving parts to maintain and secure.",
            ],
          },
          {
            title: "Headless — the central kitchen",
            points: [
              "Content lives in one place (a CMS) and is sent to many “fronts”: website, app, kiosk.",
              "The front can be fast and static while content stays easy to edit.",
              "Best for: growing brands publishing to web and app, or teams of editors.",
              "Trade-off: more setup up front.",
            ],
          },
        ],
      },
      { type: "callout", label: "Teacher’s note", text: "These aren’t rival teams. Modern sites often mix them: static pages for speed, a dynamic checkout, and a headless CMS feeding both." },
      { type: "h2", text: "Four questions that pick the right one" },
      {
        type: "steps",
        items: [
          { title: "How often does your content change?", text: "Once a month → static is perfect. Every hour, or per visitor → you need dynamic parts." },
          { title: "Do people log in or buy?", text: "Accounts, carts, and payments need a server somewhere. That’s dynamic (even if the rest is static)." },
          { title: "Where else will the content appear?", text: "If the same products or articles must show in an app too, headless saves you from typing everything twice." },
          { title: "Who edits the site?", text: "If non-technical people update it often, they need a friendly editor (a CMS) — which points toward headless." },
        ],
      },
      { type: "h2", text: "A worked example" },
      {
        type: "p",
        text: "Say you run a paint shop. Your services page and gallery rarely change — static. You want customers to request a quote with a form — a small dynamic piece. Next year you plan an app that lists the same colours — that’s when a headless CMS starts paying off. Notice we didn’t pick one label for the whole business; we picked the right tool for each job.",
      },
      { type: "h2", text: "Common mistakes" },
      {
        type: "list",
        items: [
          "Building a heavy dynamic system for a five-page brochure site — you pay for complexity you never use.",
          "Choosing static for a store with live stock — and then fighting it with workarounds.",
          "Going headless with no plan for who will edit content — a central kitchen with no cooks.",
        ],
      },
      {
        type: "quiz",
        items: [
          { q: "A photographer’s portfolio updated twice a year. Which fits best?", a: "Static — fast, cheap, and simple. A form service can handle enquiries." },
          { q: "An online store with live inventory and checkout?", a: "Dynamic for the cart and stock, often with static product pages for speed." },
          { q: "A brand publishing the same catalogue to a website and a mobile app?", a: "Headless — one source of content feeding both." },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Static = prepared ahead, fastest and simplest.",
          "Dynamic = made on request, needed for logins, carts, and live data.",
          "Headless = one content source feeding many fronts.",
          "Choose per job, not per label — most good sites mix them.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-ready-website",
    title: "Make Your Website AI-Search Ready",
    excerpt:
      "Google and AI search now answer before they send clicks. Learn how clean semantics, structured data, and fast pages make your site understandable — without buying an SEO package.",
    image: `${A}/insights/post-3.svg`,
    category: "Search & AI",
    readTime: "8 min read",
    lesson: "Lesson 03",
    body: [
      { type: "h2", text: "Imagine a very fast librarian" },
      {
        type: "p",
        text: "Search engines and AI assistants are like a librarian who has read millions of books and answers questions by quoting the clearest ones. When someone asks, “Who builds 3D websites in India?”, the librarian doesn’t admire your design — it reads your pages and decides whether it understands them well enough to recommend you. Our job is simple to say and worth doing well: make your site the easiest book in the library to understand.",
      },
      { type: "h2", text: "Lesson 1: Say what things are (semantics)" },
      {
        type: "p",
        text: "A page built only from generic boxes is like a book with no chapter titles. Use real headings in order (one main title, then sections), real lists for lists, real buttons for buttons, and descriptive link text (“See our e-commerce work” beats “click here”). The librarian uses this structure to understand what’s important.",
      },
      { type: "h2", text: "Lesson 2: Label the facts (structured data)" },
      {
        type: "p",
        text: "Structured data is a small, invisible label attached to your page that states facts plainly: this is an organisation, here is its name, its services, its contact details; this is an article, written on this date. It’s like adding a neat index card to the front of your book. Machines don’t have to guess — they can read the card.",
      },
      { type: "callout", label: "Teacher’s note", text: "Structured data must match what’s visible on the page. Labelling things that aren’t really there is like a book cover that lies about the contents — it erodes trust." },
      { type: "h2", text: "Lesson 3: Answer real questions clearly" },
      {
        type: "p",
        text: "AI answers are built from clear, quotable sentences. Write the way you’d explain to a new customer: who you help, what you deliver, how long it takes, what it involves. A good FAQ section is gold here — each question is something a real person asks, and each answer is short enough to quote.",
      },
      {
        type: "list",
        items: [
          "Put the direct answer first, then the detail.",
          "Use the words your customers use, not internal jargon.",
          "Keep one topic per page so the page has a clear purpose.",
        ],
      },
      { type: "h2", text: "Lesson 4: Be fast and reachable" },
      {
        type: "p",
        text: "A librarian can’t recommend a book it can’t open. Pages should load quickly, work on phones, and show their main text without needing heavy scripts first. Keep a sitemap so every important page can be found, and make sure nothing important is hidden behind logins or images of text.",
      },
      { type: "h2", text: "Your weekend checklist" },
      {
        type: "steps",
        items: [
          { title: "One clear title per page", text: "Each page gets a single main heading that says exactly what it’s about." },
          { title: "Add organisation details", text: "Name, services, location served, and contact info — visible on the page and in structured data." },
          { title: "Write a real FAQ", text: "Collect the questions customers actually ask and answer each in two or three sentences." },
          { title: "Check speed on a phone", text: "If the main content takes long to appear, fix that before anything else." },
          { title: "Submit a sitemap", text: "So search engines can find every important page." },
        ],
      },
      {
        type: "quiz",
        items: [
          { q: "Why does descriptive link text matter?", a: "It tells both people and machines where the link goes, which helps them understand how your pages relate." },
          { q: "What is structured data, in one sentence?", a: "A machine-readable label on a page that states its key facts plainly — and must match what’s visible." },
          { q: "Can a beautiful but very slow page rank well in AI answers?", a: "It’s at a disadvantage — if the content is hard to load or read, it’s less likely to be understood and quoted." },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Structure your pages so their meaning is obvious.",
          "Label key facts with structured data that matches the page.",
          "Write clear, quotable answers to real customer questions.",
          "Fast, reachable pages get read; slow, hidden ones get skipped.",
        ],
      },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
