/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

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

        <div className="mt-6  carousel">
          <div className="container">
            <h1 className="heading">Flower Gallery</h1>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={false}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              <SwiperSlide>
                <div className="bg-red-500 h-[500px] w-[80%]"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-red-500 h-[500px] w-[80%]"></div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-red-500 h-[500px] w-[80%]"></div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="bg-red-500 h-[500px] w-[80%]"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
