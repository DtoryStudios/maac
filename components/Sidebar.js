/* eslint-disable @next/next/no-img-element */
import React from "react";

function Sidebar({ open, setOpen }) {
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
          <ul className="px-8 text-white space-y-10 text-xl">
            <li>Courses</li>
            <li>About us</li>
            <li>Showcase</li>
            <li>Testimonials</li>
            <li>Placement</li>
            <li>Contact us</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
