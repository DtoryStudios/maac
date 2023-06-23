/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Search from "./Search";

function Sidebar({ open, setOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);
  return (
    <>
      {open && (
        <div className="fixed inset-0 h-full w-full bg-[#1E1E24]">
          <div className="flex items-center justify-end px-5 py-8">
            <button onClick={() => setOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-9 h-9 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6">
            <div
              onClick={() => {
                setSearchOpen(true);
              }}
              className="bg-[#292932] h-12 rounded-md flex items-center px-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-white/50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <span className="text-white/50 ml-2">Search for a course</span>
            </div>
          </div>
          <ul className="px-8 mt-10 text-white space-y-10 text-lg">
            <li>Courses</li>
            <li>About us</li>
            <li>Showcase</li>
            <li>Testimonials</li>
            <li>Placement</li>
            <li>Contact us</li>
          </ul>
        </div>
      )}
      <Search open={searchOpen} setOpen={setSearchOpen} />
    </>
  );
}

export default Sidebar;
