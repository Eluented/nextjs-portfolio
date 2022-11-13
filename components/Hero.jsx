import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { Parallax } from 'react-scroll-parallax';

const Hero = ({ heading, message }) => {



    return (
        <>
            <div className="hero flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover relative">
                {/* OVERLAY */}
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />

                <div className='title p-5 text-white z-[2] mt-[2rem]'>
                    <h2 className='text-5xl font-bold'>{heading}</h2>
                    <p className='py-5 text-xl'>{message}</p>
                    <button className='px-8 py-2 border'>Work in Progress</button>
                </div>

                <div className="image-wrapper w-screen h-screen" id="first">
                    <img className="w-full h-full object-cover absolute" src="lads.png" />
                </div>
                <div className="blur"></div>
            </div>

            <div className="hero flex flex-col items-center h-screen mb-12 bg-fixed bg-center bg-cover relative">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">Projects</h1>

                <h2 className='mt-20'>Did not have enough time to finish this :c</h2>
            </div>
        </>
        // <div className='hero flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
        // </div>

    )
}

export default Hero;