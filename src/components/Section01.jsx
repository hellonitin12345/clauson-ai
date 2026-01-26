import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

const Section01 = () => {


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
        <div className='main-parent grid max-w-[90%] mx-auto mt-30 gap-8'>

            <div className='flex flex-col gap-2 items-center'>
                <div>
                    <span className='py-7 pr-25'> <button className='bg-[#B1E0FC40] flex justify-center items-center px-4 py-2 border border-solid border-[#B1E0FC] ring-7 ring-[#B1E0FC40] rounded-lg text-[16px] text-[#121215]'>Creation</button> </span>
                </div>
                <h1 className='text-4xl font-medium font-clauson'>How It Work</h1>
            </div>


            <div className="relative w-full">
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

            <div className='w-full grid grid-cols-3'>

                <div
                    tabIndex={0}
                    className=' p-1 rounded-2xl
                                focus-within:bg-linear-to-r
                                focus-within:from-[#E6F6FF]
                                focus-within:via-[#0000000A]
                                focus-within:to-[#0CA4FF]'>
                    <div className='p-2 bg-white rounded-xl'>
                        <div
                            tabIndex={0} // kbhi bhi focus ka use div pe karna ho to tabindex ko 0 rakhna hoga
                            className='bg-[#0D0D0D0D]  focus:bg-[radial-gradient(#FFFFFF,#B0DFFB)]
                         pl-8 pt-4 pb-10 flex flex-col gap-4 rounded-xl'>
                            <h2 className='text-xl font-medium font-clauson -tracking-[1%] text-[#121215]'><span>icon</span>Choose Document Type</h2>
                            <p className='max-w-86 text-[#000000B2] -tracking-[1%] text-[16px] font-normal font-clauson'>Select from NDAs, service agreements, employment contracts, or loan agreements.</p>
                        </div>
                    </div>
                </div>

                <div
                    tabIndex={0}
                    className='  p-1 rounded-2xl
                focus-within:bg-linear-to-r
               focus-within:from-[#E6F6FF]
               focus-within:via-[#0000000A]
               focus-within:to-[#0CA4FF]'>
                    <div className='p-2 bg-white rounded-xl'>
                        <div
                            tabIndex={0}
                            className='bg-[#0D0D0D0D]  focus:bg-[radial-gradient(#FFFFFF,#B0DFFB)]
                        pl-8 pt-4 pb-10 flex flex-col gap-4 rounded-xl'>
                            <h2 className='text-xl font-medium font-clauson -tracking-[1%] text-[#121215]'><span>icon</span>Answer Simple Questions</h2>
                            <p className='max-w-90 text-[#000000B2] -tracking-[1%] text-[16px] font-normal font-clauson'>Our wizard walks you through a few questions about your specific needs.</p>
                        </div>
                    </div>
                </div>

                <div
                    tabIndex={0}
                    className=' p-1 bg-white rounded-2xl
                focus-within:bg-linear-to-r
               focus-within:from-[#E6F6FF]
               focus-within:via-[#0000000A]
               focus-within:to-[#0CA4FF]'>
                    <div className='p-2 bg-white rounded-xl'>
                        <div
                            tabIndex={0}
                            className='bg-[#0D0D0D0D]  focus:bg-[radial-gradient(#FFFFFF,#B0DFFB)]
                        pl-8 pt-4 pb-10 flex flex-col gap-4 rounded-xl'>
                            <h2 className='text-xl font-medium font-clauson -tracking-[1%] text-[#121215]'><span>icon</span>Download & Use</h2>
                            <p className='max-w-94 text-[#000000B2] -tracking-[1%] text-[16px] font-normal font-clauson'>Get your professional document instantly. Edit, save, and download as PDF or DOCX.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section01