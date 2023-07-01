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
  const returnBgUrl = (url) => {
    return `url(${url})`;
  };
  const slides = courses.map((course) => {
    return {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[900px] w-screen">
          <div className={`${course.bg}`}></div>
          <div className="absolute left-0 bottom-10 px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {course.name}
            </h2>
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

  const slidesCopy = [
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/pp3av.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[0].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[0].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[0].title,
      description: courses[0].description,
      link: courses[0].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/pp3ax.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[1].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[1].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[1].title,
      description: courses[1].description,
      link: courses[1].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/ewve.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[2].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[2].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[2].title,
      description: courses[2].description,
      link: courses[2].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/mgp.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[3].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[3].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[3].title,
      description: courses[3].description,
      link: courses[3].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/ven.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[4].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[4].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[4].title,
      description: courses[4].description,
      link: courses[4].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/3ap.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[5].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[5].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[5].title,
      description: courses[5].description,
      link: courses[5].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/avn.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[6].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[6].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[6].title,
      description: courses[6].description,
      link: courses[6].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/mdd.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[7].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[7].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[7].title,
      description: courses[7].description,
      link: courses[7].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/gdp.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[8].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[8].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[8].title,
      description: courses[8].description,
      link: courses[8].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/mgan.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[9].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[9].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[9].title,
      description: courses[9].description,
      link: courses[9].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/wdp.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[10].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[10].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[10].title,
      description: courses[10].description,
      link: courses[10].link,
    },
    {
      key: uuidv4(),
      content: (
        <div className="h-[500px] lg:h-[550px] lg:w-[1000px] w-screen">
          <div className="h-full w-full bg-red-50 bg-[url('/courses/cp.svg')]"></div>
          <div className="absolute left-0 bottom-10 px-6 lg:px-16 z-10">
            <h2 className="text-white text-xl lg:text-3xl font-bold">
              {courses[11].name}
            </h2>
            <p className="text-base mt-5 text-white flex items-center space-x-2">
              <iconify-icon icon="mdi:clock"></iconify-icon>
              <span> Duration: {courses[11].duration}</span>
            </p>
          </div>
        </div>
      ),
      title: courses[11].title,
      description: courses[11].description,
      link: courses[11].link,
    },
  ];
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
              slides={slidesCopy}
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
