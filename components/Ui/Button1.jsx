"use client";
import { ArrowUpRight } from "lucide-react";

const Button1 = ({ lable, className = "" ,showIcon = true }) => {
  return (
    <button
      className={["py-3 px-7 bg-linear-to-b from-[#B1E0FC] to-[#218BCA]","font-sans rounded-lg cursor-pointer text-[13.55px]",
        "text-white font-semibold flex justify-center items-center gap-1",`${className}`,].join(" ")}
    >
      {lable} {showIcon && <ArrowUpRight />}
    </button>
  );
};

export default Button1;
