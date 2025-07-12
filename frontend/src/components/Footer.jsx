import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white border-t border-gray-100'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 max-w-7xl mx-auto'>

        <div className='space-y-4'>
            <img src={assets.logo} className='mb-5 w-32 drop-shadow-sm' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-relaxed'>
              Discover timeless style and effortless fashion with our carefully curated collections. Designed for every moment, made for you.
            </p>
        </div>

        <div className='space-y-4'>
            <p className='text-xl font-semibold mb-5 text-gray-800'>COMPANY</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li className='hover:text-gray-800 cursor-pointer transition-colors duration-200'>Home</li>
                <li className='hover:text-gray-800 cursor-pointer transition-colors duration-200'>About us</li>
                <li className='hover:text-gray-800 cursor-pointer transition-colors duration-200'>Delivery</li>
                <li className='hover:text-gray-800 cursor-pointer transition-colors duration-200'>Privacy policy</li>
            </ul>
        </div>

        <div className='space-y-4'>
            <p className='text-xl font-semibold mb-5 text-gray-800'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-3 text-gray-600'>
                <li className='hover:text-gray-800 cursor-pointer transition-colors duration-200'>+94-76-860-1318</li>
                <li className='hover:text-gray-800 cursor-pointer transition-colors duration-200'>contact@aravindu.com</li>
            </ul>
        </div>

      </div>

      <div className='border-t border-gray-200 bg-white/50'>
        <p className='py-6 text-sm text-center text-gray-500 max-w-7xl mx-auto px-4'>
          Copyright 2025 @ forever.com - All Rights Reserved
        </p>
      </div>

    </div>
  )
}

export default Footer;