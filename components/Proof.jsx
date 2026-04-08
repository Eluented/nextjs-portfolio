import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "Fast", label: "Interfaces designed to feel smooth, clear, and responsive" },
  { value: "SEO", label: "Experience improving visibility, technical health, and rankings" },
  { value: "Secure", label: "Backends and data flows built with reliability in mind" },
];

const highlights = [
  "Websites that feel custom rather than templated",
  "Product thinking that balances polish, speed, and maintainability",
  "Engineering decisions made with business outcomes in mind",
];

export default function Proof() {
  return (
    <section id="proof" className="section-space pt-2">
      <div className="container-edge proof-shell glass-card">
        <div className="proof-panel">
          <p className="section-kicker">Why Me</p>
          <h2 className="section-title">More than visuals. The work is built to hold up.</h2>
          <p className="section-copy">
            I care about design quality, but I also care about what happens after launch. That means cleaner code, stronger performance, solid foundations, and websites that are easier to grow.
          </p>

          <div className="proof-highlights mt-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                className="proof-highlight"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className="proof-highlight-dot" aria-hidden="true" />
                <p>{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="proof-stats">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.value}
              className="proof-stat-card"
              data-spotlight="true"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? -3 : 3, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "spring", stiffness: 230, damping: 20, delay: index * 0.05 }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
