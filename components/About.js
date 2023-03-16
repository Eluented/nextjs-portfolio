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
      <div className="antialiased min-h-screen">
        <div className="relative container mx-auto px-6 flex flex-col space-y-24 pb-16 md:pb-12">
          {/* First Timestamp */}
          <div className="line z-0 line absolute w-2 h-full bg-white shadow-md left-16 inset-0 md:mx-auto md:right-0 md:left-0"></div>
          <div className="relative z-10 ">
            <div className="svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-cyan-600 xs:absolute md:mx-auto md:left-0 md:right-0 designSVG">
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
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>

            <div className="bubble text-bubble relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:pl-0 md:pr-16 md:ml-0 md:mr-auto">
              <div
                className="absolute inset-0 left-9 h-4 w-4 transform rotate-45 bg-white xs:top-11 xs:left-26 md:left-auto md:right-14"
                aria-hidden="true"
              ></div>
              <div className="test bg-slate-100 p-6 rounded-lg shadow-md  tracking-wide">
                <span className="font-bold text-cyan-600 text-sm tracking-wide">
                  University of Nottingham: 2019-2021
                </span>
                <h1 className="text-2xl font-bold pt-1 text-black">
                  Medical Physiology and Therapeutics
                </h1>
                <p className="pt-1 text-black">
                  <span className="font-bold text-cyan-600 text-sm tracking-wide">
                    Key Modules:
                  </span>
                  &nbsp;We gather and analyze your requirements and objectives
                  to determine the scope of the project.
                </p>
                <p className="pt-2 text-black">
                  I 
                </p>
              </div>
            </div>
          </div>

          {/* Second Timestop */}
          <div className="relative z-10 ">
            <div className="devSVG svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-indigo-800 xs:absolute md:mx-auto md:left-0 md:right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.9}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            </div>

            <div className="bubble2 text-bubble relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16 ">
              <div
                className="absolute inset-0 left-9 h-4 w-4 transform rotate-45 bg-slate-100 xs:top-11 xs:left-26 md:left-14"
                aria-hidden="true"
              ></div>
              <div className="test bg-slate-100 p-6 rounded-lg shadow-md  tracking-wide">
                <span className="font-bold text-indigo-600 text-sm tracking-wide">
                  Stage Two
                </span>
                <h1 className="text-2xl font-bold pt-1 text-black">
                  Development
                </h1>
                <p className="pt-1 text-black">
                  <span className="font-bold text-indigo-600 text-sm tracking-wide">
                    Develop and launch:
                  </span>{" "}
                  We build and launch your website using the latest technologies
                  and programming languages.
                </p>

                <p className="pt-2 text-black">
                  We guarantee that the design plan & functional requirements
                  are met and integrate any necessary databases and APIs.
                </p>
              </div>
            </div>
          </div>

          {/* Third Timestamp */}
          <div className="relative z-10 ">
            <div className="seoSVG svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-indigo-800 xs:absolute md:mx-auto md:left-0 md:right-0">
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

            <div className="bubble3 text-bubble relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:pl-0 md:pr-16 md:ml-0 md:mr-auto">
              <div
                className="absolute inset-0 left-9 h-4 w-4 transform rotate-45  bg-slate-100 xs:top-11 xs:left-26 md:left-auto md:right-14"
                aria-hidden="true"
              ></div>
              <div className="test  bg-slate-100 p-6 rounded-lg shadow-md  tracking-wide">
                <span className="font-bold text-indigo-600 text-sm tracking-wide">
                  Stage Three
                </span>
                <h1 className="text-2xl font-bold pt-1 text-black">
                  Optimised Visibility
                </h1>
                <p className="pt-1 text-black">
                  <span className="font-bold text-indigo-600 text-sm tracking-wide">
                    SEO strategy:
                  </span>{" "}
                  We develop and implement an SEO strategy to ensure that your
                  website is optimized for search engines and can be easily
                  discovered by your target audience.
                </p>
              </div>
            </div>
          </div>

          {/* Fourth Timestamp */}
          <div className="relative z-10 ">
            <div className="mainSVG svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-indigo-800 xs:absolute md:mx-auto md:left-0 md:right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            </div>

            <div className="bubble4 text-bubble relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 ml-auto md:pl-16 ">
              <div
                className="absolute inset-0 left-9 h-4 w-4 transform rotate-45  bg-slate-100 xs:top-11 xs:left-26 md:left-14"
                aria-hidden="true"
              ></div>
              <div className="test  bg-slate-100 p-6 rounded-md shadow-md  tracking-wide">
                <span className="font-bold text-indigo-600 text-sm tracking-wide">
                  Stage Four
                </span>
                <h1 className="text-2xl font-bold pt-1 text-black">
                  Maintenance
                </h1>
                <p id="services_t" className="pt-1 text-black">
                  <span className="font-bold text-indigo-600 text-sm tracking-wide">
                    Support:
                  </span>{" "}
                  We provide ongoing maintenance and support to keep your
                  website running smoothly, fixing any bugs and addressing any
                  issues that arise. We are always here to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-screen"></div>
    </>
  );
}
