
import Link from 'next/link'
import Button1 from '@/components/Ui/Button1'

const Navbar = () => {
  return (
    <>
    
      <div id='corner-design' className={["bg-[#B1E0FC]", "opacity-20 lg:h-50  h-35 w-50" , "absolute top-0 lg:-left-20 lg:w-100 flex justify-center blur-lg"].join(" ")}></div>


      <nav className={["navbar w-full" ,
            "relative grid grid-cols-3 "].join(" ")}>
        <div className='lg:text-4xl text-sm flex lg:items-center lg:pl-20 lg:py-9'><h1 className='text-black font-clauson'>ClausonAI</h1>
        </div>
        <div className=' text-[#121215] flex items-center text-xl justify-between py-9 '>
          <Link href="#whyUs">Why Us</Link>
          <Link href='#solution'>Solutions</Link>
          <Link href='#testimonials'>Testimonials</Link>
        </div>
        <div className=' flex justify-center md:pl-45 '>
          <div className='flex justify-center items-center'>
            <Link href="/"> <Button1 lable='Try Now' className='w-35'/> </Link>
          </div>
          {/* <Button lable="Try Now"/>  */}
        </div>
      </nav>
</>)}
export default Navbar