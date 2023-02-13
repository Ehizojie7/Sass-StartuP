import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white bg-blue-700 rounded-md'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-green-300'>Want tips & tricks to optimize your flow?</h1>
              <p>Sign Up to our Newsletter today!</p> 
            </div>
            <div className='flex flex-col sm:flex-row
             items-center justify-between w-full'>
              <input type="email" placeholder='Enter Your Email' className='p-3 flex w-full rounded-md' />
              <button className='bg-green-400 w-[200px] ml-4 rounded-md mx-auto my-6 py-3 text-black'>Contact Us</button>
            </div>
            <p>We Care About You</p>
        </div>

    </div>
  )
}

export default Newsletter