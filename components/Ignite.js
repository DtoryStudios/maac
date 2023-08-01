import React, { useState } from "react";
import FormPopup from "./FormPopup";

function Ignite() {
  const [formPopupOpen, setFormPopupOpen] = useState(false);

  return (
    <div className="py-20 ignite-image flex flex-col justify-center px-6 lg:px-20">
      <h1 className="text-white text-5xl font-extrabold text-center lg:text-left">
        Ignite the
      </h1>
      <h2 className="text-5xl text-white font-extrabold mt-1 text-center lg:text-left leading-[1.3]">
        <span className="text-[#EAC435]">Creative Fire</span> Within
      </h2>
      <p className="lg:w-[460px] text-center lg:text-left text-white font-light mt-7 text-sm leading-8">
        Awaken the Boundless Depths of Your Imagination to Transform Ideas into
        Extraordinary Masterpieces of Art and Expression with MAAC Durgapur.
      </p>
      <button
        onClick={() => setFormPopupOpen(true)}
        className="text-black px-5 py-4 lg:py-2 bg-[#EAC435] text-sm lg:w-fit rounded-md mt-6"
      >
        Apply now
      </button>
      <FormPopup open={formPopupOpen} setOpen={setFormPopupOpen} />
    </div>
  );
}

export default Ignite;
