import React, { useEffect, useRef } from "react";

function Search({ open, setOpen }) {
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [open]);

  useEffect(() => {
    // esc key press

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    input.current && input.current.focus();
  }, []);

  const input = useRef(null);
  return (
    <>
      {open && (
        <div className="fixed inset-0 h-full w-full backdrop-blur bg-black/10 overflow-auto">
          <div className="p-6 lg:p-32">
            <div className="h-14 border border-white/20 lg:w-[60%] bg-[#212125] rounded-md flex items-center px-4 shadow-2xl shadow-white/50 lg:mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-5 h-5 text-white/50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                ref={input}
                type="text"
                placeholder="Search for a course"
                className="bg-transparent outline-none text-white w-full placeholder:text-white/60 ml-3"
                name=""
                id=""
              />
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="fixed left-1/2 -translate-x-1/2 bottom-5 lg:bottom-10 bg-white/80 h-16 w-16 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Search;
