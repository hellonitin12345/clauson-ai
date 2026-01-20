import React from 'react'
import './slider.css'
import { h1 } from 'framer-motion/client'

const Slider = () => {
    return (
        <>
            <h1 className='font-clauson font-bold text-4xl text-center mt-35'>Join the ranks of 500+ growing companies</h1>
            <div className='wraper  grid place-items-center'>
                <div className='slider '>

                    <div className='slider-track'>

                        {/* 4 - slides  */}
                        <div className='slide'><img src="./Logo (1).png" alt="company logo" /></div>
                        <div className='slide'><img src="./Logo (2).png" alt="company logo" /></div>
                        <div className='slide'><img src="./Logo (3).png" alt="company logo" /></div>
                        <div className='slide'><img src="./Logo (4).png" alt="company logo" /></div>

                        {/* 4 - slides duplicate */}


                        <div className='slide'><img src="./Logo (1).png" alt="company logo" /></div>
                        <div className='slide'><img src="./Logo (2).png" alt="company logo" /></div>
                        <div className='slide'><img src="./Logo (3).png" alt="company logo" /></div>
                        <div className='slide'><img src="./Logo (4).png" alt="company logo" /></div>


                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Slider