import Head from "next/head";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Proof from "../components/Proof";
import Testimonials from "../components/Testimonials";
import TrustStrip from "../components/TrustStrip";
import SectionSeam from "../components/SectionSeam";
import AudioRhythm from "../components/AudioRhythm";
import SoundController from "../components/SoundController";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Prelude from "../components/Prelude";

export default function Home() {
  const [showPrelude, setShowPrelude] = useState(true);

  useEffect(() => {
    if (!showPrelude) {
      document.body.classList.remove("prelude-lock");
      return;
    }

    document.body.classList.add("prelude-lock");

    return () => {
      document.body.classList.remove("prelude-lock");
    };
  }, [showPrelude]);

  return (
    <>
      <Head>
        <title>Onur Belek | Software Engineer</title>
        <meta
          name="description"
          content="Onur Belek is a software engineer building immersive, performant digital products across frontend and full-stack systems."
        />
        <meta
          name="keywords"
          content="Onur Belek, Software Engineer, Frontend Engineer, Full Stack Developer, React, Next.js, TypeScript"
        />
        <meta property="og:title" content="Onur Belek | Software Engineer" />
        <meta
          property="og:description"
          content="A modern developer portfolio featuring product-focused engineering work, animations, and interactive UI."
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/letter-o3.ico" />
      </Head>

      <div className="site-shell">
        <AnimatePresence>{showPrelude && <Prelude onComplete={() => setShowPrelude(false)} />}</AnimatePresence>
        <div className="ambient ambient-one" aria-hidden="true" />
        <div className="ambient ambient-two" aria-hidden="true" />
        <div className="ambient-grid" aria-hidden="true" />
        <Navbar />
        <Hero />
        <About />
        <SectionSeam />
        <Timeline />
        <SectionSeam />
        <Projects />
        <SectionSeam />
        <Proof />
        <SectionSeam />
        <Testimonials />
        <SectionSeam />
        <Services />
        <TrustStrip />
        <ContactMe />
        <Footer />
        <SoundController />
        <AudioRhythm />
      </div>
    </>
  );
}
