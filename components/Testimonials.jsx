import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";

const metrics = [
  { value: 82, suffix: "%", label: "Average load time reduction across projects" },
  { value: 3, suffix: "×", label: "Typical conversion rate improvement" },
  { value: 90, suffix: "%", label: "API response time improvement" },
];

const testimonials = [
  {
    quote:
      "Thank you for all your help, Onur. You have been brilliant! The site looks fantastic and the speed improvements are incredible. The members of my tutoring group have given fantastic comments and feedback about the website you created for me. I am so pleased with the result and I will be recommending you to everyone I know who needs a website.",
    author: "Rosalind",
    role: "Owner",
    company: "Rosalind's Tuition",
    initials: "RR",
    result: "80% faster load time",
    hex: "#24c6b8",
  },
  {
    quote:
      "Very happy with the work Onur did for us. He was quick to understand our requirements and delivered a website that not only looks great but also performs exceptionally well. Many people found our fish and chips business through the new site and we saw a significant boost in orders.",
    author: "Mehmet",
    role: "Founder",
    company: "Olympus Fish and Chips",
    initials: "MB",
    result: "3× conversion lift",
    hex: "#4f9cff",
  },
  {
    quote:
      "Exceptional work from Onur. He took time to understand our wholesale product range and redesigned the website so customers can browse with ease. The final result looks professional, performs quickly, and many of our clients now use the website daily to view products and place enquiries.",
    author: "Ashraff",
    role: "Owner",
    company: "Island Imports",
    initials: "AA",
    result: "Better load times",
    hex: "#f59e0b",
  },
];

function Counter({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const raw = useMotionValue(0);
  const smooth = useSpring(raw, { stiffness: 88, damping: 18, mass: 0.75 });
  const display = useTransform(smooth, (v) => `${Math.round(v)}`);

  useEffect(() => {
    if (inView) {
      animate(raw, target, {
        duration: 1.85,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [inView, raw, target]);

  return (
    <span ref={ref} className="testi-metric-count">
      <motion.span className="testi-metric-number">{display}</motion.span>
      <span className="testi-metric-suffix">{suffix}</span>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.76, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-space">
      <div className="container-edge">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-18% 0px" }}
          transition={{ duration: 0.62 }}
          className="mb-14"
        >
          <p className="section-kicker mb-3">Social Proof</p>
          <h2 className="section-title">What clients say</h2>
          <p className="section-copy mt-4">
            Real projects, real outcomes. Every engagement is measured against results that
            matter — speed, search visibility, and conversion.
          </p>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          className="testi-metrics"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.58, delay: 0.1 }}
        >
          {metrics.map((m, i) => (
            <motion.article
              key={i}
              className="testi-metric glass-card"
              data-spotlight="true"
              whileHover={{ y: -7, rotateX: 3, rotateY: i === 1 ? 0 : i === 0 ? -2 : 2 }}
              transition={{ type: "spring", stiffness: 230, damping: 20 }}
            >
              <span className="testi-metric-overline">Outcome</span>
              <div className="testi-metric-value">
                <Counter target={m.value} suffix={m.suffix} />
              </div>
              <p className="testi-metric-label">{m.label}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="testi-divider" aria-hidden="true" />

        {/* Testimonial cards */}
        <motion.div
          className="testi-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateX: 4,
                rotateY: i === 0 ? -3 : i === 2 ? 3 : 0,
                transition: { type: "spring", stiffness: 230, damping: 20 },
              }}
              className="testi-card glass-card"
              data-spotlight="true"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glow bloom */}
              <div
                className="testi-card-glow"
                style={{
                  background: `radial-gradient(circle, ${t.hex}50 0%, transparent 62%)`,
                }}
              />

              {/* Corner accent line */}
              <div
                className="testi-card-accent-line"
                style={{ background: `linear-gradient(90deg, ${t.hex}, transparent)` }}
              />

              {/* Stars */}
              <div className="testi-stars" aria-label="5 stars">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testi-quote">
                <span className="testi-open-quote" aria-hidden="true">
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>

              {/* Result badge */}
              <div
                className="testi-result"
                style={{ borderColor: `${t.hex}40` }}
              >
                <span
                  className="testi-result-dot"
                  style={{
                    background: t.hex,
                    boxShadow: `0 0 10px ${t.hex}`,
                  }}
                />
                {t.result}
              </div>

              {/* Author */}
              <footer className="testi-author">
                <div
                  className="testi-avatar"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${t.hex}88, ${t.hex}22)`,
                    boxShadow: `0 0 22px ${t.hex}40`,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="testi-name">{t.author}</p>
                  <p className="testi-role">
                    {t.role} &middot; {t.company}
                  </p>
                </div>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
