/* eslint-disable @next/next/no-img-element */
import React from "react";

function Softwares() {
  return (
    <div className="bg-[#340068] lg:h-[305px] w-full py-16">
      <h2 className="text-center text-xl font-light text-[#E4E4E4] tracking-widest">
        SOFTWARES WE USE
      </h2>
      <h3 className="text-center text-sm text-[#A3A3A3] mt-3">
        Top industry standards and software for professionals.
      </h3>
      <div className="lg:flex lg:items-center lg:justify-center lg:space-x-12 grid grid-cols-2 gap-10 px-7 mt-20 lg:mt-10">
        <img
          src="/asset/adobe.png"
          className="h-16 lg:h-24 mix-blend-luminosity"
          alt=""
        />
        <img
          src="/asset/maya.png"
          className="h-20 lg:h-24 mix-blend-luminosity"
          alt=""
        />
        <img
          src="/asset/nuke.png"
          className="h-10 lg:h-12 mix-blend-luminosity"
          alt=""
        />
      </div>
    </div>
  );
}

export default Softwares;
