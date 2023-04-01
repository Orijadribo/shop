import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useSelector } from 'react-redux';

const Header = () => {
    const productData = useSelector((state) => state.bazar.productData);
    return (
        <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
            <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <div>
                        <h1 className='w-28'>bazaar</h1>
                    </div>
                </Link>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            Home
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            Pages
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            Shop
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            Element
                        </li>
                        <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>
                            Blog
                        </li>
                    </ul>
                    <Link to='/cart'>
                        <div className='relative'>
                            <HiOutlineShoppingBag className='w-full h-[40px] ' />
                            <span className='absolute w-8 top-4 left-1 text-sm flex items-center justify-center font-semibold'>
                                {productData.length}
                            </span>
                        </div>
                    </Link>
                    <img className='w-8 h-8 rounded-full'
                        src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg? auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='userlogo'
                    />
                </div>
            </div>

        </div>
    )
}

export default Header