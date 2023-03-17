import React from "react";

const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "projImg1",
    linkUrl: "xd",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "projImg2",
    linkUrl: "xd",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "projImg3",
    linkUrl: "xd",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "projImg1",
    linkUrl: "xd",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "projImg2",
    linkUrl: "xd",
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: "projImg3",
    linkUrl: "xd",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-screen  rounded-3xl  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900/90 to-black ">
      <div className="text-5xl font-bold text-center rounded-full flex justify-center items-center ">
        <h1 className="text-5xl font-bold  md:min-h-[8rem]   text-center flex justify-center items-center border-separate  w-1/4 rounded-3xl">
          My Projects
        </h1>
      </div>
    </div>
  );
}
