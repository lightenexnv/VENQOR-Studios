"use client";

/**
 * Fixed header: logo (left), centered links (desktop), burger (right).
 * Logo + links use mix-blend-mode: difference so they read on light and dark sections.
 * The burger opens a slide-in panel with large links, address and socials.
 */
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE } from "@/content/site";
import RollLink from "@/components/ui/RollLink";
import styles from "./Nav.module.css";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a href="#home" className={styles.logo} aria-label={`${SITE.brand} — home`}>
        <img src={SITE.logo} alt="" width={30} height={41} />
      </a>

      <nav className={styles.links} aria-label="Primary">
        {SITE.nav.map((l) => (
          <RollLink key={l.href} href={l.href} className={styles.link} labelClassName="t-17">
            {l.label}
          </RollLink>
        ))}
      </nav>

      <div className={`${styles.menuWrap} ${open ? styles.isOpen : ""}`}>
        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              id="site-menu"
              className={styles.panel}
              initial={{ x: "105%" }}
              animate={{ x: 0 }}
              exit={{ x: "105%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.7 }}
              role="dialog"
              aria-label="Menu"
            >
              <div className={styles.panelLinks}>
                {SITE.nav.map((l) => (
                  <RollLink key={l.href} href={l.href} labelClassName="t-28" onClick={close}>
                    {l.label}
                  </RollLink>
                ))}
              </div>
              <div className={styles.panelInfo}>
                <a href={SITE.contact.addressHref} target="_blank" rel="noreferrer" className="t-20">
                  {SITE.contact.address}
                </a>
                <a href={SITE.contact.phoneHref} className="t-20">
                  {SITE.contact.phone}
                </a>
              </div>
              <div className={styles.panelFollow}>
                <span className="t-20">{SITE.footer.follow}</span>
                <div className={styles.socials}>
                  {SITE.socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                      <img src={s.icon} alt="" width={30} height={30} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerBg} aria-hidden />
          <span className={styles.bars} aria-hidden>
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      {open && <button type="button" className={styles.scrim} aria-label="Close menu" onClick={close} />}
    </>
  );
}
