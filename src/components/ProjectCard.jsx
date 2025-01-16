import { Link } from "wouter";
import React, { useState } from "react";

function ProjectCard({ img, title, text, url, bg, extraClasses }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative optima aspect-square bg-${bg} max-md:w-full cursor-pointer ${extraClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="card-img" className="object-cover w-full h-5/6" />
      <div className="flex flex-col justify-center gap-1 h-1/6">
        <p className={`flex items-center justify-center text-xs text-center text-${bg === "white" ? "[#407CE0]" : "white"} font-semibold`}>
          {title}
        </p>
        <p className={`flex items-center justify-center text-xs text-center text-${bg === "white" ? "black" : "white"}`}>
          {text}
        </p>
      </div>
      {/* Overlay */}
      {isHovered && (
        <Link href={`/projects/${url}`}>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full bg-black bg-opacity-50 h-5/6">
            <span className="text-sm text-white">View More Info</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ProjectCard;
