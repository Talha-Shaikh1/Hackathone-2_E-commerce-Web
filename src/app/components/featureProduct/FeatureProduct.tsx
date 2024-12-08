// pages/FeaturedProducts.tsx
import React from 'react';
import OurProduct from '../ourProduct/OurProduct';

const products = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: '/Feature-product-1.png', isNew: true },
  { id: 2, name: 'Library Stool Chair', price: 20, image: '/Feature-product-2.png', isOnSale: true, originalPrice: 30 },
  { id: 3, name: 'Library Stool Chair', price: 20, image: '/Feature-product-3.png' },
  { id: 4, name: 'Library Stool Chair', price: 20, image: '/Feature-product-4.png' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     
      <h2 className="text-2xl sm:text-3xl font-bold text-start mb-24 text-gray-800">
        Featured Products
      </h2>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <OurProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
