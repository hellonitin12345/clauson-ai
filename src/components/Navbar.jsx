import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
      <div id='corner-design' className='bg-[#B1E0FC] opacity-20 lg:h-50  h-25 w-50 absolute top-0 -left-20 lg:w-100 flex justify-center blur-lg'></div>


      <nav className='navbar w-full 
            relative grid grid-cols-3 '>


        <div className='lg:text-4xl text-sm flex items-center lg:pl-20 lg:py-9'><h1 className='text-black font-clauson'>ClausonAI</h1>

        </div>
        <div className=' text-[#121215] flex items-center text-xl justify-between py-9 '>
          <Link to="/">Why Us</Link>
          <Link to='/'>Solutions</Link>
          <Link to='/'>Testimonials</Link>
        </div>
        <div className=' flex justify-end '>
          <span className='py-7 pr-25'> <Link> <button className='bg-[#B1E0FC40] flex justify-center items-center px-5 py-3 border border-solid border-[#B1E0FC] ring-7 ring-[#B1E0FC40] rounded-lg text-xl'>TRY NOW</button></Link > </span>
        </div>

      </nav>





</>

      
    
  )
}

export default Navbar