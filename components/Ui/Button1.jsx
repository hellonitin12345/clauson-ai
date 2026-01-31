"use client";
import { ArrowUpRight } from "lucide-react";

const Button1 = ({ lable, className = "" ,showIcon = true }) => {
  return (
    <button
      className={["px-4 py-2 text-sm md:py-3 md:px-7 bg-linear-to-b from-[#B1E0FC] to-[#218BCA]","font-sans rounded-lg cursor-pointer md:text-[13.55px] text-xs",
        "text-white font-semibold flex justify-center items-center gap-1",`${className}`,].join(" ")}
    >
      {lable} {showIcon && <ArrowUpRight size={20} className=""/>}
    </button>
  );
};

export default Button1;
