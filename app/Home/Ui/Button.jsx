import Link from 'next/link'

const Button = () => {
  return (
    
        <span className='py-7'> <Link href='/'>
            <button className='bg-[#B1E0FC40] flex justify-center items-center px-5 py-3 border border-solid border-[#B1E0FC] ring-7 ring-[#B1E0FC40] rounded-lg text-xl'>TRY NOW</button>
            </Link > 
        </span>

  )
}

export default Button