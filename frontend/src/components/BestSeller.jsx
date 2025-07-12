import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,serBestSeller] = useState([]);
    
    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        serBestSeller(bestProduct.slice(0,5));
    },[products])
    
    return (
        <section className='my-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <div className='inline-block'>
                        <Title text1={'BEST'} text2={'SELLERS'}/>
                    </div>
                    <div className='mt-6 max-w-3xl mx-auto'>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light'>
                            Our Best Sellers are loved for a reason. These top-rated gadgets are flying off the shelves and making waves with real users. 
                            <span className='block mt-2 font-medium text-gray-800'>Tried, tested, and trusted — shop the gear everyone's talking about.</span>
                        </p>
                    </div>
                </div>
                
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8'>
                    {
                        bestSeller.map((item,index)=>(
                            <div key={index} className='group transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                                <ProductItem 
                                    id={item._id} 
                                    name={item.name} 
                                    image={item.image} 
                                    price={item.price}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSeller;