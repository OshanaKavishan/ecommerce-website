import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <section className='relative overflow-hidden'>
            <div className='flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm'>
                {/* Hero Left Side */}
                <div className='w-full lg:w-1/2 flex items-center justify-center py-12 lg:py-0 px-6 sm:px-8 lg:px-12'>
                    <div className='text-[#414141] max-w-lg'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 md:w-12 h-[2px] bg-gradient-to-r from-[#414141] to-gray-300'></div>
                            <p className='font-medium text-sm md:text-base tracking-wider uppercase text-gray-700'>OUR BESTSELLERS</p>
                        </div>
                        
                        <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8 bg-gradient-to-r from-[#414141] to-gray-600 bg-clip-text text-transparent'>
                            Latest Arrivals
                        </h1>
                        
                        <div className='flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:gap-4'>
                            <p className='font-semibold text-sm md:text-base tracking-wide uppercase text-[#414141] group-hover:text-gray-600 transition-colors'>
                                SHOP NOW
                            </p>
                            <div className='w-10 md:w-12 h-[2px] bg-gradient-to-r from-[#414141] to-gray-300 group-hover:w-16 transition-all duration-300'></div>
                        </div>
                    </div>
                </div>
                
                {/* Hero Right Side */}
                <div className='w-full lg:w-1/2 relative overflow-hidden'>
                    <img 
                        className='w-full h-full object-cover transform transition-transform duration-500 hover:scale-105' 
                        src={assets.hero_img} 
                        alt="Latest Collection Hero" 
                        loading="eager"
                        decoding="async"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;