import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";

export default function Home() {
  const [preloader, setPreload] = useState(true);

  useEffect(() => {
    if (!preloader) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = useState(6);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  // timer for the preloader
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  }, []);

  // if the timer is less than 0 - clear the preloader
  useEffect(() => {
    if (timer < 0) {
      return clear();
    }
  }, [timer]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".panels .panel:first-child, .panels .panel:last-child", {
      scaleY: 1,
      duration: 1,
    })
      .to(
        ".panels .panel:not(:first-child):not(:last-child)",
        { scaleY: 1 },
        "-=0.5"
      )
      .to(".panels .panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05,
      })
      .to(".panels", {
        clipPath: "circle(0%)",
        skewX: 0,
        duration: 1,
      })
      .to(
        ".page-main",
        {
          clipPath: "circle(100%)",
          duration: 1,
        },
        "-=0.3"
      );

    window.addEventListener("load", function () {
      tl.play();
    });
  }, []);

  useEffect(() => {
    const t2 = gsap.timeline();

    t2.fromTo(
      ".content",
      { width: 0, left: 0 },
      {
        width: "100%",
        left: "100%",
        ease: { duration: 2, ease: "power1.out", y: -500 },
      }
    );
    // .set(".hero", {autoAlpha:0} )

    if (!preloader) {
      t2.play();
    }
  }, [preloader]);

  return (
    <>
      {preloader ? (
        <>
          <Head>
            <title>Onur Belek</title>
            <meta
              name="description"
              content="Meet Onur Belek - a Full Stack Developer and Tester with a passion for continuous learning and improvement. Explore his personal portfolio to see his impressive skills, experience, and projects. From automation solutions to full-stack development, Onur can tackle any challenge with expertise and drive. Don't miss out on the chance to work with one of the best - check out Onur's portfolio now!"
            />
            <meta
              name="keywords"
              content="Onur Belek, Java Automation, Full Stack Development, Continuous Learning, Problem-solving, Versatility, Automation Solutions, Software Engineering, Agile Methodology"
            />
            <link rel="icon" href="/letter-o3.ico" />
          </Head>
          <ul className="panels">
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
            <li className="panel"></li>
          </ul>

          <main className="page-main">
            <div className="loader-wrapper middle">
              <h1 className="full-stack-dev text-5xl font-bold sm:text-6xl mb-3 tracking-wide">
                Onur Belek{" "}
              </h1>
              <h2 className="full-stack-dev text-2xl ">
                Software Engineer
              </h2>
            </div>
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>Onur Belek | Software Engineer</title>
            <meta
              name="description"
              content="Meet Onur Belek - a Full Stack Developer and Tester with a passion for continuous learning and improvement. Explore his personal portfolio to see his impressive skills, experience, and projects. From automation solutions to full-stack development, Onur can tackle any challenge with expertise and drive. Don't miss out on the chance to work with one of the best - check out Onur's portfolio now!"
            />
            <meta
              name="keywords"
              content="Onur Belek, Java Automation, Full Stack Development, Continuous Learning, Problem-solving, Versatility, Automation Solutions, Software Engineering, Agile Methodology"
            />
            <link rel="icon" href="/letter-o3.ico" />
          </Head>
          <Navbar />
          <div className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black w-full h-full">
            <Hero />
            <About />
            <Timeline />
            <Projects />
            <ContactMe />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
{
  /* <div className='img_group'>
  <div className='img_group_inner'>
    <Image src='/assets/onur.png' alt='Onur Belek' width={200} height={400} />
  </div>
</div> */
}
