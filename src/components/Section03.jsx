import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

const Section03 = () => {

    const videoRef = useRef(null);
        const [isPlaying, setIsPlaying] = useState(false);
    
        const handlePlay = () => {
            videoRef.current.play();
            setIsPlaying(true);
        };
    
        const handlePause = () => {
            videoRef.current.pause();
            setIsPlaying(false);
        };

    return (
        <div className='grid max-w-[90%] mx-auto mt-25' >

            <div className='flex flex-col gap-2 items-center px-10'>

                <div>
                    <span className='py-7 pr-25'> <button className='bg-[#B1E0FC40] flex justify-center items-center px-4 py-2 border border-solid border-[#B1E0FC] ring-7 ring-[#B1E0FC40] rounded-lg text-[16px] text-[#121215]'>SOLUTIONS</button> </span>
                </div>

                <h1 className='text-4xl font-medium font-clauson '>How Lawyers Use Our AI</h1>

                <div className='bg-[#0D0D0D0D] h-16 w-full mt-5 grid grid-cols-4 justify-between p-3 border-solid border border-[#12121533] rounded-xl mb-20'>

                    <div
                        tabIndex={0}
                        className='focus-within:p-[1.5px] h-fit rounded-md bg-[#0D0D0D0D]
                                focus-within:bg-linear-to-r
                                focus-within:from-[#E6F6FF]
                                focus-within:via-[#0000000A]
                                focus-within:to-[#0CA4FF]'>
                        <div className='focus-within:p-0.75 bg-white rounded-sm'>
                            <div
                                tabIndex={0} // kbhi bhi focus ka use div pe karna ho to tabindex ko 0 rakhna hoga
                                className='bg-[#0D0D0D0D]  focus-within:bg-[#B1E0FC] grid justify-center items-center rounded-sm  '>

                                <h1
                                    tabIndex={0}
                                    className='font-clauson font-medium text-[#000000B2] focus:text-[#121215] text-sm py-1 uppercase tracking-[0%] pt-2.5 focus:py-1.5  cursor-pointer h-fit'>In House counsel</h1>

                            </div>
                        </div>
                    </div>


                    <div
                        tabIndex={0}
                        className='focus-within:p-[1.5px] h-fit rounded-md bg-[#0D0D0D0D]
                                focus-within:bg-linear-to-r
                                focus-within:from-[#E6F6FF]
                                focus-within:via-[#0000000A]
                                focus-within:to-[#0CA4FF]'>
                        <div className='focus-within:p-0.75 bg-white rounded-sm'>
                            <div
                                tabIndex={0} // kbhi bhi focus ka use div pe karna ho to tabindex ko 0 rakhna hoga
                                className='bg-[#0D0D0D0D]  focus-within:bg-[#B1E0FC] grid justify-center items-center rounded-sm  '>

                                <h1
                                    tabIndex={0}
                                    className='font-clauson font-medium text-[#000000B2] focus:text-[#121215] text-sm py-1 uppercase tracking-[0%] pt-2.5 focus:py-1.5  cursor-pointer h-fit'>Innovation  teams</h1>

                            </div>
                        </div>
                    </div>


                    <div
                        tabIndex={0}
                        className='focus-within:p-[1.5px] h-fit rounded-md bg-[#0D0D0D0D]
                                focus-within:bg-linear-to-r
                                focus-within:from-[#E6F6FF]
                                focus-within:via-[#0000000A]
                                focus-within:to-[#0CA4FF]'>
                        <div className='focus-within:p-0.75 bg-white rounded-sm'>
                            <div
                                tabIndex={0} // kbhi bhi focus ka use div pe karna ho to tabindex ko 0 rakhna hoga
                                className='bg-[#0D0D0D0D]  focus-within:bg-[#B1E0FC] grid justify-center items-center rounded-sm  '>

                                <h1
                                    tabIndex={0}
                                    className='font-clauson font-medium text-[#000000B2] focus:text-[#121215] text-sm py-1 uppercase tracking-[0%] pt-2.5 focus:py-1.5  cursor-pointer h-fit'>Transaction Work</h1>

                            </div>
                        </div>
                    </div>


                    <div
                        tabIndex={0}
                        className='focus-within:p-[1.5px] h-fit rounded-md bg-[#0D0D0D0D]
                                focus-within:bg-linear-to-r
                                focus-within:from-[#E6F6FF]
                                focus-within:via-[#0000000A]
                                focus-within:to-[#0CA4FF]'>
                        <div className='focus-within:p-0.75 bg-white rounded-sm'>
                            <div
                                tabIndex={0} // kbhi bhi focus ka use div pe karna ho to tabindex ko 0 rakhna hoga
                                className='bg-[#0D0D0D0D]  focus-within:bg-[#B1E0FC] grid justify-center items-center rounded-sm  '>

                                <h1
                                    tabIndex={0}
                                    className='font-clauson font-medium text-[#000000B2] focus:text-[#121215] text-sm py-1 uppercase tracking-[0%] pt-2.5 focus:py-1.5  cursor-pointer h-fit'>Litigation work</h1>

                            </div>
                        </div>
                    </div>

                </div>

   {/* -------------------------------------------------- Video Section Start From Here ----------------------------------------------- */}
                <div className='grid grid-cols-2 justify-between border-solid border border-[#12121533] rounded-2xl '>

                    <div className=' lg:w-210 '>
                        <div className="relative ">
                            {/* Video */}
                            <video
                                ref={videoRef}
                                src="/section01.mp4"
                                className="w-full rounded-2xl"
                                onClick={handlePause}
                            />

                            {/* Play Button */}
                            {!isPlaying && (
                                <button
                                    onClick={handlePlay}
                                    className="absolute inset-0 m-auto 
                     w-16 h-16 rounded-full cursor-pointer
                     bg-[#B1E0FC] text-white text-2xl 
                     flex items-center justify-center 
                     hover:bg-[#9fd9fb] transition"
                                >
                                    <div><Play /></div>
                                </button>
                            )}
                        </div>
                    </div>

                    <div className='grid grid-rows-2 justify-center'>
                        <div className=' grid items-end pl-36 pb-10'>
                            <h1 className='max-w-64 mx-auto font-clauson font-medium text-3xl'>In House Counsel</h1>
                        </div>
                        
                        <div className='grid justify-end pl-60'>
                        <p  className='max-w-85 mx-auto  font-clauson font-light text-[#000000B2] text-xl'>
                            AI-powered in-house counsel streamlines compliance, monitors risks in real time, and provides intelligent legal insights to support smarter business decisions.
                        </p>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Section03