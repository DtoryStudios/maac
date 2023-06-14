/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  function Card(props) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];
    return (
      <div
        style={{
          width: "100%",
          height: "580px",
          userSelect: "none",
        }}
        className="my-slide-component"
      >
        <img
          style={{
            height: "580px",
            width: "100%",
            objectFit: "cover",
            borderRadius: 0,
          }}
          draggable={false}
          src={cover}
        />
      </div>
    );
  }
  const ids = ["one", "two", "three", "four", "five", "six"];
  const [active, setActive] = useState(0);

  const data = [
    {
      cover: "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
      title: "Interstaller",
    },
    {
      cover: "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
      title: "Inception",
    },
    {
      cover: "https://images6.alphacoders.com/875/thumb-1920-875570.jpg",
      title: "Blade Runner 2049",
    },
    {
      cover: "https://images6.alphacoders.com/114/thumb-1920-1141749.jpg",
      title: "Icon man 3",
    },
    {
      cover: "https://images3.alphacoders.com/948/thumb-1920-948864.jpg",
      title: "Venom",
    },
    {
      cover: "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
      title: "Steins Gate",
    },
    {
      cover: "https://images4.alphacoders.com/665/thumb-1920-665242.png",
      title: "One Punch Man",
    },
    {
      cover: "https://images2.alphacoders.com/738/thumb-1920-738176.png",
      title: "A Silent Voice",
    },
    {
      cover: "https://images8.alphacoders.com/100/thumb-1920-1005531.jpg",
      title: "Demon Slayer",
    },
    {
      cover: "https://images2.alphacoders.com/582/thumb-1920-582804.png",
      title: "Attack On Titan",
    },
  ];

  const ref = React.useRef();

  const update = (active) => {
    const element = document.getElementById(ids[active]);
    const width = element.offsetWidth;
    // scroll next element into view

    setTimeout(() => {
      const activeId = ids[active];
      const inactiveIds = ids.filter((id) => id !== activeId);

      inactiveIds.forEach((id) => {
        const element = document.getElementById(id);
        element.classList.remove("opacity-100");
        element.classList.add("opacity-50");
      });

      console.log(document.getElementById(activeId));
      document.getElementById(activeId).classList.remove("opacity-50");
      document.getElementById(activeId).classList.add("opacity-100");
    }, 650);
  };

  return (
    <main>
      <div className="hero-image w-full lg:flex items-center py-16 lg:py-32 px-6 lg:px-28 lg:space-x-5 bg-red-50">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.4] lg:leading-[1.3] text-white">
            Build your career with the best
          </h1>
          <p className="mt-5 leading-7 lg:leading-9 text-white lg:text-base text-sm">
            Allow your imagination flame to come to life with energy. Our
            animation institute in Durgapur will help you to enhance your
            talents and prepare you for a successful career and higher
            opportunities
          </p>
          <button className="text-sm px-7 py-3 lg:py-4 bg-[#4D0099] text-white mt-5 rounded font-poppins">
            <span>Start Now - Admission Open 523</span>
          </button>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-5">
          <div className="w-full max-w-[550px] p-6 lg:p-8 bg-white/5 backdrop-blur-2xl text-white">
            <h1 className="font-semibold text-lg font-poppins text-center">
              Career Counselling
            </h1>
            <form action="" className="grid grid-cols-2 gap-5 mt-8">
              <input
                type="text"
                placeholder="Your full name"
                className="bg-black/50 placeholder:text-white/50 px-5 py-5 col-span-2 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Your full name"
                className="bg-black/50 col-span-2 lg:col-span-1 placeholder:text-white/50 px-5 py-5 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Your full name"
                className="bg-black/50 col-span-2 lg:col-span-1 placeholder:text-white/50 px-5 py-5 rounded"
                name=""
                id=""
              />
              <input
                type="text"
                placeholder="Select your courses"
                className="bg-black/50 placeholder:text-white/50 col-span-2 px-5 py-5 rounded"
                name=""
                id=""
              />
              <div className="col-span-2">
                <button className="mt-5 w-full bg-white text-black text-center py-4 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="min-h-screen relative bg-black w-full py-28">
        <img src="/coursestext.png" alt="" className="absolute top-0 left-0" />
        <div className="px-28">
          <h1 className="text-white font-bold text-7xl">Our courses</h1>
        </div>
        <div className="mt-20">
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
              // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
              // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
              // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
              let currentVisibleSlide = 5;
              if (parentWidth <= 1440) currentVisibleSlide = 3;
              if (parentWidth <= 1080) currentVisibleSlide = 1;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Card}
                  slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
                  carouselWidth={parentWidth}
                  data={data}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={5}
                  useGrabCursor
                />
              );
            }}
          />
        </div>

        <div className="px-28 mt-5 text-white space-x-8">
          <button
            onClick={() => {
              ref.current?.goNext(6);
            }}
          >
            Right
          </button>
          <button
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            Left
          </button>
        </div>
      </div>
    </main>
  );
}
