"use client";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Lables from "@/components/Ui/Lables";

/* ---------------- TAB CONTENT ---------------- */
const TAB_CONTENT = [
  {
    label: "In House counsel",
    video: "/sample-video-1.mp4",
    title: "In House Counsel",
    text: "AI-powered in-house counsel streamlines compliance, monitors risks in real time, and provides intelligent legal insights to support smarter business decisions.",
  },
  {
    label: "Innovation  teams",
    video: "/sample-video-2.mp4",
    title: "Innovation Teams",
    text: "Empower innovation teams with faster research, smarter drafting, and AI-driven insights to build future-ready legal solutions.",
  },
  {
    label: "Transaction Work",
    video: "/sample-video-3.mp4",
    title: "Transaction Work",
    text: "Accelerate due diligence, contract review, and deal execution with AI that reduces risk and saves time.",
  },
  {
    label: "Litigation work",
    video: "/sample-video-4.mp4",
    title: "Litigation Work",
    text: "Strengthen litigation strategy with AI-assisted case analysis, document review, and predictive insights.",
  },
];

const Section04 = () => {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (index) => {
    if (index === activeTab) return;

    setIsAnimating(true);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsPlaying(false);

    setTimeout(() => {
      setActiveTab(index);
      setIsAnimating(false);
    }, 250);
  };

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="grid max-w-[90%] mx-auto mt-25" id="solution">
      <div className="flex flex-col gap-2 items-center md:px-10">
        <Lables lable="Solutions" heading="How Lawyers Use Our AI" />
        {/* ---------------- TABS ---------------- */}
        <div
          className={[
            "bg-[#0D0D0D0D] md:h-16 w-full mt-5 grid  md:grid-cols-4 md:gap-px gap-3 px-3 py-2 border border-solid border-[#12121533] rounded-xl mb-20",
          ].join(" ")}
        >
          {TAB_CONTENT.map((item, index) => (
            <div
              key={index}
              onClick={() => handleTabChange(index)}
              className={`cursor-pointer rounded-md pt-[2.5px] px-0.5 pb-[2.5px] md:pb-0 transition
                ${
                  activeTab === index
                    ? "bg-linear-to-r from-[#E6F6FF] via-[#0000000A] to-[#0CA4FF] "
                    : ""
                }`}
            >
              <div
                className={`rounded-sm p-0.75 
                    ${activeTab === index ? "bg-white" : ""}`}
              >
                <div
                  className={`rounded-sm flex justify-center items-center transition
                    ${activeTab === index ? "bg-[#B1E0FC]" : ""}`}
                >
                  <h1
                    className={`font-clauson font-medium text-sm uppercase py-2
                      ${
                        activeTab === index
                          ? "text-[#121215] "
                          : "text-[#000000B2]"
                      }`}
                  >
                    {item.label}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------------------------------------ CONTENT -------------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 border border-[#12121533] rounded-2xl overflow-hidden">
          {/* VIDEO */}
          <div className="relative md:w-210">
            <video
              ref={videoRef}
              src={TAB_CONTENT[activeTab].video}
              className={`w-full rounded-2xl transition-all duration-300
                ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                } `}
              onClick={handlePause}
            />
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className={[
                  "absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#B1E0FC]",
                  "flex items-center justify-center hover:bg-[#9fd9fb] transition",
                ].join(" ")}
              >
                <Play className="text-white" />
              </button>
            )}
          </div>

          {/* TEXT */}
          <div className="grid gap-4 md:grid-rows-2 justify-center">
            <div
              className={`grid md:items-end md:justify-center md:pl-36 md:pb-10 transition-all duration-300
                ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
            >
              <h1 className="md:max-w-64 font-clauson font-medium mt-2 md:mt-0 text-2xl md:text-3xl">
                {TAB_CONTENT[activeTab].title}
              </h1>
            </div>

            <div
              className={`grid justify-center items-start md:pl-60 transition-all duration-300 delay-75
                ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
            >
              <p className="max-w-85 font-clauson font-light text-[#000000B2] mb-5 md:mb-0 md:text-xl">
                {TAB_CONTENT[activeTab].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section04;
