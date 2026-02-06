"use client"

import { useState } from "react"
import Link from "next/link"
import Button1 from "@/components/Ui/Button1"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* BACKGROUND DESIGN */}
      <div
        id="corner-design"
        className={[
          "bg-[#B1E0FC]",
          "opacity-20 lg:h-50 w-50 h-40 lg:w-100",
          "absolute top-0 -left-20 flex justify-center blur-lg",
        ].join(" ")}
      ></div>

      {/* NAVBAR */}
      <nav
        className={[
          "navbar w-full relative z-50",
          "grid grid-cols-2 md:grid-cols-3 items-center",
          "md:px-4 lg:px-0",
        ].join(" ")}
      >
        {/* LOGO */}
        <div className="text-xl lg:text-4xl flex items-center h-full lg:pl-20 py-4 lg:py-9">
          <h1 className="text-black font-clauson">ClausonAI</h1>
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex text-[#121215] items-center text-xl justify-between py-9">
          <Link href="#whyUs">Why Us</Link>
          <Link href="#solution">Solutions</Link>
          <Link href="#testimonials">Testimonials</Link>
        </div>

        {/* BUTTON + HAMBURGER */}
        <div className="flex justify-end lg:justify-center items-center py-4 lg:py-0 pr-4 lg:pr-0">
          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link href="/">
              <Button1 lable="Try Now" className="w-28 lg:w-35" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-3xl transition-transform duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={[
          "md:hidden fixed top-18 left-0 w-full bg-white shadow-lg",
          "transition-all duration-300 ease-in-out",
          "z-999",
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible",
        ].join(" ")}
      >
        <div className="flex flex-col gap-6 text-xl p-6">
          <Link href="#whyUs" onClick={() => setOpen(false)}>
            Why Us
          </Link>
          <Link href="#solution" onClick={() => setOpen(false)}>
            Solutions
          </Link>
          <Link href="#testimonials" onClick={() => setOpen(false)}>
            Testimonials
          </Link>

          <Link href="/" onClick={() => setOpen(false)}>
            <Button1 lable="Try Now" className="w-full" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
