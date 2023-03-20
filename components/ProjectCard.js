import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ title, description, imgUrl, linkUrl }) {
console.log(title, description, imgUrl, linkUrl)
  return (
    <Link href={`${linkUrl}`}>
      <div className="proj-imgbx cursor-pointer">
        <img src={imgUrl} alt="crazy" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Link>
  );
}
