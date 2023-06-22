/* eslint-disable @next/next/no-img-element */
import React from "react";

function Testimonials() {
  return (
    <div className="lg:min-h-screen min-h-[550px] bg-[#F2F2F2] relative pb-20 lg:pb-10">
      <img
        src="/asset/testimonials_outline.png"
        alt=""
        className="absolute -left-28 lg:left-0 top-6 lg:top-20 h-32 lg:h-44 opacity-70 object-contain"
      />
      <div className="mt-0 inset-0 h-full w-full pt-20 lg:pt-40 lg:px-20">
        <h1 className="text-3xl lg:text-6xl font-bold text-left px-7">
          Testimonials
        </h1>

        <div className="mt-16 lg:mt-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10">
            <div className="bg-white rounded-md shrink-0 p-8">
              <div className="flex items-center text-sm">
                <img src="/asset/student.png" className="h-10" alt="" />
                <span className="ml-3">Ritu Majumder</span>
                <span className="ml-2">-</span>
                <span className="text-gray-500 font-light ml-2">
                  VFX Student
                </span>
              </div>
              <p className="mt-7 leading-7 text-sm">
                MAAC Durgapur is the best institute for Animation, VFX, and
                Graphics. They train all the students properly. Teachers teach
                the student perfectly and they use updated technology which
                helps in easy learning.
              </p>
            </div>
            <div className="bg-white rounded-md shrink-0 p-8">
              <div className="flex items-center text-sm">
                <img src="/asset/student.png" className="h-10" alt="" />
                <span className="ml-3">Ritu Majumder</span>
                <span className="ml-2">-</span>
                <span className="text-gray-500 font-light ml-2">
                  VFX Student
                </span>
              </div>
              <p className="mt-7 leading-7 text-sm">
                MAAC Durgapur is the best institute for Animation, VFX, and
                Graphics. They train all the students properly. Teachers teach
                the student perfectly and they use updated technology which
                helps in easy learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
