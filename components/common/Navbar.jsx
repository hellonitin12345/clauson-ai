"use client"

import { useState } from "react"
import Link from "next/link"
import Button1 from "@/components/Ui/Button1"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <header className="relative z-50 w-full bg-white">

        {/* NAVBAR BACKGROUND CLIP (IMPORTANT FIX) */}
        <div className="relative overflow-hidden">
          {/* BLUE BLUR (STRICTLY NAVBAR HEIGHT) */}
          <div
            aria-hidden
            className="absolute top-0 -left-20 w-50 h-40 lg:w-100 lg:h-50 bg-[#B1E0FC] opacity-20 blur-lg pointer-events-none"
          />

          {/* NAVBAR */}
          <nav className="relative z-10 grid grid-cols-2 md:grid-cols-3 items-center md:px-4 lg:px-0 border-b border-black/10">
            {/* LOGO */}
            <div className="text-xl lg:text-4xl flex items-center lg:pl-20 py-4 lg:py-9">
              <h1 className="text-black font-clauson">ClausonAI</h1>
            </div>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex text-xl justify-between py-9">
              <Link href="#whyUs">Why Us</Link>
              <Link href="#solution">Solutions</Link>
              <Link href="#testimonials">Testimonials</Link>
            </div>

            {/* BUTTON + HAMBURGER */}
            <div className="flex justify-end items-center py-4 pr-4">
              <div className="hidden md:block">
                <Button1 lable="Try Now" className="w-28 lg:w-35" />
              </div>

              <button
                className="md:hidden text-3xl transition-transform duration-300"
                onClick={() => setOpen(!open)}
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </nav>
        </div>

        {/* MOBILE MENU (SEPARATE FROM BLUR) */}
        <div
          className={`md:hidden bg-white transition-all duration-500 ease-in-out
          ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="flex flex-col text-xl">
            <Link
              href="#whyUs"
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-b border-black/10"
            >
              Why Us
            </Link>

            <Link
              href="#solution"
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-b border-black/10"
            >
              Solutions
            </Link>

            <Link
              href="#testimonials"
              onClick={() => setOpen(false)}
              className="px-6 py-4 border-b border-black/10"
            >
              Testimonials
            </Link>

            <div className="p-6">
              <Button1 lable="Try Now" className="w-full" />
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar
