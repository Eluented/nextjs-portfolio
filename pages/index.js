import Head from 'next/head'
import Baffle from "baffle-react";
import baffle from 'baffle';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  const [preloader, setPreload] = useState(true);

  const ref = useRef(null)

  const loaderRef = useRef(null)

  useEffect(() => {
    if (!preloader) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = useState(6)

  console.log(timer)
  const id = useRef(null)


  const clear = () => {
    window.clearInterval(id.current)
    setPreload(false)
  }

  // baffle scramble effect
  useEffect(() => {
    const target = baffle('.full-stack-dev')
    target.set({
      characters: "░▒< ▒><>▓ <█░>▒ ▓█▒ ▓<▒/█ ▓░▓░ ▓▒░ █░▒░ █▓█░",
      speed: 180
    })
    target.start()
    target.reveal(8500, 100)
  }, [])


  // timer for the preloader
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
  }, [])

  // if the timer is less than 0 - clear the preloader 
  useEffect(() => {
    if (timer < 0) {
      return clear();
    }
  }, [timer])

  useEffect(() => {
    const tl = gsap.timeline()

    tl.to(".panels .panel:first-child, .panels .panel:last-child", {
      scaleY: 1,
      duration: 1
    })
      .to(
        ".panels .panel:not(:first-child):not(:last-child)",
        { scaleY: 1 },
        "-=0.5"
      )
      .to(".panels .panel", {
        scaleY: 0,
        duration: 0.3,
        stagger: 0.05
      })
      .to(".panels", {
        clipPath: "circle(0%)",
        skewX: 0,
        duration: 1
      })
      .to(
        ".page-main",
        {
          clipPath: "circle(100%)",
          duration: 1
        },
        "-=0.3"
      );

    window.addEventListener("load", function () {
      tl.play();
    });
  }, [])

  useEffect(() => {
    const t2 = gsap.timeline()

    t2.fromTo(".content", { width: 0, left: 0 }, {
      width: "100%",
      left: "100%",
      ease: { duration: 2, ease: "power1.out", y: -500 },
    })
    // .set(".hero", {autoAlpha:0} )

    if (!preloader) {
      t2.play();
    }
  }, [preloader])

  return (
    <>
      {preloader ?
        <>
          <Head>
            <title>Onur | Full-Stack Developer</title>
            <meta name="description" content="Junior Full-Stack Developer" />
            <meta name="keywords" content="Onur Belek" />
            <link rel="icon" href="/favicon.ico" />
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
            <div className='loader-wrapper middle'>
              <h1 className='full-stack-dev text-5xl font-bold sm:text-6xl mb-3'>Onur Belek </h1 >
              <h2 className='full-stack-dev text-2xl'>Fullstack Developer</h2>
            </div>
          </main>

        </>
        :
        <>
        <Navbar />
        <Hero heading='Full-Stack Developer' message='Recent Graduate' />
        </>
      }


    </>

  )
}
{/* <div className='img_group'>
  <div className='img_group_inner'>
    <Image src='/assets/onur.png' alt='Onur Belek' width={200} height={400} />
  </div>
</div> */}