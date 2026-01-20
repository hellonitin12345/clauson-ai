import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Slider from './Slider'

const Main_container = () => {
  return (
    
        <div className='main-container  h-screen'>

          
          <Hero/>
          <Slider/>
        </div>
  )
}

export default Main_container