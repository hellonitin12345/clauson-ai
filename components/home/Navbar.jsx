import Link from 'next/link'
import Button1 from '@/components/Ui/Button1'

const Navbar = () => {
  return (
    <>
      <div
        id="corner-design"
        className={[
          "bg-[#B1E0FC]",
          "opacity-20 lg:h-50 w-50 h-40 lg:w-100",
          "absolute top-0 -left-20 flex justify-center blur-lg",
        ].join(" ")}
      ></div>

      <nav
        className={[
          "navbar w-full relative",
          "grid grid-cols-3 lg:grid-cols-3",
          "items-center md:px-4 lg:px-0",
        ].join(" ")}
      >
        {/* LOGO */}
        <div className="text-xl lg:text-4xl flex items-center h-full lg:pl-20 py-4 lg:py-9">
          <h1 className="text-black font-clauson">ClausonAI</h1>
        </div>

        {/* NAV LINKS (hidden on mobile) */}
        <div className=" lg:flex text-[#121215] items-center text-xl justify-between py-9">
          <Link href="#whyUs">Why Us</Link>
          <Link href="#solution">Solutions</Link>
          <Link href="#testimonials">Testimonials</Link>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end lg:justify-center py-4 lg:py-0">
          <Link href="/">
            <Button1 lable="Try Now" className="w-28 lg:w-35" />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
