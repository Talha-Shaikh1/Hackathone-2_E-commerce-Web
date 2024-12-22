'use client';
import React from 'react';

import { useCart } from '@/app/context/CartContext';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-start">Bag</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-center border-b pb-4">
                {/* Image */}
                <div className="w-40 h-40">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={250}
                    height={250}
                    className="rounded object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
                  <div className='flex items-center gap-6 '>
                  <p className="text-gray-600">Size: L</p>
                  <div className='flex items-center '>
                    <p className='text-gray-600'>Quantity</p>
                    <input
                    type="number"
                    value={item.quantity || 1}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1);
                      updateQuantity(item.id, value);
                    }}
                    className="w-10 border border-none text-center"
                  />
                  </div>
                  
                  </div>
                  <div className='items-end flex h-10 justify-center md:justify-start mb-6'>
                    <button>
                     <FaRegHeart className=' text-black h-6 w-5' />
                    </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:underline "
                  >
                    🗑️
                  </button>
                  </div>
                 
                  
                </div>

                {/* Quantity and Remove */}
                <div >
                <p className="font-medium">MRP: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Side: Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Estimated Delivery & Handling</span>
            <span className="font-medium">Free</span>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full bg-[#029FAE] text-white py-2 rounded-3xl hover:bg-teal-600 ">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
