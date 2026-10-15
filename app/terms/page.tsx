import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for VENQOR Studios — how we work, what we deliver, and what we expect from each other.",
};

export default function TermsPage() {
  return (
    <main style={{ background: "var(--bg)", color: "var(--black)", minHeight: "100vh", padding: "120px var(--gutter) 80px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <a href="/" className="t-13" style={{ display: "inline-block", marginBottom: 32, opacity: 0.6 }}>
          ← Back to home
        </a>
        <h1 className="t-38 ph-28" style={{ margin: "0 0 12px" }}>
          Terms of Service
        </h1>
        <p className="t-legal" style={{ margin: "0 0 40px", opacity: 0.6 }}>
          Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · VENQOR Studios
        </p>

        <div className="t-body" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              1. Agreement
            </h2>
            <p style={{ margin: 0 }}>
              By using venqor.online or engaging VENQOR Studios for design, development, or maintenance services, you agree to these Terms. If
              you are entering into an agreement on behalf of a company, you confirm you have authority to do so.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              2. Services &amp; Proposals
            </h2>
            <p style={{ margin: 0 }}>
              Every project starts with a discovery call followed by a written proposal. The proposal defines scope, timeline, deliverables, and
              price. Work begins only after written approval. Any change outside the agreed scope is handled as a separate request and quoted
              before we proceed.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              3. Pricing &amp; Payment
            </h2>
            <p style={{ margin: 0 }}>
              Pricing is fixed-scope, fixed-price unless stated otherwise. Payment terms are specified in the proposal (typically milestone-based).
              Late payments may pause delivery. All fees are exclusive of taxes and third-party costs (domains, hosting, app store fees, payment
              gateways) unless explicitly included.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              4. Timelines &amp; Responsibilities
            </h2>
            <p style={{ margin: 0 }}>
              Timelines depend on scope, feedback speed, and content readiness. We commit to milestones; you commit to timely feedback and assets.
              Delays caused by pending feedback or content extend the timeline accordingly. We ship in small, testable increments with weekly demos
              where applicable.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              5. Intellectual Property
            </h2>
            <p style={{ margin: 0 }}>
              Upon full payment, you own the final deliverables built specifically for your project (design files, code, and content you provided).
              We retain the right to showcase the work in our portfolio unless a non-disclosure is agreed in writing. Pre-existing tools,
              libraries, and components we bring remain ours. Third-party assets (fonts, images, plugins) are subject to their own licenses.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              6. Revisions
            </h2>
            <p style={{ margin: 0 }}>
              Reasonable revisions within the agreed scope are included. Revisions that change the scope, add new pages or features, or require a
              different direction are treated as additional work and quoted separately.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              7. Deployment &amp; Maintenance
            </h2>
            <p style={{ margin: 0 }}>
              We handle deployment where agreed and remain available for long-term maintenance under a separate care plan. Maintenance covers
              updates, security, performance, and small improvements — not new features, which are scoped separately.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              8. Warranties &amp; Limitation of Liability
            </h2>
            <p style={{ margin: 0 }}>
              We build with care and test across modern browsers and devices, but we do not guarantee uninterrupted or error-free operation,
              search ranking, or specific business outcomes. To the extent permitted by law, our liability is limited to the fees paid for the
              specific project in question.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              9. Termination
            </h2>
            <p style={{ margin: 0 }}>
              Either party may terminate with written notice. You pay for work completed up to the termination date. Deposits for work not yet
              started may be refunded at our discretion. Source files for unpaid work are not released.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              10. Governing Law
            </h2>
            <p style={{ margin: 0 }}>
              These Terms are governed by the laws of India. Disputes will be subject to the jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="t-20" style={{ margin: "0 0 10px" }}>
              11. Contact
            </h2>
            <p style={{ margin: 0 }}>
              Questions about these Terms? Reach us at{" "}
              <a href={SITE.contact.emailHref} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
                {SITE.contact.email}
              </a>{" "}
              or via the contact form on our homepage.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
