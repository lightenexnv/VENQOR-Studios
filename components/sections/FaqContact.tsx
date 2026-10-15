"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/content/site";
import FillButton from "@/components/ui/FillButton";
import { isEmail, submitWeb3Form } from "@/lib/web3forms";
import styles from "./FaqContact.module.css";

function Arrow() {
  return (
    <svg viewBox="0 0 8 4" width="8" height="4" overflow="visible" aria-hidden>
      <path d="M0 0 L4 4 L8 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Faq() {
  const f = SITE.faq;
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={styles.faq}>
      <div className={styles.heading}>
        <h2 className="t-28 ph-24">{f.label}</h2>
        <span className={`t-28 ph-24 ${styles.number}`}>{f.number}</span>
      </div>
      <ul className={styles.list}>
        {f.items.map((it, i) => {
          const isOpen = open === i;
          return (
            <li key={it.q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
              <button type="button" className={styles.q} aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}>
                <span className={styles.arrow}>
                  <Arrow />
                </span>
                <span className="t-24 tb-20 ph-20">{it.q}</span>
              </button>
              <div id={`faq-${i}`} className={styles.a} role="region">
                <div className={styles.aInner}>
                  <p className="t-body">{it.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StartProject() {
  const s = SITE.startProject;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const valid = isEmail(form.email) && form.message.trim().length > 0;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid || status === "sending") return;
    // honeypot: bots tick the hidden box, humans never see it
    if ((e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked) return;
    setStatus("sending");
    const res = await submitWeb3Form(
      { name: form.name || "(not provided)", email: form.email, message: form.message, replyto: form.email },
      { subject: `New project enquiry — ${form.name || form.email}` }
    );
    if (res.ok) {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setError(res.message);
    }
  };

  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contactHead}>
        <div className={styles.contactText}>
          <h2 className="t-53 tb-35 ph-35">
            {s.title[0]}
            <br />
            {s.title[1]}
          </h2>
          <p className={`t-body20 tb-body ph-body ${styles.lead}`}>
            {s.text[0]}
            <br />
            {s.text[1]}
          </p>
        </div>
        <div className={styles.kate}>
          <img src={SITE.manager.contactImage} alt={SITE.manager.fullName} />
          <span className="t-13">
            {SITE.manager.first}
            <br />
            {SITE.manager.last}
          </span>
        </div>
      </div>

      <div className={styles.formCard}>
        <form className={styles.form} onSubmit={submit} noValidate>
          <div className={styles.row}>
            <label className={styles.field}>
              <span className="t-13">{s.fields.name}</span>
              <input name="name" type="text" autoComplete="name" placeholder={s.placeholders.name} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className={styles.field}>
              <span className="t-13">{s.fields.email}</span>
              <input name="email" type="email" required autoComplete="email" placeholder={s.placeholders.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </label>
          </div>
          <label className={styles.field}>
            <span className="t-13">{s.fields.message}</span>
            <textarea name="message" required placeholder={s.placeholders.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="visually-hidden" aria-hidden />
          <FillButton type="submit" tone="dark" disabled={!valid || status === "sending"} className={styles.send}>
            {status === "sending" ? "Sending…" : status === "sent" ? s.sent : s.submit}
          </FillButton>
          <p className={`t-legal ${styles.status}`} role="status" aria-live="polite">
            {status === "error" ? error : status === "sent" ? "Message received — check your inbox for our reply." : ""}
          </p>
        </form>
        <p className={`t-legal ${styles.terms}`}>
          Before submitting, you agree to our{" "}
          <a href={s.termsHref}>Terms</a> and <a href={s.privacyHref}>Privacy Policy.</a>
        </p>
      </div>
    </div>
  );
}

export default function FaqContact() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <Faq />
        <StartProject />
      </div>
    </section>
  );
}
