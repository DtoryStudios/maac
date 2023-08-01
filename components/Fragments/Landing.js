/* eslint-disable @next/next/no-img-element */
import courses from "@/static/courses";
import React, { useEffect, useState } from "react";
import Form from "../Form";
import FormPopup from "../FormPopup";

function Landing() {
  const [formPopupOpen, setFormPopupOpen] = useState(false);

  return (
    <>
      <div className="hero-image min-h-screen w-full lg:flex items-center py-28 lg:py-32 px-6 lg:px-28 lg:space-x-5">
        <div className="lg:w-1/2 relative">
          <img
            src="/asset/arrow_trail_right.png"
            className="absolute -right-10 top-32 lg:-top-28 h-[200px] hidden lg:block"
            alt=""
          />
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.4] lg:leading-[1.2] text-white">
            Build your career with the best.
          </h1>
          <p className="mt-6 leading-6 lg:leading-8 text-white lg:text-sm text-xs">
            Allow your imagination flame to come to life with energy. Our
            animation institute in Durgapur will help you to enhance your
            talents and prepare you for a successful career and higher
            opportunities
          </p>
          <button
            onClick={() => setFormPopupOpen(true)}
            className="text-sm px-7 py-3 lg:py-4 bg-[#EAC435] hover:bg-[#c2a12d] text-black mt-5 font-medium rounded font-poppins transition-all"
          >
            <span>Start Now - Admission Open 523</span>
          </button>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-16 lg:mt-0">
          <Form />
        </div>
      </div>
      <FormPopup open={formPopupOpen} setOpen={setFormPopupOpen} />
    </>
  );
}

export default Landing;
