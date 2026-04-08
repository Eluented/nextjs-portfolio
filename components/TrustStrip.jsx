import { motion } from "framer-motion";

const trustItems = [
  { label: "Response", value: "< 24h", detail: "Fast replies for interviews and hiring conversations" },
  { label: "Timezone", value: "UK / GMT", detail: "Comfortable with EU and US overlap" },
  { label: "Availability", value: "Open", detail: "Full-time Software Engineer opportunities" },
  { label: "Recent Stack", value: "Next.js 15", detail: "Framer Motion, Node APIs, SCSS" },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip-wrap" aria-label="Recruiter trust signals">
      <div className="container-edge">
        <motion.div
          className="trust-strip glass-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          {trustItems.map((item, index) => (
            <motion.article
              key={item.label}
              className="trust-item"
              data-spotlight="true"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -7, rotateX: 3, rotateY: index % 2 === 0 ? -2 : 2 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: "spring", stiffness: 230, damping: 20, delay: index * 0.05 }}
            >
              <p className="trust-label">{item.label}</p>
              <p className="trust-value">{item.value}</p>
              <p className="trust-detail">{item.detail}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
