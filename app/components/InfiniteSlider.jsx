'use client'
import { useEffect, useRef } from "react";
import "./InfiniteSlider.css";


const InfiniteSlider = () => {
  const sliderRef = useRef(null);
  const trackRef = useRef(null);

  let position = 0;
  let speed = 1;
  let animationId;

  useEffect(() => {
    const slider = sliderRef.current;
    const track = trackRef.current;
    const slides = track.querySelectorAll(".slide");

    // ✅ clone slides (same logic as your JS)
    slides.forEach(slide => {
      track.appendChild(slide.cloneNode(true));
    });

    const getSlideWidth = () => slider.offsetWidth;

    const animate = () => {
      position -= speed;

      const slideWidth = getSlideWidth();
      const totalWidth = slideWidth * slides.length;

      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // ✅ cleanup (important in React)
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <>
    <h1 className="font-bold text-4xl text-center font-clauson mt-40">Join the ranks of 500+ growing companies</h1>
    <div className="slider" ref={sliderRef}>
      <div className="track" ref={trackRef}>
        <div className="slide">
          <img src='./Logo (1).png' alt="Logo (1)" />
          <img src='./Logo (2).png' alt="Logo (2)" />
          <img src='./Logo (3).png' alt="Logo (3)" />
          <img src='./Logo (1).png' alt="Logo (1)" />
          <img src='./Logo (2).png' alt="Logo (2)" />
          <img src='./Logo (3).png' alt="Logo (3)" />
        </div>

        <div className="slide">
          <img src='./Logo (1).png' alt="Logo (1)" />
          <img src='./Logo (2).png' alt="Logo (2)" />
          <img src='./Logo (3).png' alt="Logo (3)" />
          <img src='./Logo (1).png' alt="Logo (1)" />
          <img src='./Logo (2).png' alt="Logo (2)" />
          <img src='./Logo (3).png' alt="Logo (3)" />
        </div>

        <div className="slide">
          <img src='./Logo (1).png' alt="Logo (1)" />
          <img src='./Logo (2).png' alt="Logo (2)" />
          <img src='./Logo (3).png' alt="Logo (3)" />
          <img src='./Logo (1).png' alt="Logo (1)" />
          <img src='./Logo (2).png' alt="Logo (2)" />
          <img src='./Logo (3).png' alt="Logo (3)" />
        </div>
      </div>
    </div>
    </>
  );
};

export default InfiniteSlider;