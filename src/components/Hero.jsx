import React from 'react';


function Hero() {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[79px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-blue-500 font-bold p-2 uppercase'>Grow with data analytics</p>
            <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold md:py-6 uppercase text-green-500'>Grow with BlueWire Data Analytics today!</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text3xl font-bold'> Fast, Flexible Financing <span className='text-blue-300 md:text-2xl sm:text-xl'> BTB, BTC, SASS</span></p>
            </div>
            <p className='md:text-xl text-lg font-bold mt-2 text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC and SASS platforms</p>
            <button className='bg-green-400 w-[200px] rounded-md mx-auto my-6 py-3 text-black'>Get Started!</button>

        </div>
    </div>
  )
}

export default Hero