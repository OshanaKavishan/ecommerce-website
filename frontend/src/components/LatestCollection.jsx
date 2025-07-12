import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [LatestProducts,setLatestProducts] = useState([]);
    
    useEffect(() => {
        setLatestProducts(products.slice(0,10));
    },[products])
    
    return (
        <section className='my-16 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <div className='inline-block'>
                        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
                    </div>
                    <div className='mt-6 max-w-3xl mx-auto'>
                        <p className='text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-light'>
                            Discover our Latest Collection – a perfect blend of innovation and style. Handpicked just for you, these fresh arrivals are designed to upgrade your everyday tech and elevate your lifestyle. 
                            <span className='block mt-2 font-medium text-gray-800'>Don't miss what's trending right now.</span>
                        </p>
                    </div>
                </div>
                
                {/* Rendering products */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8'>
                    {
                        LatestProducts.map((item,index)=>(
                            <div key={index} className='group transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
                                <ProductItem 
                                    id={item._id} 
                                    image={item.image} 
                                    name={item.name} 
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

export default LatestCollection;