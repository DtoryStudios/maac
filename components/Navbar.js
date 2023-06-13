/* eslint-disable @next/next/no-img-element */
import React from "react";

function Navbar() {
  return (
    <div className="bg-[#1E1E24] h-[80px] lg:h-[100px] flex items-center lg:px-16 px-6">
      <img src="/asset/logo.svg" className="lg:h-20 h-12" alt="" />
      <ul className="text-white/90 hidden lg:flex items-center text-sm space-x-9 font-light ml-16 shrink-0">
        <li>Courses</li>
        <li>About us</li>
        <li>Showcase</li>
        <li>Testimonials</li>
        <li>Placement</li>
        <li>Contact us</li>
      </ul>
      <div className="ml-auto hidden lg:flex items-center text-white px-5 w-[300px] h-[50px] bg-[#30303a] focus-within:border-white rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search for courses"
          className="bg-transparent outline-none text-sm text-white w-full placeholder:text-white/60 ml-4"
        />
      </div>
      <button className="ml-auto text-white lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Navbar;
