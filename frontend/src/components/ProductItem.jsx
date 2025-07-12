import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';    

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);

    return (
        <Link className='group block text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='relative overflow-hidden rounded-lg bg-gray-50 shadow-sm group-hover:shadow-md transition-all duration-300'>
                <div className='aspect-square overflow-hidden'>
                    <img 
                        className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110' 
                        src={image[0]} 
                        alt={name}
                        loading="lazy"
                    />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
            
            <div className='pt-4 pb-2 px-1'>
                <p className='text-sm font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-gray-900 transition-colors'>
                    {name}
                </p>
                <div className='flex items-center gap-1'>
                    <span className='text-xs text-gray-500 font-normal'>{currency}</span>
                    <p className='text-sm font-semibold text-gray-900'>{price}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem;