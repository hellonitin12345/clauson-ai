import { ArrowUpRight } from "lucide-react";
import "./Navbar.css"
const Hero = () => {
    return (
        <>
            <div className=' w-full h-26 flex justify-center mt-20'>
                <div className='flex justify-between'>
                    <div className=' flex items-center'>

                        <div className="w-12 h-12 rounded-full border-2 border-gray-500 relative z-40 bg-[#B1E0FC]"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-gray-500 -ml-3 relative bg-[#B1E0FC] z-30"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-gray-500 -ml-3 relative bg-[#B1E0FC] z-20"></div>
                        <div className="flex justify-center items-center w-12 h-12 rounded-full border-2 border-gray-500 -ml-3 relative bg-[#B1E0FC] z-10 text-xs text-[#000000B2]">5M</div>
                    </div>

                    <div className='text-[#000000B2] flex items-center justify-center font-clauson'><p className='font-bold text-xl w-fit pl-5 max-w-70'>Trusted By 50M+ People Around The Globe</p></div>
                </div>

            </div>

            <div className='  grid gap-5'>
                <div className='flex justify-center font-clauson font-medium text-6xl'>
                    <h1 className=' max-w-220 txt-h leading-15 text-center'> AI-Powered Legal Documents <span className='text-[#10699E]'>In Minutes, Not Hours</span></h1>
                </div>
                <div className='flex justify-center'>
                    <p className='font-clauson font-normal text-xl max-w-234 text-center text-[#000000B2]'>Generate professional legal documents and get instant answers to your legal questions with our advanced AI assistant.</p>
                </div>
                <div className='flex justify-center gap-5 mt-3'>
                    <button className='py-3 px-7 bg-linear-to-b from-[#B1E0FC] to-[#218BCA] font-sans w-56 flex justify-center items-center gap-1 text-[#FFFFFF] font-semibold rounded-lg cursor-pointer text-[13.55px]'>Chat Now <ArrowUpRight /> </button>

                    <button className='px-3 bg-linear-to-b from-[#B1E0FC63] to-[#FFFFFF] border border-solid border-[#B1E0FC] font-sans w-56 flex justify-center items-center gap-1  font-semibold rounded-lg tracking-normal cursor-pointer text-[13.55px] '>Create Document Now <ArrowUpRight /></button>
                </div>
            </div>

            <div className=' absolute top-85 left-35'> <img src="./Vector.png" alt="" /></div>
            <div className=' absolute top-65 right-35'> <img src="./Group 1000001781.png" alt="" /></div>
            
            <div className='relative w-full'>
                <div id='corner-bottom-design' className='bg-[#B1E0FC] opacity-20 h-50 absolute -bottom-25 right-0 w-100 blur-lg '></div>
            </div>
            
        </>
    )
}

export default Hero