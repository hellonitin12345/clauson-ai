import React from 'react'

const Lables = ({lable,heading}) => {
  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="bg-[#B1E0FC40] flex justify-center items-center px-4 py-2 border border-solid border-[#B1E0FC] ring-7 ring-[#B1E0FC40] rounded-lg text-[16px] text-[#121215] w-fit">{lable}</div>
          <h1 className="md:text-4xl font-medium font-clauson">{heading}</h1>
       </div>
     </div>
    
  )
}

export default Lables