import courses from "@/static/courses";
import React, { useState, useEffect } from "react";

function Form({ setOpen, open }) {
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

  const sendEmail = async () => {
    let endpoint = "/api/send";

    let params = {
      to: "priyangsu26@gmail.com",
      subject: "Form submission (MAAC)",
      text: "",
      html: `
              <div>
                <p>Name: ${formData.name}</p>
                <p>Phone: ${formData.phone}</p>
                <p>Email: ${formData.email}</p>
                <p>Course: ${formData.course}</p>
            </div>
         `,
    };

    let response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(params),
    });

    return response.json();

    // email will be delivered in the background
  };

  useEffect(() => {
    open
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "unset");
  }, [setOpen, open]);
  return (
    <>
      <div className="w-full lg:max-w-[500px] p-6 lg:p-8 bg-white backdrop-blur-2xl relative">
        {setOpen && (
          <button
            onClick={() => {
              setOpen(false);
              document.body.style.overflowY = "unset";
            }}
            className="absolute top-5 right-5 text-neutral-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="m8 8l32 32M8 40L40 8"
              />
            </svg>
          </button>
        )}
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
              const emailRes = await sendEmail();
              setLoading(false);
              alert("Form submitted successfully");
              setFormData({
                name: "",
                phone: "",
                email: "",
                course: "",
              });
              document.getElementById("courseInput").value = "";
            }
          }}
          className="grid grid-cols-2 gap-5 mt-8"
        >
          <input
            type="text"
            placeholder="Your full name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            id="courseInput"
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
      {loading && (
        <div className="fixed inset-0 h-full w-full z-30 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-32 h-32 border border-w border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
}

export default Form;
