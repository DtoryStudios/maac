import React from "react";

function Landing() {
  return (
    <div className="hero-image min-h-screen w-full lg:flex items-center py-28 lg:py-32 px-6 lg:px-28 lg:space-x-5 bg-red-50">
      <div className="lg:w-1/2">
        <h1 className="text-5xl lg:text-7xl font-bold leading-[1.4] lg:leading-[1.2] text-white">
          Build your career with the best.
        </h1>
        <p className="mt-6 leading-6 lg:leading-8 text-white lg:text-sm text-xs">
          Allow your imagination flame to come to life with energy. Our
          animation institute in Durgapur will help you to enhance your talents
          and prepare you for a successful career and higher opportunities
        </p>
        <button className="text-sm px-7 py-3 lg:py-4 bg-[#EAC435] hover:bg-[#c2a12d] text-black mt-5 font-medium rounded font-poppins transition-all">
          <span>Start Now - Admission Open 523</span>
        </button>
      </div>
      <div className="lg:w-1/2 flex items-center justify-center mt-16 lg:mt-0">
        <div className="w-full max-w-[500px] p-6 lg:p-8 bg-white/5 backdrop-blur-2xl text-white">
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
  );
}

export default Landing;
