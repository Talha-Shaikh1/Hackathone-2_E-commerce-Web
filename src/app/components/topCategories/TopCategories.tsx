import React from 'react'
import Image from 'next/image'

function TopCategories() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className='className="text-2xl sm:text-3xl font-bold text-start mb-24 text-gray-800"'>Top Categories</h2>
            <div className='flex items-center justify-center'>

                <div className='relative items-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 my-12'>
                    <div className='relative rounded-lg'>
                        <Image src={"/Image.png"} alt='' width={350} height={350} />
                        <div className=" absolute bottom-0 bg-black/70 text-white p-2 w-full rounded-b-lg">
                            <h1 className="text-xl font-semibold">Wing Chair</h1>
                            <p className='text-sm opacity-70 py-1'>3&middot;584 Products</p>
                        </div>
                    </div>

                    <div className='relative rounded-lg'>
                        <Image src={"/categories-product-2.png"} alt='' width={350} height={350} />
                        <div className="content absolute bottom-0 bg-black/70 text-white p-2 w-full rounded-b-lg">
                            <h1 className="text-xl font-semibold">Wooden Chair</h1>
                            <p className='text-sm opacity-70 py-1'>157 Products</p>
                        </div>
                    </div>

                    <div className='relative rounded-lg'>
                        <Image src={"/categories-product-3.png"} alt='' width={350} height={350} />
                        <div className="content absolute bottom-0 bg-black/70 text-white p-2 w-full rounded-b-lg">
                            <h1 className="text-xl font-semibold">Desk Chair</h1>
                            <p className='text-sm opacity-70 py-1'>154 Products</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TopCategories
