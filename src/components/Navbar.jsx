import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='text-white flex justify-between items-center h-24 max-width-[1240px] mx-auto p-4'>
        <h1 className='w-full text-3xl font-bold text-blue-900'>Blue<span className='text-green-400'>Wire</span></h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            { nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/> }
        </div>
        <div className={ nav ? 'fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-700 bg-[#000300] max-width-[1240px] mx-auto px-4 ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-[60%] border-r h-full border-r-gray-700 bg-[#000300] max-width-[1240px] mx-auto px-4'}>
        <h1 className='pt-10 w-full text-3xl font-bold text-blue-900'>Blue<span className='text-green-400'>Wire</span></h1>
        <ul className='p-4 border-gray-600 uppercase'>
            <li className='p-4 border-b  border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact Us</li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar