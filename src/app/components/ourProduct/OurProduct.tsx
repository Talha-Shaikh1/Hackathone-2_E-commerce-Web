
import Image from 'next/image';
import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
  originalPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const OurProduct: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="relative flex flex-col items-start overflow-hidden rounded-lg">
      <div className="relative w-full">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">New</span>
        )}
        {product.isOnSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Sales</span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={300} 
          height={240} 
          className="w-full h-60 object-cover"
        />
      </div>
      <div className="mt-4 w-full flex flex-col items-start">
        <h3 className="text-lg font-semibold text-gray-800 text-start">{product.name}</h3>
        <div className="flex items-start mt-2">
          {product.isOnSale && product.originalPrice ? (
            <>
              <span className="text-gray-500 line-through mr-2">${product.originalPrice}</span>
              <span className="text-red-500 font-bold">${product.price}</span>
            </>
          ) : (
            <span className="text-gray-800 font-bold">${product.price}</span>
          )}
        </div>
      </div>
      <button
        className="absolute bottom-4 right-2 text-white bg-[#F0F2F3] p-2 rounded-lg hover:bg-[#029FAE] transition"
        aria-label={`Add ${product.name} to cart`}
      >
        <Image src={"/Buy 2.png"} alt='' width={22} height={12} />
      </button>
    </div>
  );
};

export default OurProduct;
