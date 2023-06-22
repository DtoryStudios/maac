/* eslint-disable @next/next/no-img-element */
import React from "react";

function Projects() {
  return (
    <div className="lg:min-h-screen h-[550px] bg-white relative">
      <img
        src="/asset/project_outline.png"
        alt=""
        className="absolute -right-28 lg:right-0 top-6 lg:top-20 h-32 lg:h-44 opacity-70 object-contain"
      />
      <div className="mt-0 absolute inset-0 h-full w-full pt-20 lg:pt-40 lg:px-20">
        <h1 className="text-3xl lg:text-6xl font-bold text-right px-7">
          Project showcase
        </h1>

        <div className="mt-16 lg:mt-36">
          <div className="flex items-center shrink-0 mt-10 space-x-2 overflow-auto pl-7">
            <div className="h-56 w-56 bg-red-50 shrink-0"></div>
            <div className="h-56 w-56 bg-red-50 shrink-0"></div>
            <div className="h-56 w-56 bg-red-50 shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
