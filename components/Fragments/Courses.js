/* eslint-disable @next/next/no-img-element */
import React from "react";

function Courses() {
  return (
    <div className="lg:min-h-screen min-h-[550px] bg-black relative pb-20 lg:pb-32  ">
      <img
        src="/asset/courses_outline.png"
        alt=""
        className="absolute -left-28 lg:left-0 top-6 lg:top-20 h-32 lg:h-44 opacity-70 object-contain"
      />
      <div className="mt-0 inset-0 h-full w-full pt-20 lg:pt-40 lg:px-20">
        <h1 className="text-3xl lg:text-6xl font-bold text-left px-7 text-white">
          Our courses
        </h1>

        <div className="mt-16 lg:mt-36">
          <div className="h-[557px] w-[1100px] relative ">
            <img
              src="/asset/visual_effects.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
