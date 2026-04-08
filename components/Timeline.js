import React from "react";
import { motion } from "framer-motion";

const timeline = [
  {
    date: "2019 - 2021",
    title: "University of Nottingham",
    role: "Medical Physiology and Therapeutics",
    summary:
      "Clinical research and evidence-based healthcare problem-solving.",
  },
  {
    date: "2021 - 2022",
    title: "La Fosse Academy",
    role: "Full-Stack Engineer Trainee",
    summary:
      "Intensive program across JavaScript, Node.js, React, and backend architecture with agile delivery practices.",
  },
  {
    date: "2022 - 2023",
    title: "Sparta Global",
    role: "Graduate Software Engineer",
    summary:
      "Delivered full-stack systems with React, TypeScript, FastAPI, and MongoDB, including AI-driven automation features.",
  },
  {
    date: "2023 - Present",
    title: "Meiyo Solutions",
    role: "Software Engineer",
    summary:
      "Building product features with Next.js, React Native, TypeScript, and AWS for dealership software on web and mobile.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-space">
      <div className="container-edge timeline-shell">
        <div className="timeline-backdrop" aria-hidden="true">
          <div className="timeline-aura timeline-aura-one" />
          <div className="timeline-aura timeline-aura-two" />
        </div>

        <p className="section-kicker">Journey</p>
        <h2 className="section-title">Experience timeline</h2>
        <p className="section-copy">A mix of product engineering, hands on delivery, and practical experience building websites that perform well for users and for search.</p>

        <div className="relative mt-12 pl-7 md:pl-10">
          <div className="timeline-line absolute bottom-0 left-1.5 top-0 w-px md:left-3" />

          <div className="space-y-7">
            {timeline.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -10, rotateX: index % 2 === 0 ? 6 : -6, rotateY: index % 2 === 0 ? -6 : 6 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.07 }}
                className="relative timeline-entry"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="timeline-dot absolute -left-[32px] top-8 h-3 w-3 rounded-full md:-left-[37px]" />
                <div className="timeline-card glass-card rounded-3xl p-6">
                  <div className="timeline-card-glow" aria-hidden="true" />
                  <div className="timeline-card-inner">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{item.date}</p>
                    <h3 className="mt-2 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-cyan-400">{item.role}</p>
                    <p className="mt-3 text-sm text-slate-300">{item.summary}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
