import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TRACK_PATH = "/audio/licensed-track.mp3";
const TRACK_CREDIT = "Music by Karl Casey @ White Bat Audio";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function SoundController() {
  const [enabled, setEnabled] = useState(false);
  const [trackReady, setTrackReady] = useState(false);

  const audioRef = useRef(null);
  const contextRef = useRef(null);
  const sourceRef = useRef(null);
  const analyserRef = useRef(null);
  const rafRef = useRef(null);
  const dataRef = useRef(null);

  const dispatchAudioState = (isEnabled) => {
    window.dispatchEvent(
      new CustomEvent("portfolio-audio-state", {
        detail: { enabled: isEnabled },
      })
    );
  };

  const dispatchAudioLevel = (level) => {
    window.dispatchEvent(
      new CustomEvent("portfolio-audio-level", {
        detail: { level: clamp(level, 0, 1) },
      })
    );
  };

  const stopMeter = () => {
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    dispatchAudioLevel(0);
  };

  const startMeter = () => {
    const analyser = analyserRef.current;
    const data = dataRef.current;

    if (!analyser || !data) {
      return;
    }

    const tick = () => {
      analyser.getByteFrequencyData(data);

      // Use weighted average of bins for smoother, musical intensity response
      let weightedTotal = 0;
      let weightSum = 0;

      for (let i = 1; i < data.length; i += 1) {
        const weight = 1 + i / data.length;
        weightedTotal += data[i] * weight;
        weightSum += weight;
      }

      const avg = weightSum ? weightedTotal / weightSum : 0;
      const normalised = clamp(avg / 190, 0, 1);
      dispatchAudioLevel(normalised);

      rafRef.current = window.requestAnimationFrame(tick);
    };

    tick();
  };

  const initAudioGraph = async () => {
    if (audioRef.current && contextRef.current && analyserRef.current) {
      return;
    }

    const audio = new Audio(TRACK_PATH);
    audio.loop = true;
    audio.preload = "metadata";
    audio.volume = 0.48;

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextCtor) {
      throw new Error("Web Audio API not supported in this browser.");
    }

    const context = new AudioContextCtor();
    const source = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();

    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.82;

    source.connect(analyser);
    analyser.connect(context.destination);

    audioRef.current = audio;
    contextRef.current = context;
    sourceRef.current = source;
    analyserRef.current = analyser;
    dataRef.current = new Uint8Array(analyser.frequencyBinCount);
  };

  const handleToggle = async () => {
    if (!trackReady) {
      return;
    }

    try {
      await initAudioGraph();

      const context = contextRef.current;
      const audio = audioRef.current;

      if (!context || !audio) {
        throw new Error("Audio graph did not initialise.");
      }

      if (enabled) {
        audio.pause();
        stopMeter();
        setEnabled(false);
        dispatchAudioState(false);
        return;
      }

      if (context.state === "suspended") {
        await context.resume();
      }

      await audio.play();
      startMeter();
      setEnabled(true);
      dispatchAudioState(true);
    } catch {
      stopMeter();
      setEnabled(false);
      dispatchAudioState(false);
    }
  };

  useEffect(() => {
    const verifyTrack = async () => {
      try {
        const response = await fetch(TRACK_PATH, { method: "HEAD", cache: "no-store" });
        setTrackReady(response.ok);
      } catch {
        setTrackReady(false);
      }
    };

    verifyTrack();
    dispatchAudioState(false);

    return () => {
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      dispatchAudioLevel(0);

      if (audioRef.current) {
        audioRef.current.pause();
      }

      if (contextRef.current && contextRef.current.state !== "closed") {
        contextRef.current.close();
      }
    };
  }, []);

  if (!trackReady) {
    return null;
  }

  return (
    <motion.div
      className="sound-toggle-wrap"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.4 }}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={`sound-toggle ${enabled ? "is-on" : ""}`}
        aria-pressed={enabled}
        disabled={!trackReady}
      >
        <span className="sound-toggle-dot" aria-hidden="true" />
        <span>{enabled ? "Sound On" : "Sound Off"}</span>
      </button>
      <p className="sound-toggle-credit">{TRACK_CREDIT}</p>
    </motion.div>
  );
}
