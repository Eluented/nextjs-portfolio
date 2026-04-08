import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const Hero = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 18, mass: 0.5 });
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 18, mass: 0.5 });
  const floatX = useTransform(springRotateY, [-10, 10], [-14, 14]);
  const floatY = useTransform(springRotateX, [-10, 10], [14, -14]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - 112;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  const handleHeroMotion = ({ currentTarget, clientX, clientY }) => {
    const bounds = currentTarget.getBoundingClientRect();
    const x = (clientX - bounds.left) / bounds.width;
    const y = (clientY - bounds.top) / bounds.height;

    rotateX.set((0.5 - y) * 14);
    rotateY.set((x - 0.5) * 18);
  };

  const resetHeroMotion = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section id="home" className="section-space hero-home-space pb-20 md:pt-44">
      <div className="container-edge hero-layout mt-14 grid items-center gap-10 md:mt-0 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div className="hero-copy-col" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="section-kicker hidden sm:block">Software Engineer | Open to Full-Time Roles</p>
          <h1 className="hero-heading">
            Onur Belek
            <span className="block hero-gradient">builds websites and apps that convert.</span>
          </h1>
          <p className="mb-6 mt-4 max-w-xl text-base text-slate-300 md:text-lg">
            Fast, polished product builds for teams and founders who care about quality,
            clarity, and real outcomes.
          </p>

          <div className="hero-scanline mb-7" aria-label="Primary services">
            <span>Websites</span>
            <span>Apps</span>
            <span>SEO + Performance</span>
          </div>

          <div className="hero-cta-row flex flex-wrap gap-3">
            <button type="button" onClick={() => scrollToSection("projects")} className="pill-button primary-btn cursor-pointer">
              View Case Studies
            </button>
            <button type="button" onClick={() => scrollToSection("contact")} className="pill-button secondary-btn cursor-pointer">
              Hire Me
            </button>
          </div>

          <p className="hero-support-note">Actively seeking full-time Software Engineer opportunities.</p>

          <div className="hero-mobile-panel sm:hidden" aria-hidden="true">
            <div className="hero-mobile-panel-top">
              <span className="hero-mobile-panel-kicker">Mobile first</span>
              <span className="hero-mobile-panel-chip">Selected stack</span>
            </div>

            <div className="hero-mobile-panel-grid">
              <article className="hero-mobile-panel-item">
                <span className="hero-mobile-panel-title">Performance</span>
                <p>Lean builds that feel instant on the first scroll.</p>
              </article>
              <article className="hero-mobile-panel-item">
                <span className="hero-mobile-panel-title">UX</span>
                <p>Clear hierarchy, strong touch targets, and sharp spacing.</p>
              </article>
              <article className="hero-mobile-panel-item">
                <span className="hero-mobile-panel-title">Stack</span>
                <p>Next.js, React, and Cloudflare-ready delivery.</p>
              </article>
              <article className="hero-mobile-panel-item">
                <span className="hero-mobile-panel-title">Outcome</span>
                <p>Portfolio content that reads premium and converts cleanly on a phone.</p>
              </article>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-wrap relative hidden sm:block"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          onMouseMove={handleHeroMotion}
          onMouseLeave={resetHeroMotion}
          style={{ perspective: 1400 }}
        >
          <motion.div
            className="hero-visual-stage "
            style={{ rotateX: springRotateX, rotateY: springRotateY }}
            
          >
            <motion.div className="tech-3d hero-cube mb-8" style={{ x: floatX, y: floatY }}>
              <div className="tech-aura tech-aura-one" aria-hidden="true" />
              <div className="tech-aura tech-aura-two" aria-hidden="true" />

              <div className="orbit-ring orbit-ring-outer">
                <span className="orbit-dot orbit-dot-cyan" />
              </div>
              <div className="orbit-ring orbit-ring-mid">
                <span className="orbit-dot orbit-dot-gold" />
              </div>

              <div className="cube cube-main">
                <div className="cube-face" />
                <div className="cube-face" />
                <div className="cube-face" />
                <div className="cube-face" />
                <div className="cube-face" />
                <div className="cube-face" />
              </div>

              <div className="cube-core" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
