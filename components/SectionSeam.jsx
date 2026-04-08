import { motion } from "framer-motion";

export default function SectionSeam() {
  return (
    <motion.div
      className="section-seam"
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.9 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    />
  );
}
