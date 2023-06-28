'use client'

import { useThemeContext } from "@/providers/ThemeProvider";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

export default function FixedPlugin() {
  const { theme, setTheme } = useThemeContext()

  return (
    <button
      className="border-px fixed bottom-[30px] right-[35px] !z-[99] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[#6a53ff] bg-gradient-to-br from-brandLinear to-blueSecondary p-0"
      onClick={() => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }}
    >
      <div className="cursor-pointer text-gray-600">
        {theme === 'dark' ? (
          <RiSunFill className="h-4 w-4 text-white" />
        ) : (
          <RiMoonFill className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  );
}
