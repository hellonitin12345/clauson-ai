"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";
import Lables from "@/components/Ui/Lables";

const Section02 = () => {
  const data = [
    {
      title: "Choose Document Type",
      desc: "Select from NDAs, service agreements, employment contracts, or loan agreements.",
      icon: "/mouse2.png",
      video: "/sample-video-1.mp4",
    },
    {
      title: "Answer Simple Questions",
      desc: "Our wizard walks you through a few questions about your specific needs.",
      icon: "/airplane-square.png",
      video: "/sample-video-2.mp4",
    },
    {
      title: "Download & Use",
      desc: "Get your professional document instantly. Edit, save, and download as PDF or DOCX.",
      icon: "/mouse2.png",
      video: "/sample-video-1.mp4",
    },
  ];

  const videoRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleStepChange = (index) => {
    if (index === activeIndex) return;

    setIsFading(true);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);

    setTimeout(() => {
      setActiveIndex(index);
      setIsFading(false);
    }, 200);
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
    <div className="main-parent grid max-w-[90%] mx-auto mt-20 lg:mt-30 gap-10">
      <Lables lable="Creation" heading="How It Works" />

      {/* VIDEO */}
      <div className="relative w-full mt-5 overflow-hidden aspect-video">
        <video
          ref={videoRef}
          src={data[activeIndex].video}
          onClick={handlePause}
          className={`w-full h-full object-cover rounded-xl lg:rounded-2xl
            transition-opacity duration-200 ease-in-out
            ${isFading ? "opacity-0" : "opacity-100"}
          `}
        />

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 m-auto w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#B1E0FC] flex items-center justify-center hover:bg-[#9fd9fb] transition"
          >
            <Play className="text-white" />
          </button>
        )}
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {data.map((items, index) => {
          const isActive = activeIndex === index;

          return (
            <div key={index} className="w-full">
              <div
                onClick={() => handleStepChange(index)}
                className={`cursor-pointer rounded-2xl p-0.75 transition
                  ${
                    isActive
                      ? "bg-linear-to-r from-[#E6F6FF] via-[#0000000A] to-[#0CA4FF]"
                      : "bg-transparent"
                  }
                `}
              >
                <div
                  className={`rounded-xl p-2 transition
                    ${isActive ? "bg-white" : "bg-transparent"}
                  `}
                >
                  <div
                    className={`pl-5 lg:pl-8 pt-4 pb-8 lg:pb-10 flex flex-col gap-3 lg:gap-4 rounded-xl transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#B1E0FC]"
                          : "bg-[#0D0D0D0D]"
                      }
                    `}
                  >
                    <h2
                      className={`flex items-center gap-3 text-lg lg:text-xl font-medium font-clauson
                        ${
                          isActive
                            ? "text-[#121215]"
                            : "text-[#000000B2]"
                        }
                      `}
                    >
                      <Image
                        src={items.icon}
                        alt={items.title}
                        width={28}
                        height={28}
                        priority={index === 0}
                      />
                      {items.title}
                    </h2>

                    <p
                      className={`max-w-full lg:max-w-86 text-sm lg:text-[16px] font-normal font-clauson
                        ${
                          isActive
                            ? "text-[#121215]"
                            : "text-[#000000B2]"
                        }
                      `}
                    >
                      {items.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section02;
