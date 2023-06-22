/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import AboutUs from "@/components/Fragments/AboutUs";
import Landing from "@/components/Fragments/Landing";
import Recruiters from "@/components/Recruiters";
import Projects from "@/components/Fragments/Projects";
import React, { useEffect, useState } from "react";

import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Softwares from "@/components/Softwares";
import Testimonials from "@/components/Fragments/Testimonials";
import Ignite from "@/components/Ignite";
import Footer from "@/components/Footer";

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

  return (
    <main className="w-full overflow-x-hidden">
      <Landing />
      <AboutUs />
      <Recruiters />
      <Projects />
      <Softwares />
      <Testimonials />
      <Ignite />
      <Footer />
    </main>
  );
}
