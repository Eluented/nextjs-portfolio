import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  problem,
  process,
  outcome,
  metrics,
  imgUrl,
  imgAlt,
  linkUrl,
}) {
  return (
    <motion.a
      href={linkUrl}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, rotateX: 3, rotateY: -3 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", stiffness: 230, damping: 20 }}
      className="project-card glass-card group block"
      data-spotlight="true"
    >
      <div className="project-card-media relative overflow-hidden">
        <Image
          src={imgUrl}
          width={640}
          height={360}
          alt={imgAlt || title}
          className="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="project-card-media-tag">Case Study</div>
      </div>

      <div className="project-card-body p-5">
        <div className="project-card-head">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">{description}</p>
        </div>

        <div className="project-story-grid mt-4">
          <div>
            <p className="project-story-label">Problem</p>
            <p className="project-story-copy">{problem}</p>
          </div>
          <div>
            <p className="project-story-label">Approach</p>
            <p className="project-story-copy">{process}</p>
          </div>
          <div>
            <p className="project-story-label">Outcome</p>
            <p className="project-story-copy">{outcome}</p>
          </div>
        </div>

        <div className="project-metric-chips mt-4">
          {metrics.map((metric) => (
            <span key={metric} className="project-metric-chip">
              {metric}
            </span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          View project
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
