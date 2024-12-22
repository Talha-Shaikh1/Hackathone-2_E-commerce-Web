
import React from 'react';
import OurProduct from '@/app/components/ourProduct/OurProduct';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: '/Feature-product-1.png', isNew: true },
  { id: 2, name: 'Library Stool Chair', price: 20, image: '/Feature-product-2.png', isOnSale: true, originalPrice: 30 },
  { id: 3, name: 'Library Stool Chair', price: 20, image: '/Feature-product-3.png' },
  { id: 4, name: 'Library Stool Chair', price: 20, image: '/Feature-product-4.png' },
  { id: 5, name: 'Library Stool Chair', price: 20, image: '/categories-product-2.png' },
  { id: 6, name: 'Library Stool Chair', price: 20, image: '/our-product-6.png' },
  { id: 7, name: 'Library Stool Chair', price: 20, image: '/our-product-7.png', isNew: true },
  { id: 8, name: 'Library Stool Chair', price: 20, image: '/Feature-product-1.png' },
  { id: 9, name: 'Library Stool Chair', price: 20, image: "/Image.png" },
  { id: 10, name: 'Library Stool Chair', price: 20, image: '/our-product-2.png', isOnSale: true, originalPrice: 30 },
  { id: 11, name: 'Library Stool Chair', price: 20, image: '/Feature-product-3.png' },
  { id: 12, name: 'Library Stool Chair', price: 20, image: "/categories-product-3.png" },
];

const AllProducts: React.FC = () => {

  const images = [
    "/categories-product-2.png",
    "/Image.png",
    '/Feature-product-2.png', 
    '/Feature-product-1.png',
    '/Feature-product-3.png',
    "/categories-product-3.png"
  ]


  return (

    <div>
    <div className="container mx-auto px-4 py-8">
     
      <h2 className="text-2xl sm:text-3xl font-bold text-start mb-24 text-gray-800">
        All Products
      </h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}><OurProduct key={product.id} product={product} /></Link>
        ))}
      </div>
    </div>


    <div className='my-24'>
      <div className="container mx-auto px-4 py-8 space-y-32">
        {/* Subscribe Section */}
        <div className="text-center space-y-4">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold">Or Subscribe To The Newsletter</h2>
        
          <div className='flex items-center justify-center'>
            <form className="w-full max-w-sm">
              <div className="flex items-center border-b border-black py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email Address..." aria-label="Full name" />


              </div>

            </form>
            <div className="flex items-center border-b border-black py-2 ml-4"><button className="flex-shrink-0 border-transparent text-black hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              SUBMIT
            </button></div>
            
          </div>
        </div>

        {/* Instagram Section */}
        <div className="space-y-12">
          <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold text-center my-12">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {images.map((image, index) => (
              <div key={index} className="w-full h-[200px] overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default AllProducts;
