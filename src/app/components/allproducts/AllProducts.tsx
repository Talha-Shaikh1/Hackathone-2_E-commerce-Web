
import React from 'react';
import OurProduct from '../ourProduct/OurProduct';
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
  return (
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
  );
};

export default AllProducts;
