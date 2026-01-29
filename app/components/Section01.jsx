'use client'
import { useRef, useState } from 'react'
import { Play } from 'lucide-react'
import Button from '../Home/Ui/Button'
// import img1 from "/mouse.png"; 


const Section01 = () => {

const data = [
        {title: "Choose Document Type" ,
         desc: "Select from NDAs, service agreements, employment contracts, or loan agreements." ,
         icon: "img"
        } , 
        {
         title: "Answer Simple Questions" ,
         desc: "Our wizard walks you through a few questions about your specific needs.",
         icon: 'img'
        } , 
        {
         title: "Download & Use" ,
         desc: "Get your professional document instantly. Edit, save, and download as PDF or DOCX." ,
         icon: 'img'
        }
    ]
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleTabChange = () => {}

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

                <Button>Creation </Button> {/* How to Pass Data */}
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

            <div className='grid grid-cols-3'>
            {data.map((items , index)=>{
                return (<div className='w-full' key={index}>

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
                            <h2 className='text-xl font-medium font-clauson -tracking-[1%] text-[#121215]'><span>{items.icon}</span>{items.title}</h2>
                            <p className='max-w-86 text-[#000000B2] -tracking-[1%] text-[16px] font-normal font-clauson'>{items.desc}</p>
                        </div>
                    </div>
                </div>


            </div>)
            })}
            </div>

        </div>
    )
}

export default Section01