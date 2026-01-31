import React from "react";
import {ArrowUpRight} from 'lucide-react'

const Button2 = (btn2) => {
  return (
    
      <button className="px-4 py-2  md:px-3 bg-linear-to-b from-[#B1E0FC63] to-[#FFFFFF] border border-solid border-[#B1E0FC] font-sans md:w-56 flex justify-center items-center gap-1 md:text-[13.55px] text-xs font-semibold rounded-lg tracking-normal cursor-pointer ">
        Create Document Now <ArrowUpRight size={20}/>
      </button>
   
  );
};

export default Button2;
