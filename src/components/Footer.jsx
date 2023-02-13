import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';


function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-col-3 gap-8 text-gray-300'>
        <div>
        <h1 className='w-full text-3xl font-bold text-blue-900'>Blue<span className='text-green-400'>Wire</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quo labore consectetur, pariatur enim necessitatibus hic fuga ex perferendis. Autem!</p>
        </div>
        <div className='flex md:w-[75%] m-6'>
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
        </div>
        <div  className='lg:col-span-2 flex justify-between'>
          <div>
            <h6 className='font-medium text-gray'>Solutions</h6>
            <ul>
              <li className='py-2 text-sm'>Analytics</li>
              <li className='py-2 text-sm'>Marketing</li>
              <li className='py-2 text-sm'>Commerce</li>
              <li className='py-2 text-sm'>Insights</li>
            </ul>
          </div>

          <div>
            <h6 className='font-medium text-gray'>Support</h6>
            <ul>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API status</li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-gray'>Company</h6>
            <ul>
              <li className='py-2 text-sm'>About</li>
              <li className='py-2 text-sm'>Blogs</li>
              <li className='py-2 text-sm'>Jobs</li>
              <li className='py-2 text-sm'>Press</li>
            </ul>
          </div>

        </div>
        <p className='text-green-600 font-bold mx-auto'>&copy; 2023 Design Made By Ehizojie.</p>
    </div>
  )
}

export default Footer