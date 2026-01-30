'use client'
import { useState } from "react";
import Lables from "@/components/Ui/Lables";

const faqs = [
  {
    q: "Lorem ipsum dolor sit amet, consectetur loream loream loream loream loream loream",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
  },
  {
  
    q: "Lorem ipsum dolor sit amet",
    a: "Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.",
  },
  {
    q: "Lorem ipsum dolor sit amet aliquam",
    a: "Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
  },
  {
    q: "Lorem ipsum dolor sit amet in urna sit",
    a: "Ut et massa mi. Aliquam in hendrerit urna.",
  },
];

export default function Section07() {
  const [active, setActive] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4 mt-2">

      {/* Heading */}
      <div className="flex flex-col gap-2 items-center text-center">
        <Lables lable="Questions" heading="FAQ"/>
      </div>

      {faqs.map((item, index) => {
        const isOpen = active === index;

        return (
          <div key={index} className="relative mt-8 md:mt-10">

            {/* Question */}
            <button
              onClick={() => setActive(isOpen ? null : index)}
              className={["w-full sm:w-fit min-h-20 bg-[#10699E] text-white px-4 md:px-6 py-4 md:py-6 rounded-xl flex justify-between items-center gap-4 text-left"].join(" ")}>
              <span className="font-medium text-sm max-w-75 md:max-w-fit md:text-base">
                {item.q}
              </span>

              <span className={["text-xl md:text-2xl bg-gray-500 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center" ,
                "border border-solid pt-0.5 md:pb-1 lg:pb-2"].join(" ")}>
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Answer (overlay style) */}
            <div
              className={`absolute left-0 right-0 top-12 md:top-13 transition-all duration-500 ease-in-out
              ${isOpen ? "opacity-100 translate-y-0 mt-4 md:mt-6" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
              <div className="shadow-xl rounded-lg p-4 md:p-6 w-full sm:w-fit bg-white">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.a}
                </p>
              </div>
            </div>

            {/* Spacer */}
            <div
              className={`transition-all duration-500 ease-in-out
              ${isOpen ? "h-20 md:h-22" : "h-0"}`}
            />
          </div>
        );
      })}
    </div>
  );
}
