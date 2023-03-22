import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="h-screen w-screen xxl:w-full text-slate-100 justify-center items-center flex flex-col xxl:grid xxl:grid-cols-12"
      >
        <div className="w-full xxl:w-[35rem] mx-auto  h-full flex xxl:justify-center  items-center  xxl:items-start xxl:col-start-3 xxl:col-end-6  flex-col tracking-wide mt-[15vh] xxl:mt-0">
          <h2 className="mb-1 xxl:mb-2  text-base xxl:text-4xl font-bold  leading-none tracking-wide ">
            Hello, It&apos;s Me
          </h2>
          <h1 className="mb-1 xxl:mb-4 md:text-7xl text-5xl font-bold tracking-normal leading-none">
            Onur Belek
          </h1>
          <div className="flex items-start ">
            <h1 className="mb-4 text-base xxl:text-4xl font-bold  xxl:tracking-normal tracking-wide leading-none flex xxl:items-center">
              And I&apos;m a&nbsp;
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  strings: [
                    "Junior Java SDET.",
                    "Full Stack Developer",
                    "Tech Enthusiast.",
                  ],
                  wrapperClassName: "text-cyan-500 ",
                  skipAddStyles: true,
                  autoStart: true,
                }}
              />
            </h1>
          </div>
          <div className="short-description hidden xxl:flex">
            <p className="mt-1">
              I am a self-taught web developer who is currently attending Sparta
              Global to become a{" "}
              <span className="text-cyan-500 font-bold">
                Java automation engineer
              </span>
              .{" "}
            </p>
          </div>
          <div className="gap-8 mt-3 hidden xxl:flex">
            {/* LINKEDIN BUTTON */}
            <a
              href="https://www.linkedin.com/in/onur-belek-002085220/"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-linkedin hover:shadow-linkedin/60 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </a>
            {/* GITHUB BUTTON */}
            <a
              href="https://github.com/Eluented"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-github hover:shadow-github/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </a>
            {/* INSTAGRAM BUTTON */}
            <a
              href="https://www.instagram.com/_onur.b/?hl=en"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#c13584] hover:shadow-lg hover:shadow-instagram/60 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </a>
          </div>
          <div className="flex  w-full justify-center xxl:justify-start">
            <Link to="projects" activeClass="active" spy={true} duration={900}>
              <Button
                aria-label="Contact Submit"
                paddingX="24"
                paddingY="2"
                boxShadow="base"
                overflow="hidden"
                bgColor="#0891b2"
                _hover={{
                  bgColor: "#0e7490",
                }}
                rounded="full"
                marginTop="2"
                fontWeight="normal"
              >
                My Projects
              </Button>
            </Link>
          </div>

          <div className="flex gap-8 mt-3 xxl:hidden">
            {/* LINKEDIN BUTTON */}
            <a
              href="https://www.linkedin.com/in/onur-belek-002085220/"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-linkedin hover:shadow-linkedin/60 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </button>
            </a>
            {/* GITHUB BUTTON */}
            <a
              href="https://github.com/Eluented"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-github hover:shadow-github/60"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            </a>
            {/* INSTAGRAM BUTTON */}
            <a
              href="https://www.instagram.com/_onur.b/?hl=en"
              className="text-gray-500 hover:text-gray-900"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-500 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#c13584] hover:shadow-lg hover:shadow-instagram/60 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="w-full xxl:col-start-8 xxl:col-end-12 flex items-center justify-center xxl:justify-start p-20 xxl:p-0">
          <div className="hover:scale-105 duration-300 ease-in ">
            <Image
              src="/onurS2.png"
              width={500}
              height={500}
              className="rounded-full hover:shadow-2xl hover:shadow-cyan-600/20 mb-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
