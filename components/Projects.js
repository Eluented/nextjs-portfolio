import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Rosalind's Tuition",
    description: "Next.js, React, Tailwind, Cloudflare",
    problem: "Outdated tutoring site with weak SEO, accessibility issues, and unstable deployment.",
    process: "Rebuilt the site with Next.js and Tailwind, improved local SEO/schema, fixed accessibility issues, and stabilised Cloudflare deployment.",
    outcome: "Launched a faster, mobile-first site with stronger search visibility and reliable production hosting setup.",
    metrics: ["Core pages rebuilt", "Mobile-first UX", "SEO + accessibility improved"],
    imgUrl: "/rosalindsTuition.webp",
    imgAlt: "Rosalind's Tuition website homepage on a laptop screen",
    linkUrl: "https://www.rosalindstuition.com/",
  },
  {
    title: "Belmont Autos",
    description: "Next.js, React, Tailwind, Cloudflare - Workers and R2 storage",
    problem: "Car dealership site needed a modern look and improved online booking functionality.",
    process: "Designed a clean, contemporary UI and rebuilt the site with Next.js, integrating Cloudflare Workers for fast, scalable performance and R2 for efficient media handling. Allowed client to change their content by submitting a CSV file to a Workers endpoint, which then updates the site content and media assets automatically.",
    outcome: "Enhanced user experience with a modern design and streamlined online booking process.",
    metrics: ["Mobile-first UX", "Performance-first setup, SEO optimised"],
    imgUrl: "/belmontAutos.webp",
    imgAlt: "Belmont Autos car dealership website shown in a modern desktop layout",
    linkUrl: "https://belmont-autos.onurbelek11.workers.dev/",
  },
  {
    title: "Island Imports",
    description: "Next.js, React, Tailwind, Cloudflare",
    problem: "Import business site needed a modern look and display products more effectively to drive inquiries.",
    process: "Designed a clean, contemporary UI and rebuilt the site with Next.js, integrating Cloudflare Workers for fast, scalable performance and R2 for efficient media handling. Allowed client to change their content by submitting a CSV file to a Workers endpoint, which then updates the site content and media assets automatically.",
    outcome: "Improved product presentation and increased inquiry generation.",
    metrics: ["Mobile-first UX", "Performance-first setup, SEO improvements"],
    imgUrl: "/islandImports.webp",
    imgAlt: "Island Imports website showcasing a modern product display",
    linkUrl: "https://island-imports.meiyosolutionltd.workers.dev/",
  },
  {
    title: "Olympus",
    description: "Next.js, React, Tailwind, Cloudflare - Workers",
    problem: "Restaurant site looked dated and did not convert traffic into bookings consistently.",
    process: "Reworked IA, tightened visual hierarchy, and rebuilt core pages with performance-first Next.js structure.",
    outcome: "Stronger clarity for menu and reservations, faster page speed, and improved conversion readiness.",
    metrics: ["Core pages rebuilt", "Mobile-first UX", "SEO + accessibility improved"],
    imgUrl: "/olympus.webp",
    imgAlt: "Olympus restaurant website featuring a polished menu and booking interface",
    linkUrl: "https://olympus.onurbelek11.workers.dev/",
  },
  {
    title: "Meiyo Solutions",
    description: "Next.js, React, Tailwind, Cloudflare - Workers",
    problem: "Needed a premium website that clearly presents services and builds trust with potential clients.",
    process: "Built a responsive Next.js site with Tailwind, interactive sections, portfolio/testimonials, and clear service flow (planning, development, SEO, maintenance)",
    outcome: "Delivered a modern, trustworthy website that effectively showcases services and attracts potential clients.",
    metrics: ["5 featured projects showcased", "4-stage service process communicated", "Testimonials highlight improved Google discoverability for clients"],
    imgUrl: "/meiyo.webp",
    imgAlt: "Meiyo Solutions website with a clean services and portfolio presentation",
    linkUrl: "https://meiyo.onurbelek11.workers.dev/",
  },

  {
    title: "Quizzical",
    description: "React, Redux, Axios",
    problem: "A simple quiz app needed cleaner state flow and a smoother question experience.",
    process: "Implemented Redux-driven architecture and refined component communication for predictable updates.",
    outcome: "Sharper UX with stable state transitions and cleaner maintainability for future expansion.",
    metrics: ["State architecture", "Faster interactions", "Scalable structure"],
    imgUrl: "/quizzical.webp",
    imgAlt: "Quizzical quiz app interface displaying a multiple-choice question screen",
    linkUrl: "https://quizzicalquiz.netlify.app/",
  },
  {
    title: "Snake Game",
    description: "PHP, Laravel, SQL, Javascript",
    problem: "Needed a playable browser game with persistent logic and backend-backed scoring flow.",
    process: "Built game mechanics and integrated Laravel + SQL backend endpoints for robust data handling.",
    outcome: "Delivered a full-stack game prototype with stable persistence and clear architecture boundaries.",
    metrics: ["Full-stack build", "Backend logic", "Persistent scoring"],
    imgUrl: "/snakegame.webp",
    imgAlt: "Snake game interface with retro-style gameplay and score display",
    linkUrl: "https://master.php-laravel-docker-snake-game.pages.dev/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container-edge">
        <p className="section-kicker">Case Studies</p>
        <h2 className="section-title">From challenge to measurable outcome</h2>
        <p className="section-copy">Each project below is framed as a concise story: the problem, the build strategy, and the result delivered.</p>

        <div className="project-rail mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            return <ProjectCard {...project} key={project.title} />;
          })}
        </div>
      </div>
    </section>
  );
}
