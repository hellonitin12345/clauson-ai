import Button from "../Home/Ui/Button"
import "./Navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    
      <div id='corner-design' className='bg-[#B1E0FC] opacity-20 lg:h-50  h-35 w-50 absolute top-0 lg:-left-20 lg:w-100 flex justify-center blur-lg'></div>


      <nav className='navbar w-full 
            relative grid grid-cols-3 '>


        <div className='lg:text-4xl text-sm flex lg:items-center lg:pl-20 lg:py-9'><h1 className='text-black font-clauson'>ClausonAI</h1>

        </div>
        <div className=' text-[#121215] flex items-center text-xl justify-between py-9 '>
          <Link href="/">Why Us</Link>
          <Link href='#solution'>Solutions</Link>
          <Link href='/'>Testimonials</Link>
        </div>

        <div className=' flex justify-center md:pl-45 '>
          <Button/>
        </div>
      </nav>





</>

      
    
  )
}

export default Navbar