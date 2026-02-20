import Button1 from "@/components/Ui/Button1"
import Button2 from "@/components/Ui/Button2"

const HeroSection = () => {
  return (
    <section className="relative transition-all duration-500">

      {/* TRUSTED USERS */}
      <div className="w-[90%] mx-auto flex justify-center mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between">

          {/* AVATARS */}
          <div className="flex items-center">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-[#B1E0FC] z-40" />
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-[#B1E0FC] -ml-2 z-30" />
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-[#B1E0FC] -ml-2 z-20" />
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-400 bg-[#B1E0FC] -ml-2 z-10 flex items-center justify-center text-xs md:text-base text-black/70">
              5M
            </div>
          </div>

          {/* TEXT */}
          <p className="font-clauson font-semibold text-sm md:text-xl text-center md:text-left text-black/70 md:pl-5">
            Trusted By 50M+ People Around The Globe
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-8 md:mt-0 grid gap-5 px-4 md:px-0">

        {/* HEADING */}
        <h1 className="font-clauson font-medium text-center
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl
          leading-snug md:leading-tight
          max-w-[95%] md:max-w-220 mx-auto">
          AI-Powered Legal Documents
          <span className="text-[#10699E]"> In Minutes, Not Hours</span>
        </h1>

        {/* DESCRIPTION */}
        <p className="font-clauson text-center text-base sm:text-lg md:text-xl
          text-black/70 max-w-[90%] md:max-w-234 mx-auto">
          Generate professional legal documents and get instant answers to
          your legal questions with our advanced AI assistant.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 md:mt-3">
          <Button1 lable="Chat Now" className="w-full sm:w-auto md:w-56" />
          <Button2 />
        </div>
      </div>

      {/* DECORATIVE IMAGES (DESKTOP ONLY) */}
      <div className="absolute top-45 left-12 md:top-30 md:left-30 w-10 md:w-fit">
        <img src="./Vector.png" alt="decorative-img" />
      </div>

      <div className="absolute top-25 right-5 md:top-5 md:right-30 w-10 md:w-fit">
        <img src="./Group 1000001781.png" alt="decorative-img" />
      </div>

      {/* BOTTOM BLUR (DESKTOP ONLY) */}
      <div className="hidden md:block relative w-full">
        <div
          id="corner-bottom-design"
          className="bg-[#B1E0FC] opacity-20 h-50 absolute -bottom-25 right-0 w-100 blur-lg"
        />
      </div>

    </section>
  )
}

export default HeroSection
