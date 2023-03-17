import { Parallax } from "react-parallax";
import { React, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <>
      <Parallax
        bgImage="/lads.png"
        strength={-400}
        bgImageStyle={{
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "cover",
        }}
        alt="Background Image of Mountains"
      >
        {" "}
        <div
          id="about"
          className="bg-black/70 h-screen md:min-h-[45rem] xl:h-[50rem]"
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="md:text-5xl text-4xl text-center  font-semibold  ">
              My Goal
            </h1>
            <p className="md:text-2xl mt-5 text-center md:px-24 hidden md:block ">
              My ultimate goal is to make a positive impact in the tech industry
              and use my knowledge and skills to contribute to the world in a
              meaningful way. I am excited to apply my skills to real-world
              projects and to become the best version of myself.
            </p>

            {/* <p className="md:text-2xl text-xl mt-5 text-center md:px-24 block md:hidden px-6 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p> */}

            <div className="w-full mt-7 mx-10 flex flex-wrap justify-center md:gap-32  items-center px-[2rem] lg:px-0">
              <div className="p-4 flex flex-col justify-center items-center">
                <div className="design-svg-container w-16 h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </div>
                <p className="md:text-2xl mt-1 text-lg">Independent Learner</p>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <div className="support-svg-container w-16 h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <p className="md:text-2xl mt-1 text-lg timeline-trigger">
                  Interpersonal Skills
                </p>
              </div>
              <div className="p-4 flex flex-col justify-center items-center">
                <div className="pen-svg-container w-16 h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                    />
                  </svg>
                </div>
                <p className="md:text-2xl mt-1 text-lg">Hard Working</p>
              </div>

              <div className="p-4 flex flex-col justify-center items-center">
                <div className="code-svg-container w-16 h-16">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-full h-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <p className="md:text-2xl mt-1 text-lg">Detail-Oriented</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
}
