import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 p-7 lg:px-28 lg:py-20 gap-10 lg:gap-24">
      <div>
        <h1 className="text-2xl text-[#340068] font-semibold">MAAC Durgapur</h1>
        <p className="text-sm text-[#323232] leading-6 mt-3">
          Address: Ambedkar Sarani CA/11, Ambuja, beside Union Bank, City
          Center, Durgapur, West Bengal 713216
        </p>
      </div>
      <div>
        <h1 className="text-xl text-black font-semibold">Quick Links</h1>
        <ul className="text-sm space-y-3 mt-5">
          <li>Courses</li>
          <li>About us</li>
          <li>Showcase</li>
          <li>Testimonials</li>
          <li>Placement</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-black font-semibold">Contact</h1>
        <ul className="text-sm space-y-3 mt-5">
          <li>Phone: +91 - 9333111777</li>
          <li>Email: durgapur@maacmail.com</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl text-black font-semibold">Connect with us</h1>
        <ul className="text-sm space-x-4 mt-5 flex items-center">
          <li>
            <iconify-icon
              height="24"
              width="24"
              icon="mdi:instagram"
            ></iconify-icon>
          </li>
          <li>
            <iconify-icon
              height="30"
              width="30"
              icon="mdi:youtube"
            ></iconify-icon>
          </li>
          <li>
            <iconify-icon
              height="24"
              width="24"
              icon="ic:baseline-facebook"
            ></iconify-icon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
