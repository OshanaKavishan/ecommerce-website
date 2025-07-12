import React from 'react'

const Title = ({text1,text2}) => {
    return (
        <div className='inline-flex gap-3 items-center mb-4'>
            <div className='text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide'>
                <span className='text-gray-400 uppercase'>{text1}</span>
                <span className='text-gray-800 font-medium uppercase ml-2'>{text2}</span>
            </div>
            <div className='flex-shrink-0 w-8 sm:w-12 lg:w-16 h-[2px] bg-gradient-to-r from-gray-700 to-gray-400 rounded-full'></div>
        </div>
    )
}

export default Title;