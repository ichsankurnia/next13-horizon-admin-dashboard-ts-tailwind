'use client'

import { useEffect, useState } from "react";
// Chakra Imports
// Custom Icons
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function FixedPlugin() {
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    setDarkmode(window.document.body.classList.contains("dark"))
  }, [])

  return (
    <button
      className="border-px fixed bottom-[30px] right-[35px] !z-[99] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[#6a53ff] bg-gradient-to-br from-brandLinear to-blueSecondary p-0"
      onClick={() => {
        if (darkmode) {
          window.document.body.classList.remove("dark");
          setDarkmode(false);
        } else {
          window.document.body.classList.add("dark");
          setDarkmode(true);
        }
      }}
    >
      {/* // left={document.documentElement.dir === "rtl" ? "35px" : ""}
      // right={document.documentElement.dir === "rtl" ? "" : "35px"} */}
      <div className="cursor-pointer text-gray-600">
        {darkmode ? (
          <RiSunFill className="h-4 w-4 text-white" />
        ) : (
          <RiMoonFill className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  );
}
