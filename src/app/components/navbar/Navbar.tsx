import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar() {
    return (
        <div>
            {/* Top Banner */}
            <div className='w-full text-white h-[40px] bg-[#272343] flex items-center justify-around'>
                <div className='flex justify-center items-center'>
                    <Image src={"/vector.png"} alt='' width={12} height={12} />
                    <p className=' text-sm pl-2'>
                        Free shipping on all orders over $50
                    </p>
                </div>

                <div className='flex justify-center items-center cursor-pointer'>
                    <div className='flex justify-center items-center px-3'>
                        <h2 className='flex px-2 items-center'>Eng </h2>
                        <Image
                            src={"/b-arrow.png"} alt='arrow' width={12} height={12} />
                    </div>
                    <h2>Faqs</h2>
                    <div className='px-3 flex'>
                        <Image src={"/alert-circle1.svg"} alt='' width={12} height={12} />
                        <h2 className='pl-1'>Need Help</h2>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className='h-28 w-full flex md:justify-around justify-between items-center px-4 md:px-8 bg-[#F0F2F3]'>
                {/* Logo */}
                <div className='flex'>
                    <Image src={"/Logo Icon.png"} alt='' width={40} height={10} />
                    <h2 className='font-semibold text-[32px] px-2'>Comforty</h2>
                </div>


                <div className='h-11 w-32 border border-gray-300 bg-white flex justify-center items-center'>
                    <Image src={"/Buy 2.png"} alt='' width={22} height={12} />
                    <h3 className='px-2'>Cart</h3>
                    <div className='h-5 w-5 rounded-full flex items-center justify-center bg-[#007580] text-white text-sm'>2</div>
                </div>

            </div>

            <div className='w-full h-20 flex items-center justify-around'>
                {/* Desktop Menu */}
                <ul className='hidden text-lg font-normal md:flex md:gap-5  lg:gap-10 '>
                    <li className='hover:text-[#007580]'><Link href='/'>Home</Link></li>
                    <li className='hover:text-[#007580]'><Link href='/'>Shop</Link></li>
                    <li className='hover:text-[#007580]'><Link href='./AllProducts'>Product</Link></li>
                    <li className='hover:text-[#007580]'><Link href='/'>Pages</Link></li>
                    <li className='hover:text-[#007580]'><Link href='/'>About</Link></li>
                    
                </ul>
                <div className='flex items-center'>
                    <h3 className='text-sm text-[#636270] px-2'>Contact:</h3>
                    <h3>(808) 555-0111</h3>
                </div>
            </div>
        </div>
    );
}

