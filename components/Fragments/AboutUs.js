/* eslint-disable @next/next/no-img-element */
import React from "react";

function AboutUs() {
  return (
    <div className="lg:min-h-screen h-[550px] bg-white relative">
      <img
        src="/asset/about_outline.png"
        alt=""
        className="absolute -left-28 lg:left-0 top-6 lg:top-20 h-32 lg:h-44 opacity-70 object-contain"
      />
      <div className="mt-0 absolute inset-0 h-full w-full pt-20 lg:pt-40 lg:px-20 px-7">
        <h1 className="text-3xl lg:text-6xl font-bold">About us</h1>

        <div className="lg:flex lg:items-center mt-16 lg:mt-36">
          <div className="lg:w-1/2">
            <h3 className="font-medium text-lg lg:text-xl">
              Why Choosing MAAC?
            </h3>
            <p className="mt-5 text-xs lg:text-sm leading-6 lg:leading-7 text-[#2C2C2C]">
              MAAC is India&apos;s top media and entertainment education
              institute, shaping future creators in animation, gaming, and
              visual effects. With industry-focused courses, interactive
              sessions, and employment-driven education, MAAC equips students
              with necessary skills for success in today&apos;s competitive
              world. Its dynamic and innovative approach, along with
              beyond-the-classroom learning, ensures students remain relevant
              and employable throughout their careers.
            </p>
          </div>
          <div className="lg:w-1/2 hidden lg:flex items-center justify-center">
            <div className="h-56 w-[60%] bg-pink-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
