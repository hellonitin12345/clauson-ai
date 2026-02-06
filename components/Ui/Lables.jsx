import React from 'react'

const Lables = ({lable,heading}) => {
  return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="bg-[#B1E0FC40] flex justify-center items-center md:px-4 md:py-2 px-2 py-1.5 border border-solid border-[#B1E0FC] ring-7 ring-[#B1E0FC40] rounded-[3px] md:rounded-lg md:text-[16px] text-xs text-[#121215] md:w-fit">{lable}</div>
          <h1 className="md:text-4xl font-medium text-center text-3xl font-clauson">{heading}</h1>
       </div>
     </div>
    
  )
}

export default Lables