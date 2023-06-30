/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import courses from "@/static/courses";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";

import { config } from "react-spring";
const Carousel = dynamic(() => import("react-spring-3d-carousel"), {
  ssr: false,
});

function Courses() {
  const slides = courses.map((course) => {
    return {
      key: uuidv4(),
      content: (
        <div className="h-[550px] w-[80vw] relative">
          <img src={course.image} alt={course.title} />
          <div className="absolute bottom-0 p-7 z-10">
            <h2 className="text-white text-3xl font-bold">{course.name}</h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {course.duration}</span>
            </p>
          </div>
        </div>
      ),
      title: course.title,
      description: course.description,
      link: course.link,
    };
  });
  const [state, setState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });
  return (
    <div className="lg:h-[1150px] h-[1000px] bg-black relative pb-20 lg:pb-32 overflow-hidden">
      <img
        src="/asset/courses_outline.png"
        alt=""
        className="absolute -left-28 lg:left-0 top-6 lg:top-20 h-32 lg:h-44 opacity-70 object-contain"
      />
      <div className="mt-0 inset-0 h-full w-full pt-20 lg:pt-40 lg:px-20">
        <h1 className="text-3xl lg:text-6xl font-bold text-left px-7 text-white">
          Our courses
        </h1>

        <div className="mt-36">
          <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            <Carousel
              slides={slides}
              goToSlide={state.goToSlide}
              offsetRadius={state.offsetRadius}
              animationConfig={state.config}
            />
          </div>

          <div className="flex items-center justify-between mt-24">
            <button
              className="text-white/50"
              onClick={() => {
                setState({
                  ...state,
                  goToSlide: state.goToSlide + 1,
                });
              }}
            >
              <iconify-icon
                height="70"
                icon="ph:arrow-left-thin"
              ></iconify-icon>
            </button>
            <button
              className="text-white/80"
              onClick={() => {
                setState({
                  ...state,
                  goToSlide: state.goToSlide - 1,
                });
              }}
            >
              <iconify-icon
                height="100"
                icon="ph:arrow-right-thin"
              ></iconify-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
