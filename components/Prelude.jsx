import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const bars = new Array(9).fill(null);

export default function Prelude({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 96) {
          return prev;
        }

        return prev + 4;
      });
    }, 85);

    const doneTimeout = window.setTimeout(() => {
      setProgress(100);
      onComplete();
    }, 2200);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(doneTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="prelude"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        clipPath: "circle(0% at 50% 45%)",
        transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
      }}
    >
      <div className="prelude-noise" aria-hidden="true" />
      <div className="prelude-spotlight" aria-hidden="true" />

      <div className="prelude-inner">
        <motion.p
          className="prelude-kicker"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Crafting immersive interfaces
        </motion.p>

        <motion.h1
          className="prelude-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ONUR BELEK
        </motion.h1>

        <div className="prelude-scene" aria-hidden="true">
          <div className="prelude-ring prelude-ring-one" />
          <div className="prelude-ring prelude-ring-two" />
          <div className="prelude-prism-wrap">
            <div className="prelude-prism-face" />
            <div className="prelude-prism-face" />
            <div className="prelude-prism-face" />
            <div className="prelude-prism-face" />
            <div className="prelude-prism-face" />
            <div className="prelude-prism-face" />
          </div>

          <div className="prelude-bars">
            {bars.map((_, idx) => (
              <span key={idx} style={{ animationDelay: `${idx * 0.08}s` }} />
            ))}
          </div>
        </div>

        <div className="prelude-progress" aria-label="Loading">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  );
}
