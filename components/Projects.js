import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Olympus",
    description: "Next.js, React, Tailwind, AWS Amplify",
    imgUrl: "/olympus.png",
    linkUrl: "https://www.olympusrestaurant.co.uk/",
  },
  {
    title: "Quizzical",
    description: "React, Redux, Axios",
    imgUrl: "/quizzical.png",
    linkUrl: "https://quizzicalquiz.netlify.app/",
  },
  {
    title: "Snake Game",
    description: "PHP, Laravel, SQL, Javascript",
    imgUrl: "/snakegame.png",
    linkUrl: "https://github.com/Eluented/snake-game-laravel",
  },
  {
    title: "Sigma Media",
    description: "HTML/CSS, Javascript, Socket.io, MongoDB",
    imgUrl: "/sigmamedia.png",
    linkUrl: "https://github.com/Eluented/SigmaMedia",
  },
  {
    title: "Sigma Hub",
    description: "React, Redux",
    imgUrl: "/sigmahub.png",
    linkUrl: "https://sigmahub.netlify.app/search",
  },
  {
    title: "Habitat",
    description: "HTML/CSS, Javascript, Docker, SQL",
    imgUrl: "/habitat.jpg",
    linkUrl: "https://github.com/Eluented/HABITAT",
  },
];

export default function Projects() {
  return (
    <div className="bg-black/40 pb-16">
      <div className="pl-[8vw] md:pl-0 ">
      <h1 className="text-5xl font-bold py-6 md:text-center  border-separate   rounded-full underline underline-offset-8 decoration-cyan-500">
        Work
      </h1>
      <p className="md:text-center">Check out some of my recent work</p>
      </div>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3  mt-5 px-5 ">
          {projects.map((project, index) => {
            return <ProjectCard {...project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
