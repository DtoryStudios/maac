/* eslint-disable @next/next/no-img-element */
import courses from "@/static/courses";
import React, { useEffect, useState } from "react";

function Landing() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });
  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [loading]);
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
          <button className="text-sm px-7 py-3 lg:py-4 bg-[#EAC435] hover:bg-[#c2a12d] text-black mt-5 font-medium rounded font-poppins transition-all">
            <span>Start Now - Admission Open 523</span>
          </button>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center mt-16 lg:mt-0">
          <div className="w-full max-w-[500px] p-6 lg:p-8 bg-white backdrop-blur-2xl relative">
            <span className="absolute -translate-y-1/2 tracking-wider top-0 left-4 uppercase text-sm py-1 px-4 rounded-full bg-[#340068] text-white font-medium">
              LIMITED
            </span>
            <h1 className="font-semibold text-lg font-poppins text-center">
              FREE Career Counselling
            </h1>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                const res = await fetch(
                  "https://script.google.com/macros/s/AKfycbx6nI4Z0nJFH5SbLreVfQBtBLUJMfeObyUEA5CQqlvb-dQEYiWE-05RoC-B4d8GJKfW/exec",
                  {
                    method: "POST",
                    body: JSON.stringify(formData),
                  }
                );
                const data = await res.json();
                if (data.status == true) {
                  setLoading(false);
                  alert("Form submitted successfully");
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    course: "",
                  });
                }
              }}
              className="grid grid-cols-2 gap-5 mt-8"
            >
              <input
                type="text"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="bg-[#CCCCCC] placeholder:text-black/50 px-5 py-5 col-span-2 rounded"
                name=""
                id=""
              />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="Your phone number"
                className="bg-[#CCCCCC] placeholder:text-black/50 col-span-2 lg:col-span-1 px-5 py-5 rounded"
                name=""
                id=""
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-[#CCCCCC] placeholder:text-black/50 col-span-2 lg:col-span-1 px-5 py-5 rounded"
                name=""
                id=""
              />

              <input
                type="text"
                list="browsers"
                required
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    course: e.target.value,
                  });
                }}
                placeholder="Select your courses"
                className="bg-[#CCCCCC] placeholder:text-black/50  col-span-2 px-5 py-5 rounded transition-all"
                name=""
                id=""
              />

              <datalist id="browsers">
                {courses.map((course, index) => {
                  return <option key={index} value={course.name} />;
                })}
              </datalist>
              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={
                    formData.name === "" ||
                    formData.phone === "" ||
                    formData.email === "" ||
                    formData.course === ""
                  }
                  className="mt-5 w-full disabled:opacity-50 bg-[#EAC435] text-black text-center py-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 h-full w-full z-30 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-32 h-32 border border-w border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}

export default Landing;
