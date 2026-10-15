import type { Metadata } from "next";
import { SITE } from "@/content/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/cursor/Cursor";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for VENQOR Studios — what data we collect, why, and how we protect it.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className={styles.page}>
        <div className={styles.container}>
          <a href="/" className={styles.back}>
            ← Back to home
          </a>

          <div className={styles.header}>
            <span className={styles.badge}>LEGAL // PRIVACY POLICY</span>
            <h1 className={`t-84 tb-53 ph-38 ${styles.title}`}>Privacy Policy</h1>
            <p className={styles.updated}>
              Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · VENQOR Studios
            </p>
          </div>

          <div className={styles.body}>
            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[01]</span>
                <h2 className={styles.cardTitle}>Who We Are</h2>
              </div>
              <p className={styles.text}>
                VENQOR Studios (&quot;we&quot;, &quot;us&quot;) designs and builds high-performance 3D websites, web platforms, and mobile apps. This policy explains what personal data we collect through venqor.online and related services, why we collect it, and your choices. Contact us at{" "}
                <a href={SITE.contact.emailHref} className={styles.link}>
                  {SITE.contact.email}
                </a>.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[02]</span>
                <h2 className={styles.cardTitle}>Data We Collect</h2>
              </div>
              <ul className={styles.list}>
                <li>
                  <strong>Contact &amp; enquiry data:</strong> name, email, project brief, budget, and timeline details you share via our contact or newsletter forms.
                </li>
                <li>
                  <strong>Usage data:</strong> pages visited, device and browser type, and approximate location (derived from IP) for analytics.
                </li>
                <li>
                  <strong>Communication data:</strong> emails and messages exchanged throughout project scoping and delivery.
                </li>
              </ul>
              <p className={styles.text} style={{ marginTop: 8 }}>
                We do not collect sensitive personal data through this website.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[03]</span>
                <h2 className={styles.cardTitle}>How We Use Your Data</h2>
              </div>
              <ul className={styles.list}>
                <li>To respond to project enquiries and deliver agreed studio services.</li>
                <li>To send occasional studio announcements and insights if you subscribed (you can opt out anytime).</li>
                <li>To improve site performance, measure conversion metrics, and prevent security abuse.</li>
                <li>To comply with applicable legal obligations.</li>
              </ul>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[04]</span>
                <h2 className={styles.cardTitle}>Legal Basis</h2>
              </div>
              <p className={styles.text}>
                We process personal data on the basis of consent (newsletter), contract (delivering scoped client projects), legitimate interest (website optimization and security), and legal obligation.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[05]</span>
                <h2 className={styles.cardTitle}>Cookies &amp; Analytics</h2>
              </div>
              <p className={styles.text}>
                We use privacy-friendly measurement tools to monitor website performance. Where cookies are utilized, they are restricted to essential operational and anonymous measurement functions. We never sell your personal data or track you across third-party websites.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[06]</span>
                <h2 className={styles.cardTitle}>Sharing &amp; Third Parties</h2>
              </div>
              <p className={styles.text}>
                We share data exclusively with trusted infrastructure partners essential for operating our website and delivering client deliverables (e.g., Vercel hosting, email delivery, and form management). We never sell, rent, or trade your personal information.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[07]</span>
                <h2 className={styles.cardTitle}>Data Retention</h2>
              </div>
              <p className={styles.text}>
                Enquiry details are retained for as long as necessary to address your brief and manage client relationships, plus a standard statutory period for tax and accounting records. Newsletter subscriptions are held until you unsubscribe.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[08]</span>
                <h2 className={styles.cardTitle}>Your Rights</h2>
              </div>
              <p className={styles.text}>
                You retain the right to request access to, correction of, or deletion of your personal data held by VENQOR Studios. To exercise any of these rights, email us at{" "}
                <a href={SITE.contact.emailHref} className={styles.link}>
                  {SITE.contact.email}
                </a>.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[09]</span>
                <h2 className={styles.cardTitle}>Security &amp; Encryption</h2>
              </div>
              <p className={styles.text}>
                All transmissions on venqor.online are encrypted via modern TLS/HTTPS protocols. We employ industry-standard organizational and technical safeguards to keep all communications secure.
              </p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>[10]</span>
                <h2 className={styles.cardTitle}>Contact Information</h2>
              </div>
              <p className={styles.text}>
                Have questions or privacy concerns? Write to us at{" "}
                <a href={SITE.contact.emailHref} className={styles.link}>
                  {SITE.contact.email}
                </a>{" "}
                or submit a message through the contact form on our homepage.
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
