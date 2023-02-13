import React from 'react'
import Single from '../images/single.png'
import Double from '../images/double.png'
import Triple from '../images/triple.png'

function Card() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:my-0'>
          <img src={Single} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-center text-green-300 text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>500Gb storage</p>
           <p className='py-2 border-b mx-8 mt-8'>1 Granted User</p>
          <p className='py-2 border-b mx-8 mt-8'>Send Up To 2gb</p>
          </div>
          <button className='bg-green-400 w-[200px] mt-3 rounded-md mx-auto py-3 text-black hover:bg-green-200'>Get Started</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:my-0'>
          <img src={Triple} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
          <p className='text-center text-green-300 text-4xl font-bold'>$200</p>
          <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>1TB storage</p>
           <p className='py-2 border-b mx-8 mt-8'>4 Granted User</p>
          <p className='py-2 border-b mx-8 mt-8'>Send Up To 8gb</p>
          </div>
          <button className='bg-green-400 w-[200px] mt-3 rounded-md mx-auto py-3 text-black hover:bg-green-200'>Get Started</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:my-0'>
          <img src={Double} alt="/" className='w-20 mx-auto mt-[-3rem] bg-white' />
          <h2 className='text-2xl font-bold text-center py-8'>Premium User</h2>
          <p className='text-center text-green-300 text-4xl font-bold'>$300</p>
          <div className='text-center font-medium'>
          <p className='py-2 border-b mx-8 mt-8'>3TB storage</p>
           <p className='py-2 border-b mx-8 mt-8'>8 Granted User</p>
          <p className='py-2 border-b mx-8 mt-8'>Send Up To 20Gb</p>
          </div>
          <button className='bg-green-400 w-[200px] mt-3 rounded-md mx-auto py-3 text-black hover:bg-green-200'>Get Started</button>
        </div>

      </div>
        
    </div>
  )
}

export default Card