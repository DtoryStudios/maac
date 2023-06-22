/* eslint-disable @next/next/no-img-element */
import React from "react";

function Recruiters() {
  return (
    <div className="bg-[#340068] lg:h-[335px] w-full py-16">
      <h2 className="text-center text-xl font-light text-[#E4E4E4] tracking-widest">
        OUR RECRUITERS
      </h2>
      <h3 className="text-center text-sm text-[#A3A3A3] mt-3">
        We foster dynamic collaborations with exceptional partners
      </h3>
      <div className="lg:flex lg:items-center lg:justify-evenly grid grid-cols-2 gap-10 px-7 mt-20 lg:mt-0">
        <img
          src="/asset/green_gold.png"
          className="h-32 lg:h-44 mix-blend-luminosity"
          alt=""
        />
        <img
          src="/asset/redchilies.png"
          className="h-20 lg:h-28 mix-blend-luminosity"
          alt=""
        />
        <img
          src="/asset/technicolor.png"
          className="h-12 lg:h-16 mix-blend-luminosity"
          alt=""
        />
        <img
          src="/asset/dtory.png"
          className="h-10 lg:h-12 mix-blend-luminosity"
          alt=""
        />
        <img
          src="/asset/tata.png"
          className="h-10 lg:h-12 mix-blend-luminosity"
          alt=""
        />
      </div>
    </div>
  );
}

export default Recruiters;
