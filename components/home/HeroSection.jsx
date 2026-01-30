import Button1 from "@/components/Ui/Button1";
import Button2 from "@/components/Ui/Button2";

const HeroSection = () => {
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

{/* button is here */}

                <div className='flex justify-center gap-5 mt-3'>
                    <Button1 lable="Chat Now" className="md:w-56"/>
                    <Button2/>
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

export default HeroSection