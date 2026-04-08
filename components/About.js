import React from "react";
import { motion } from "framer-motion";

const traits = [
  { title: "Self-Learner", copy: "Always leveling up with daily experiments and new tooling." },
  { title: "Product-Minded", copy: "I care deeply about user outcomes, not only implementation." },
  { title: "System Thinker", copy: "I build scalable foundations that are simple to maintain." },
  { title: "Collaborative", copy: "Strong communication with designers, PMs, and engineers." },
];

const skillCloud = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "AWS",
  "Tailwind",
  "FastAPI",
  "MongoDB",
  "REST APIs",
  "CI/CD",
  "Testing",
  "Design Systems",
];

export default function About() {
  return (
    <section id="aboutme" className="section-space">
      <div className="container-edge about-shell">
        <div className="about-backdrop" aria-hidden="true">
          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />
          <div className="about-grid-glow" />
        </div>

        <p className="section-kicker">About</p>
        <h2 className="section-title">Engineering with craft, speed, and intention.</h2>
        <p className="section-copy">
          My goal is to build products that genuinely improve people&apos;s day-to-day work. I combine frontend polish with full-stack reliability so teams can ship fast without sacrificing quality.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {traits.map((trait, index) => (
            <motion.article
              key={trait.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.015, rotateX: 7, rotateY: index % 2 === 0 ? -7 : 7 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="about-card glass-card rounded-3xl p-6"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="about-card-glow" aria-hidden="true" />
              <div className="about-card-inner">
                <span className="about-card-index">0{index + 1}</span>
                <h3 className="text-xl font-bold text-white">{trait.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{trait.copy}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8, rotateX: 5, rotateY: -5 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="toolbox-card glass-card mt-10 rounded-3xl p-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="toolbox-sphere toolbox-sphere-one" aria-hidden="true" />
          <div className="toolbox-sphere toolbox-sphere-two" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">Toolbox</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {skillCloud.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ y: -5, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="tool-chip"
              >
                <span className="tool-chip-sheen" aria-hidden="true" />
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
