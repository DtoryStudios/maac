/* eslint-disable @next/next/no-img-element */
import React from "react";

function Projects() {
  return (
    <div
      id="showcase"
      className="lg:h-[950px] h-[1550px] bg-white relative overflow-hidden"
    >
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
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shrink-0 mt-10 px-5">
            <div>
              <img
                src="/asset/project_1.png"
                alt=""
                className="h-[400px] w-[400px] object-cover"
              />
            </div>
            <div>
              <img
                src="/asset/project_2.png"
                alt=""
                className="h-[400px] w-[400px] object-cover"
              />
            </div>
            <div>
              <img
                src="/asset/project_3.png"
                alt=""
                className="h-[400px] w-[400px] object-cover"
              />
            </div>
          </div>
          <div className="h-96"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
