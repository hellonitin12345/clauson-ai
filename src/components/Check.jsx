import React from 'react'

const Check = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-10">
                <div className="flex">
                    <div className="w-24 h-24 rounded-full border-4 border-black  bg-red-500"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-black -ml-6 bg-green-600"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-black  bg-blue-600"></div>
                    <div className="w-24 h-24 rounded-full border-4 border-black"></div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10">
                <div className="flex">
                    <div className="w-24 h-24 rounded-full border-4 border-black relative z-40 bg-green-500"></div>

                    <div className="w-24 h-24 rounded-full border-4 border-black -ml-6 relative bg-blue-400 z-30"></div>

                    <div className="w-24 h-24 rounded-full border-4 border-black -ml-6 relative bg-red-700 z-20"></div>

                    <div className="w-24 h-24 rounded-full border-4 border-black -ml-6 relative bg-yellow-800 z-10"></div>
                </div>
            </div>

        </>

    )
}

export default Check