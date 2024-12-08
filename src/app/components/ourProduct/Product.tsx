// pages/index.tsx
import React from 'react';
import OurProduct from './OurProduct';

const products = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: '/our-product-1.png', isNew: true },
  { id: 2, name: 'Library Stool Chair', price: 20, image: '/our-product-2.png', isOnSale: true, originalPrice: 30 },
  { id: 3, name: 'Library Stool Chair', price: 20, image: '/our-product-3.png' },
  { id: 4, name: 'Library Stool Chair', price: 20, image: '/our-product-4.png', isNew: true },
  { id: 5, name: 'Library Stool Chair', price: 20, image: '/our-product-5.png', isOnSale: true, originalPrice: 30 },
  { id: 6, name: 'Library Stool Chair', price: 20, image: '/our-product-6.png' },
  { id: 7, name: 'Library Stool Chair', price: 20, image: '/our-product-7.png', isNew: true },
  { id: 8, name: 'Library Stool Chair', price: 20, image: '/our-product-8.png', isOnSale: true, originalPrice: 30 },
  
];

const Product: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-12 md:mb-24 text-start">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <OurProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
