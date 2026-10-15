"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/content/site";
import RollLink from "@/components/ui/RollLink";
import FillButton from "@/components/ui/FillButton";
import { isEmail, submitWeb3Form } from "@/lib/web3forms";
import BookCallCard from "@/components/blocks/BookCallCard";
import HelixGallery from "@/components/fx/HelixGallery";
import { useBreakpoint } from "@/lib/useBreakpoint";
import styles from "./Footer.module.css";

function Newsletter() {
  const f = SITE.footer;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }
    if ((e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked) return;
    setStatus("sending");
    const res = await submitWeb3Form({ email, replyto: email, message: `Newsletter signup: ${email}` }, { subject: "New newsletter subscriber" });
    if (res.ok) {
      setStatus("done");
      setEmail("");
    } else {
      setStatus("error");
      setError(res.message);
    }
  };
  return (
    <div className={styles.newsletter}>
      <h2 className="t-20">{f.newsletterTitle}</h2>
      <p className={`t-body15 ${styles.muted}`}>{f.newsletterText}</p>
      <form className={styles.form} onSubmit={submit} noValidate>
        <label className={styles.field}>
          <span className="t-13">{f.emailLabel}</span>
          <input type="email" name="email" required autoComplete="email" placeholder={f.emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden />
        <FillButton type="submit" tone="light" className={styles.subscribe} disabled={status === "sending"}>
          {status === "sending" ? "Subscribing…" : status === "done" ? f.subscribed : f.subscribe}
        </FillButton>
        {status === "error" && (
          <p className="t-legal" role="alert" style={{ margin: 0, color: "var(--white-70)" }}>
            {error}
          </p>
        )}
      </form>
      <p className={`t-legal ${styles.legal}`}>
        Before submitting, you agree to our <a href={SITE.startProject.privacyHref}>Privacy Policy.</a>
      </p>
    </div>
  );
}

export default function Footer() {
  const f = SITE.footer;
  const bp = useBreakpoint();

  const brand = (
    <div className={styles.brand}>
      <p className="t-17">{f.tagline}</p>
      <img src={SITE.wordmark} alt={SITE.shortBrand} className={styles.wordmark} />
    </div>
  );

  const hasSocials = SITE.socials.length > 0;

  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.colLeft}>
              {bp !== "phone" && brand}
              <Newsletter />
              {bp === "phone" && brand}
              <BookCallCard tone="dark" />
            </div>

            {bp === "desktop" && (
              <div className={styles.colHelix}>
                <HelixGallery images={f.helix} />
              </div>
            )}

            <div className={styles.colRight}>
              <nav className={styles.links} aria-label="Footer">
                {SITE.nav.map((l) => (
                  <RollLink key={l.href} href={l.href} direction="left" labelClassName="t-35 tb-28 ph-28">
                    {l.label}
                  </RollLink>
                ))}
              </nav>
              {hasSocials && (
                <div className={styles.follow}>
                  <h2 className="t-20">{f.follow}</h2>
                  <div className={styles.socials}>
                    {SITE.socials.map((s) => (
                      <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                        <img src={s.icon} alt="" width={30} height={30} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <address className={styles.info}>
                <a href={SITE.contact.addressHref} target="_blank" rel="noreferrer" className="t-20">
                  {SITE.contact.address}
                </a>
                <a href={SITE.contact.emailHref} className="t-20">
                  {SITE.contact.email}
                </a>
                {SITE.contact.phones.map((p) => (
                  <a key={p.label} href={p.href} className="t-20">
                    {p.label}: {p.value}
                  </a>
                ))}
              </address>
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.legalLinks}>
              <a href={SITE.startProject.termsHref} className="t-legal">
                Terms
              </a>
              <a href={SITE.startProject.privacyHref} className="t-legal">
                Privacy Policy
              </a>
              <a href={`mailto:${SITE.contact.email}`} className="t-legal">
                {SITE.contact.email}
              </a>
            </div>
            <div className={styles.copyright}>
              <p className="t-legal">{f.copyright}</p>
              {f.designedBy && (
                <p className={`t-legal ${styles.designed}`}>
                  <img src={f.designedBy.avatar} alt="" width={28} height={28} />
                  <span>
                    {f.designedBy.label}{" "}
                    <a href={f.designedBy.href} target="_blank" rel="noreferrer">
                      {f.designedBy.name}
                    </a>
                    .
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
