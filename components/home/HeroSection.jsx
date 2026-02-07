import Button1 from "@/components/Ui/Button1";
import Button2 from "@/components/Ui/Button2";

const HeroSection = () => {
  return (
    <>
      {/* TRUSTED USERS */}
      <div className="w-[90%] mx-auto h-26 flex justify-center mt-20 md:mt-20">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">

          <div className="flex items-center">
            <div className="w-7 h-7 md:w-12 md:h-12 rounded-full border-2 border-gray-500 relative z-40 bg-[#B1E0FC]" />
            <div className="w-7 h-7 md:w-12 md:h-12 rounded-full border-2 border-gray-500 -ml-2 relative bg-[#B1E0FC] z-30" />
            <div className="w-7 h-7 md:w-12 md:h-12 rounded-full border-2 border-gray-500 -ml-2 relative bg-[#B1E0FC] z-20" />
            <div className="flex justify-center pl-1.5 md:pl-0 items-center w-7 h-7 md:w-12 md:h-12 rounded-full border-2 border-gray-500 -ml-2 relative bg-[#B1E0FC] z-10 text-[11px] md:text-[15px] text-[#000000B2]">
              5M
            </div>
          </div>

          <div className="text-[#000000B2] flex items-center justify-center font-clauson">
            <p className="font-bold text-lg md:text-xl md:w-fit pl-0 md:pl-5 md:max-w-70 text-center md:text-left">
              Trusted By 50M+ People Around The Globe
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid gap-4 md:gap-5  md:mt-0 px-4 md:px-0">
        <div className="flex justify-center font-clauson font-medium">
          <h1 className="md:max-w-220 max-w-[300] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-15 text-center">
            AI-Powered Legal Documents
            <span className="text-[#10699E]"> In Minutes, Not Hours</span>
          </h1>
        </div>

        <div className="flex justify-center">
          <p className="font-clauson font-normal text-base sm:text-lg md:text-xl max-w-234 text-center text-[#000000B2]">
            Generate professional legal documents and get instant answers to your
            legal questions with our advanced AI assistant.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex sm:flex-row justify-center gap-4 md:gap-5 md:mt-3 mt-9">
          <Button1 lable="Chat Now" className="  md:w-56" />
          <Button2 />
        </div>
      </div>

      {/* DECORATIVE IMAGES */}
      <div className="md:block absolute md:top-85 md:left-35 left-4 top-83">
        <img src="./Vector.png" alt="decorative-img"  className="w-10 md:w-full"/>
      </div>

      <div className="md:block absolute md:top-65 top-63 right-5 md:right-35">
        <img src="./Group 1000001781.png" alt="decorative-img"  className="w-10 md:w-full"/>
      </div>

      {/* BOTTOM BLUR */}
      <div className="relative w-full mt-7 md:m-0">
        <div
          id="corner-bottom-design"
          className=" hidden md:block bg-[#B1E0FC] opacity-20 h-20 md:h-50 absolute -bottom-20 md:-bottom-25 right-0 w-50 md:w-100 blur-lg"
        ></div>
      </div>
    </>
  );
};

export default HeroSection;
