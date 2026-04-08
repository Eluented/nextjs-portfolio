import React from "react";
import { motion } from "framer-motion";

const year = new Date().getFullYear();

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/onur-belek-002085220/" },
  { label: "GitHub", href: "https://github.com/Eluented" },
  { label: "Instagram", href: "https://www.instagram.com/_onur.b/?hl=en" },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer-shell pb-10 pt-8">
      <div className="section-divider" />
      <motion.div
        className="container-edge mt-6"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="footer-minimal">
          <p className="footer-minimal-title">Onur Belek</p>
          <p className="footer-minimal-copy">Engineering modern digital experiences with precision.</p>

          <div className="footer-minimal-links" aria-label="Social links">
            {links.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="footer-minimal-link">
                {item.label}
              </a>
            ))}
          </div>

          <p className="footer-minimal-meta">© {year} Onur Belek • Crafted with intent.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
