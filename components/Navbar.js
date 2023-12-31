/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Search from "./Search";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <div
      className={`${
        scroll ? "bg-[#1E1E24]" : "bg-[#1E1E24]/20"
      } fixed inset-x-0 top-0 h-[80px] lg:h-[90px] flex items-center lg:px-16 px-6 z-20 transition-all duration-300`}
    >
      <img src="/asset/logo.png" className="lg:h-16 h-12" alt="" />
      <ul className="text-white/90 hidden lg:flex items-center space-x-12 ml-16 shrink-0">
        <li
          onClick={() => {
            document
              .getElementById("courses")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Courses
        </li>
        <li
          onClick={() => {
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          About us
        </li>
        <li
          onClick={() => {
            document
              .getElementById("showcase")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Showcase
        </li>
        <li className="flex items-center relative group">
          <span>More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-3 h-3 ml-2 group-hover:rotate-180 transition-all"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          <div className="absolute -translate-x-1/2 top-0 left-1/2 w-32 hidden group-hover:block">
            <ul className="mt-10 h-full w-full bg-[#30303a] shadow-2xl rounded-md py-4 text-sm">
              <li
                onClick={() => {
                  document
                    .getElementById("testimonials")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-3 hover:bg-[#222229]"
              >
                Testimonials
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("placement")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-3 hover:bg-[#222229]"
              >
                Placement
              </li>
              <li
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="px-4 py-3 hover:bg-[#222229]"
              >
                Contact us
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        onClick={() => setSearchOpen(true)}
        className="ml-auto hidden lg:flex items-center text-white px-5 w-[300px] h-[50px] bg-[#30303a] focus-within:border-white rounded"
      >
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
          readOnly
          placeholder="Search for courses"
          className="bg-transparent outline-none text-sm text-white w-full placeholder:text-white/60 ml-4"
        />
      </div>
      <button
        onClick={() => setSidebarOpen(true)}
        className="ml-auto text-white lg:hidden"
      >
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
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <Search open={searchOpen} setOpen={setSearchOpen} />
    </div>
  );
}

export default Navbar;
