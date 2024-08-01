import { React, useEffect } from "react";

export default function Timeline() {
  return (
    <>
      <div className="antialiased relative" id="timeline">
        <h1 className="text-5xl font-bold pt-6 pb-2 md:text-center  border-separate   rounded-full underline underline-offset-8 decoration-cyan-500 pl-10 md:pl-0">
          Resume
        </h1>
        <div className="">
          {/* First Timestamp */}
          <div className="relative container mx-auto px-6 flex flex-col space-y-8 lg:space-y-28 pb-16 md:pb-12">
            <div className="z-0 line absolute w-2 h-full bg-white shadow-md left-16 inset-0 md:mx-auto md:right-0 md:left-0" />

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
                    University of Nottingham: 2018-2021
                  </span>
                  <h1 className="text-2xl font-bold pt-1 text-black">
                    Computer Science
                  </h1>
                  <p className="pt-1 text-black">
                    <span className="font-bold text-cyan-600 text-sm tracking-wide">
                      Key Modules:
                    </span>
                    &nbsp;Data Structures and Algorithms, Artificial
                    Intelligence and Machine Learning, Big Data Analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Second Timestop */}
            <div className="relative z-10 ">
              <div className="devSVG svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-cyan-600 xs:absolute md:mx-auto md:left-0 md:right-0 peopleSVG">
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
                  <span className="font-bold text-cyan-600 text-sm tracking-wide">
                    La Fosse Academy: Nov 2022 - Apr 2022
                  </span>
                  <h1 className="text-2xl font-bold pt-1 text-black">
                    Full-Stack Engineer Trainee
                  </h1>
                  <p className="pt-1 text-black">
                    <span className="font-bold text-cyan-600 text-sm tracking-wide">
                      Technical Skills:
                    </span>{" "}
                    Agile, CLI, Git, Github, HTML/CSS, Tailwind, JavaScript,
                    Node.js, Express, SQL, NoSQL, React, Django, Flask.
                  </p>
                </div>
              </div>
            </div>

            {/* Third Timestamp */}
            <div className="relative z-10 ">
              <div className="seoSVG svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-cyan-600 xs:absolute md:mx-auto md:left-0 md:right-0">
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
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>

              <div className="bubble3 text-bubble relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:pl-0 md:pr-16 md:ml-0 md:mr-auto">
                <div
                  className="absolute inset-0 left-9 h-4 w-4 transform rotate-45  bg-slate-100 xs:top-11 xs:left-26 md:left-auto md:right-14"
                  aria-hidden="true"
                ></div>
                <div className="test  bg-slate-100 p-6 rounded-lg shadow-md  tracking-wide">
                  <span className="font-bold text-cyan-600 text-sm tracking-wide">
                    Sparta Global: Jun 2022 - Sept 2023
                  </span>
                  <h1 className="text-2xl font-bold pt-1 text-black">
                    Graduate Software Engineer
                  </h1>
                  <p className="pt-1 text-black">
                    <span className="font-bold text-cyan-600 text-sm tracking-wide">
                      Technical Skills:
                    </span>{" "}
                    Architected and developed full-stack web applications using
                    React, TypeScript, FastAPI, MongoDB, OpenAI API, and WebEx
                    bots to streamline building management for Sparta's Client.
                    Enhanced operational efficiency with predictive maintenance
                    and real-time data analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Fourth Timestop */}
            <div className="relative z-10 ">
              <div className="devSVG svg-container w-[6rem] h-[6rem] p-4 rounded-full shadow-md  bg-cyan-600 xs:absolute md:mx-auto md:left-0 md:right-0 peopleSVG">
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
                  <span className="font-bold text-cyan-600 text-sm tracking-wide">
                    Meiyo Solutions: Oct 2023 - Now
                  </span>
                  <h1 className="text-2xl font-bold pt-1 text-black">
                    Software Engineer
                  </h1>
                  <p className="pt-1 text-black">
                    <span className="font-bold text-cyan-600 text-sm tracking-wide">
                      Technical Skills:
                    </span>{" "}
                    Full Stack Engineer on the Product Engineering team, using
                    React Native, TypeScript, Next.js, and AWS to develop
                    full-stack features for car dealership software on web and
                    mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
