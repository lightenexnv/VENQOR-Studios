import type { Metadata } from "next";
import { SITE } from "@/content/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/cursor/Cursor";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for VENQOR Studios — how we work, what we deliver, and what we expect from each other.",
};

const SECTIONS = [
  {
    num: "[01]",
    title: "Agreement",
    text: "By using venqor.online or engaging VENQOR Studios for design, development, or maintenance services, you agree to these Terms. If you are entering into an agreement on behalf of a company, you confirm you have authority to do so.",
  },
  {
    num: "[02]",
    title: "Services & Proposals",
    text: "Every project starts with a discovery call followed by a written proposal. The proposal defines scope, timeline, deliverables, and price. Work begins only after written approval. Any change outside the agreed scope is handled as a separate request and quoted before we proceed.",
  },
  {
    num: "[03]",
    title: "Pricing & Payment",
    text: "Pricing is fixed-scope, fixed-price unless stated otherwise. Payment terms are specified in the proposal (typically milestone-based). Late payments may pause delivery. All fees are exclusive of taxes and third-party costs (domains, hosting, app store fees, payment gateways) unless explicitly included.",
  },
  {
    num: "[04]",
    title: "Timelines & Responsibilities",
    text: "Timelines depend on scope, feedback speed, and content readiness. We commit to milestones; you commit to timely feedback and assets. Delays caused by pending feedback or content extend the timeline accordingly. We ship in small, testable increments with weekly demos where applicable.",
  },
  {
    num: "[05]",
    title: "Intellectual Property",
    text: "Upon full payment, you own the final deliverables built specifically for your project (design files, code, and content you provided). We retain the right to showcase the work in our portfolio unless a non-disclosure is agreed in writing. Pre-existing tools, libraries, and components we bring remain ours. Third-party assets (fonts, images, plugins) are subject to their own licenses.",
  },
  {
    num: "[06]",
    title: "Revisions",
    text: "Reasonable revisions within the agreed scope are included. Revisions that change the scope, add new pages or features, or require a different direction are treated as additional work and quoted separately.",
  },
  {
    num: "[07]",
    title: "Deployment & Maintenance",
    text: "We handle deployment where agreed and remain available for long-term maintenance under a separate care plan. Maintenance covers updates, security, performance, and small improvements — not new features, which are scoped separately.",
  },
  {
    num: "[08]",
    title: "Warranties & Limitation of Liability",
    text: "We build with care and test across modern browsers and devices, but we do not guarantee uninterrupted or error-free operation, search ranking, or specific business outcomes. To the extent permitted by law, our liability is limited to the fees paid for the specific project in question.",
  },
  {
    num: "[09]",
    title: "Termination",
    text: "Either party may terminate with written notice. You pay for work completed up to the termination date. Deposits for work not yet started may be refunded at our discretion. Source files for unpaid work are not released.",
  },
  {
    num: "[10]",
    title: "Governing Law",
    text: "These Terms are governed by the laws of India. Disputes will be subject to the jurisdiction of courts in India.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.container}>
          <a href="/" className={styles.back}>
            ← Back to home
          </a>

          <div className={styles.header}>
            <span className={styles.badge}>LEGAL // TERMS OF SERVICE</span>
            <h1 className={`t-84 tb-53 ph-38 ${styles.title}`}>Terms of Service</h1>
            <p className={styles.updated}>
              Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · VENQOR Studios
            </p>
          </div>

          <div className={styles.body}>
            {SECTIONS.map((s) => (
              <section key={s.num} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.cardNum}>{s.num}</span>
                  <h2 className={styles.cardTitle}>{s.title}</h2>
                </div>
                <p className={styles.text}>{s.text}</p>
              </section>
            ))}

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[11]</span>
                <h2 className={styles.cardTitle}>Contact</h2>
              </div>
              <p className={styles.text}>
                Questions about these Terms? Reach out directly to{" "}
                <a href={SITE.contact.emailHref} className={styles.link}>
                  {SITE.contact.email}
                </a>{" "}
                or via the contact form on our homepage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
