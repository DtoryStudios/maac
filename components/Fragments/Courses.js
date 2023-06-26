/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import courses from "@/static/courses";

function Courses() {
  return (
    <div className="lg:h-[1150px] h-[700px] bg-black relative pb-20 lg:pb-32 overflow-hidden">
      <img
        src="/asset/courses_outline.png"
        alt=""
        className="absolute -left-28 lg:left-0 top-6 lg:top-20 h-32 lg:h-44 opacity-70 object-contain"
      />
      <div className="mt-0 inset-0 h-full w-full pt-20 lg:pt-40 lg:px-20">
        <h1 className="text-3xl lg:text-6xl font-bold text-left px-7 text-white">
          Our courses
        </h1>

        <div className="mt-6 carousel">
          <div className="container">
            <Swiper
              effect={"coverflow"}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              grabCursor={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {courses.map((course, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-red-500 h-[400px] w-[90%] relative">
                      <div className="absolute inset-0 w-full h-full bg-blue-100">
                        <img
                          src={course.image}
                          className="w-full absolute inset-0 h-full object-cover"
                          alt=""
                        />
                        <div className="absolute inset-0 h-full w-full z-20 flex flex-col justify-end p-6">
                          <h2 className="text-white font-bold text-2xl max-w-[760px] leading-10">
                            {course.name}
                          </h2>
                          <p className="text-white text-xs mt-6 lg:mt-2 font-light flex items-center">
                            <iconify-icon icon="mdi:clock"></iconify-icon>
                            <span className="ml-2">
                              Duration: {course.duration}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
