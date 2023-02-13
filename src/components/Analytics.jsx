import React from 'react'
import Laptop from '../images/laptop.jpg';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240x] mx-auto grid md:grid-cols-2 gap-1'>
        <img src={Laptop} alt="/" className='w-[500x] mx-auto my-4' />
        <div className='flex flex-col justify-center bg-black p-6'>
          <p className='text-blue-400'>Data Analytics Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl text-green-800'>Manage Data Analytic Centrally</h1>
          <p className='text-blue-400 p-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae, magni in culpa laborum doloremque eaque dolorum delectus! Qui fuga a itaque obcaecati velit libero recusandae eum temporibus magni saepe.</p>
          <button className='mx-auto w-md:m-0 text-black-900 bg-blue-400 w-[200px] rounded-md my-6 py-3 text-black hover:bg-green-300 '>Buy Now</button>

        </div>

      </div>

    </div>
  )
}

export default Analytics