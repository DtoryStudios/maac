import React, { useEffect } from "react";
import Form from "./Form";

function FormPopup({ open, setOpen }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 h-full w-full bg-black/70 backdrop-blur-sm z-30 flex items-center justify-center overflow-hidden">
          <div className="w-[90%] lg:w-fit">
            <Form setOpen={setOpen} open={open} />
          </div>
        </div>
      )}
    </>
  );
}

export default FormPopup;
