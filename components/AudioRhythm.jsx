import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";

// 18 bars — waveform shape defined by relative heights (0–1)
const BAR_BASES = [
  0.30, 0.52, 0.72, 0.88, 0.95, 0.82, 0.64, 0.44,
  0.60, 0.88, 0.95, 0.76, 0.52, 0.82, 0.66, 0.42, 0.58, 0.35,
];

// Each bar's idle oscillation speed (seconds) — varied for organic feel
const BAR_SPEEDS = [
  "0.92s", "1.14s", "0.76s", "1.30s", "1.02s", "0.88s", "1.24s", "0.72s",
  "1.08s", "0.96s", "0.82s", "1.18s", "1.38s", "0.68s", "1.04s", "0.92s", "1.10s", "0.80s",
];

// Phase delays so bars don't all peak at the same moment
const BAR_DELAYS = [
  "0s", "0.18s", "0.36s", "0.08s", "0.44s", "0.26s", "0.58s", "0.14s",
  "0.50s", "0.32s", "0.66s", "0.22s", "0.40s", "0.54s", "0.06s", "0.46s", "0.28s", "0.62s",
];

export default function AudioRhythm() {
  const barsWrapRef = useRef(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const externalAudioAmp = useMotionValue(0);
  const smoothAudioAmp = useSpring(externalAudioAmp, { stiffness: 90, damping: 18 });

  useEffect(() => {
    const handleAudioLevel = (event) => {
      const nextLevel = Number(event?.detail?.level || 0);
      externalAudioAmp.set(Number.isFinite(nextLevel) ? Math.min(Math.max(nextLevel, 0), 1) : 0);
    };

    const handleAudioState = (event) => {
      setAudioEnabled(Boolean(event?.detail?.enabled));
    };

    window.addEventListener("portfolio-audio-level", handleAudioLevel);
    window.addEventListener("portfolio-audio-state", handleAudioState);

    return () => {
      window.removeEventListener("portfolio-audio-level", handleAudioLevel);
      window.removeEventListener("portfolio-audio-state", handleAudioState);
    };
  }, [externalAudioAmp]);

  useAnimationFrame(() => {
    if (!barsWrapRef.current) {
      return;
    }

    if (!audioEnabled) {
      barsWrapRef.current.style.transform = "scaleY(1)";
      return;
    }

    const audioLevel = smoothAudioAmp.get();
    const scale = 1 + audioLevel * 1.15;
    barsWrapRef.current.style.transform = `scaleY(${scale.toFixed(3)})`;
  });

  if (!audioEnabled) {
    return null;
  }

  return (
    <motion.div
      className="rhythm-widget is-audio-active"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <div className="rhythm-bars-outer">
        <div className="rhythm-bars-inner" ref={barsWrapRef}>
          {BAR_BASES.map((base, i) => (
            <span
              key={i}
              className="rhythm-bar"
              style={{
                "--bar-base": base,
                "--bar-speed": BAR_SPEEDS[i],
                "--bar-delay": BAR_DELAYS[i],
              }}
            />
          ))}
        </div>
      </div>

      <div className="rhythm-live">
        <span className="rhythm-live-dot" />
        <span className="rhythm-live-label">AUDIO</span>
      </div>
    </motion.div>
  );
}
