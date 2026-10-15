import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for VENQOR Studios — what data we collect, why, and how we protect it.",
};

export default function PrivacyPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--black)", minHeight: "100vh", padding: "120px var(--gutter) 80px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <a href="/" className="t-13" style={{ display: "inline-block", marginBottom: 32, opacity: 0.6 }}>
          ← Back to home
        </a>
        <h1 className="t-38 ph-28" style={{ margin: "0 0 12px" }}>
          Privacy Policy
        </h1>
        <p className="t-legal" style={{ margin: "0 0 40px", opacity: 0.6 }}>
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · VENQOR Studios
        </p>

        <div className="t-body" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              1. Who we are
            </h2>
            <p style={{ margin: 0 }}>
              VENQOR Studios (&quot;we&quot;, &quot;us&quot;) builds websites and apps. This policy explains what personal data we collect
              through venqor.online and related services, why we collect it, and your choices. Contact us at{" "}
              <a href={SITE.contact.emailHref} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                {SITE.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              2. Data we collect
            </h2>
            <ul style={{ margin: "0 0 0 18px", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>Contact &amp; enquiry data:</strong> name, email, message, and any details you share via our contact or newsletter forms.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, referring URL, device and browser type, and approximate location (derived from IP).
              </li>
              <li>
                <strong>Communication data:</strong> emails and messages exchanged during a project.
              </li>
            </ul>
            <p style={{ margin: "12px 0 0" }}>We do not collect sensitive personal data through the website.</p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              3. How we use your data
            </h2>
            <ul style={{ margin: "0 0 0 18px", padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              <li>To respond to enquiries and deliver the services you request.</li>
              <li>To send occasional product and studio notes if you subscribed (you can unsubscribe at any time).</li>
              <li>To improve the website, measure performance, and prevent abuse.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              4. Legal basis (where applicable)
            </h2>
            <p style={{ margin: 0 }}>
              We process data on the basis of consent (newsletter), contract (project delivery), legitimate interest (website improvement and
              security), and legal obligation.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              5. Cookies &amp; analytics
            </h2>
            <p style={{ margin: 0 }}>
              We may use minimal, privacy-friendly analytics to understand how the site is used. Where cookies are used, they are limited to
              essential and measurement purposes. You can control cookies through your browser settings. We do not sell your data or use it for
              cross-site advertising.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              6. Sharing
            </h2>
            <p style={{ margin: 0 }}>
              We share data only with service providers who help us operate the website and deliver projects (e.g., hosting, email delivery,
              analytics) and only to the extent necessary. We do not sell or rent your personal data.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              7. Retention
            </h2>
            <p style={{ margin: 0 }}>
              Enquiry data is kept for as long as needed to handle your request and, if you become a client, for the duration of the
              relationship plus a reasonable period thereafter for records and legal compliance. Newsletter data is kept until you unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              8. Your rights
            </h2>
            <p style={{ margin: 0 }}>
              Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data, to
              object to certain processing, and to withdraw consent. To exercise these rights, email us at{" "}
              <a href={SITE.contact.emailHref} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                {SITE.contact.email}
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              9. Security
            </h2>
            <p style={{ margin: 0 }}>
              We use reasonable technical and organizational measures to protect your data. No method of transmission or storage is 100% secure,
              but we take security seriously and review our practices regularly.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              10. Children
            </h2>
            <p style={{ margin: 0 }}>Our website and services are not directed to children. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              11. Changes to this policy
            </h2>
            <p style={{ margin: 0 }}>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the top will change when we do. Continued use of
              the site after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              12. Contact
            </h2>
            <p style={{ margin: 0 }}>
              Questions or requests? Email{" "}
              <a href={SITE.contact.emailHref} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                {SITE.contact.email}
              </a>{" "}
              or use the contact form on our homepage.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
