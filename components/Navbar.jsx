import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "home", label: "Home" },
  { to: "aboutme", label: "About" },
  { to: "timeline", label: "Journey" },
  { to: "projects", label: "Case Studies" },
  { to: "contact", label: "Contact" },
];

const PERSONAL_QUOTE = "Character is built in repetition.";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.classList.toggle("nav-open-lock", open);

    return () => {
      document.body.classList.remove("nav-open-lock");
    };
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.to))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 112;

    setActiveSection(sectionId);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-5">
      <div className="container-edge">
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="nav-shell glass-card"
        >
          <div className="nav-orb nav-orb-left" aria-hidden="true" />
          <div className="nav-orb nav-orb-right" aria-hidden="true" />

          <div className="nav-brand-wrap">
            <span className="nav-brand-mark" aria-hidden="true">
              <span className="nav-brand-sheen" />
              <span className="nav-brand-matrix">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              <span className="nav-brand-core">
                <span>O</span>
                <span>B</span>
              </span>
            </span>
            <div>
              <span className="nav-brand text-sm font-semibold tracking-[0.28em] text-white/95">
                ONUR BELEK
              </span>
              <p className="nav-brand-role">Software Engineer</p>
              <p className="nav-brand-sub">{PERSONAL_QUOTE}</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <motion.div
                key={item.to}
                whileHover={{ y: -3, rotateX: 4 }}
                transition={{ type: "spring", stiffness: 230, damping: 20 }}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection(item.to)}
                  className={`nav-link cursor-pointer ${activeSection === item.to ? "active" : ""}`}
                >
                  <span className="nav-link-core">{item.label}</span>
                  <span className="nav-link-beam" aria-hidden="true" />
                </button>
              </motion.div>
            ))}
          </nav>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="nav-toggle md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="nav-mobile glass-card md:hidden"
            >
              <div className="nav-mobile-grid" aria-hidden="true" />
              <div className="nav-mobile-top">
                <p className="nav-mobile-kicker">Navigation</p>
                <p className="nav-mobile-quote">{PERSONAL_QUOTE}</p>
              </div>
              {navItems.map((item) => (
                <button
                  type="button"
                  key={item.to}
                  className={`nav-mobile-link block cursor-pointer ${activeSection === item.to ? "active" : ""}`}
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(item.to);
                  }}
                >
                  <span className="nav-mobile-label">{item.label}</span>
                  <span className="nav-mobile-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
