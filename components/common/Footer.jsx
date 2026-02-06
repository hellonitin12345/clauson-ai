import { Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <section className="w-full bg-white pt-15 ">
      {/* MAIN BLUE AREA */}
      <div className=" relative h-100 md:full md:mx-1 lg:mx-2 rounded-b-2xl bg-linear-to-r from-[#A1DAFF] to-[#B9E2FC]  overflow-hidden">

        {/* TEXT */}
         <h1 className="text-center text-white font-clauson font-medium lg:text-9xl
         sm:text-4xl md:text-5xl lg:-mt-18 lg:mb-55 lg:leading-33 lg:tracking-[-5%]">
          No paper work<br /> 
          no waiting rooms.<br />
          Just quick scan,
         </h1>

         <img className="absolute bottom-0  w-50  lg:left-115 lg:w-115" 
         src="/document.png" alt="" />
      </div>

      {/* FOOTER */}
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-6 text-sm text-gray-700">
        <p>© Jolly LLB.AI - Lorem Ipsum 2025. All rights reserved.</p>

        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <Instagram size={16} />
          </div>
          <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <Linkedin size={16} />
          </div>
          <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 cursor-pointer">
            <X size={16} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
