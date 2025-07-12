import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
    }

    return (
        <div className='flex items-center justify-between py-6 px-4 font-medium bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50'>
            <Link to='/' className='transition-transform hover:scale-105'>
                <img src={assets.logo} alt="logo" className='w-36 drop-shadow-sm' />
            </Link>

            <ul className='hidden sm:flex gap-8 text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1 group transition-all duration-300 hover:text-black'>
                    <p className='text-sm font-medium tracking-wide'>HOME</p>
                    <hr className='w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-700 to-black transition-all duration-300' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1 group transition-all duration-300 hover:text-black'>
                    <p className='text-sm font-medium tracking-wide'>COLLECTION</p>
                    <hr className='w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-700 to-black transition-all duration-300' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 group transition-all duration-300 hover:text-black'>
                    <p className='text-sm font-medium tracking-wide'>ABOUT</p>
                    <hr className='w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-700 to-black transition-all duration-300' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1 group transition-all duration-300 hover:text-black'>
                    <p className='text-sm font-medium tracking-wide'>CONTACT</p>
                    <hr className='w-0 group-hover:w-full border-none h-[2px] bg-gradient-to-r from-gray-700 to-black transition-all duration-300' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <div className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                    <img onClick={() => setShowSearch(true)} src={assets.search_icon} alt="search" className='w-5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity' />
                </div>

                <div className='group relative'>
                    <div className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                        <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} alt="" className='w-5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity' />
                    </div>
                    {token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-40 py-4 px-5 bg-white shadow-lg border border-gray-100 text-gray-600 rounded-xl backdrop-blur-sm'>
                                <p className='cursor-pointer hover:text-black transition-colors duration-200 py-1 px-2 rounded-md hover:bg-gray-50'>My Profile</p>
                                <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black transition-colors duration-200 py-1 px-2 rounded-md hover:bg-gray-50'>Orders</p>
                                <hr className='border-gray-100 my-1' />
                                <p onClick={logout} className='cursor-pointer hover:text-red-600 transition-colors duration-200 py-1 px-2 rounded-md hover:bg-red-50'>Logout</p>
                            </div>
                        </div>
                    }
                </div>

                <Link to='/cart' className='relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'>
                    <img src={assets.cart_icon} alt="cart" className='w-5 min-w-5 opacity-75 hover:opacity-100 transition-opacity' />
                    <div className='absolute -top-1 -right-1 w-5 h-5 text-center leading-5 bg-black text-white rounded-full text-[10px] font-medium shadow-lg'>
                        {getCartCount()}
                    </div>
                </Link>

                <div className='p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 sm:hidden'>
                    <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="menu" className='w-5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity' />
                </div>
            </div>

            {/* Modernized Sidebar Menu for small screens */}
            <div className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white/95 backdrop-blur-md shadow-2xl transition-all duration-300 ease-in-out z-50 ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600 h-full'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-6 cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100'>
                        <img className='h-4 rotate-180 opacity-75' src={assets.dropdown_icon} alt="" />
                        <p className='font-medium'>Back</p>
                    </div>
                    <div className='flex-1 py-4'>
                        <NavLink onClick={() => setVisible(false)} className='block py-4 pl-6 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-50 font-medium tracking-wide' to='/'>HOME</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='block py-4 pl-6 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-50 font-medium tracking-wide' to='/collection'>COLLECTION</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='block py-4 pl-6 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-50 font-medium tracking-wide' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='block py-4 pl-6 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-50 font-medium tracking-wide' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>
            </div>

            {/* Backdrop overlay */}
            {visible && (
                <div 
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
                    onClick={() => setVisible(false)}
                />
            )}
        </div>
    )
}

export default NavBar;