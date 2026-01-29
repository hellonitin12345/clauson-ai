'use client'
import { useState } from "react";

const plans = [
  {
    title: "Free Plan",
    monthly: "Free",
    yearly: "Free",
    features: [
      "10 credits (5 documents)",
      "20 chat messages per day",
      "All document types",
      "PDF & DOCX export",
    ],
  },
  {
    title: "Standard Plan",
    monthly: 29,
    yearly: 290,
    recommended: true,
    features: [
      "50 credits (25 documents)",
      "100 chat messages per day",
      "Priority support",
      "Document templates",
    ],
  },
  {
    title: "Premium Plan",
    monthly: 99,
    yearly: 990,
    features: [
      "200 credits (100 documents)",
      "Unlimited chat messages",
      "Custom templates",
      "API access",
    ],
  },
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-white relative">
      
      {/* BIG HEADING – Desktop only overlay */}
      <h1 className="hidden md:block absolute inset-x-0 top-10 text-center text-[160px] text-[#10699E] font-clauson font-medium z-0">
        Pricing
      </h1>

      {/* MOBILE HEADING */}
      <h1 className="md:hidden text-center text-5xl font-clauson text-[#10699E] mb-12">
        Pricing
      </h1>

      {/* CARDS */}
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 md:mt-32 px-4">
          {plans.map((plan, index) => {
          const isActive = index === activeIndex;
          const price =
            plan.monthly === "Free"
              ? "Free"
              : isYearly
              ? `$${plan.yearly}`
              : `$${plan.monthly}`;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(1)}
              className={`
                rounded-xl border bg-white p-8 transition-all duration-300
                md:cursor-pointer
                ${
                  isActive
                    ? "md:scale-105 border-blue-500 shadow-xl opacity-80"
                    : "md:scale-95 border-gray-300 opacity-80"
                }
              `}
            >
              {/* HEADER */}
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500">{plan.title}</p>
                  {plan.recommended && (
                    <span className="px-3 py-1 text-xs font-semibold text-[#10699E] border border-[#B1E0FC] rounded-full bg-gradient-to-b from-[#B1E0FC63] to-white">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="flex items-end gap-2 mt-4">
                  <h2 className="text-4xl font-clauson">{price}</h2>
                  {price !== "Free" && (
                    <span className="text-gray-500">
                      / {isYearly ? "Year" : "Month"}
                    </span>
                  )}
                </div>
              </div>

              <hr className="mb-6" />

              {/* FEATURES */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition
                  ${
                    isActive
                      ? "bg-linear-to-b from-[#B1E0FC] to-[#218BCA] text-white"
                      : "border border-blue-400 text-blue-600 hover:bg-blue-50"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          );
        })}
      </div>

      {/* TOGGLE */}
      <div className="flex items-center justify-center md:justify-start gap-4 mt-14 max-w-6xl mx-auto px-4">
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative w-14 h-7 rounded-full transition ${
            isYearly ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
              isYearly ? "translate-x-7" : ""
            }`}
          />
        </button>
        <span className="font-clauson text-[#121215]">Billed Yearly</span>
      </div>
    </section>
  );
}
