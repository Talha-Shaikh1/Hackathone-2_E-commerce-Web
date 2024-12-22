'use client'
import React from 'react';
import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";


const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    image: "/Feature-product-1.png",
    isNew: true,
    quantity: 1
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    image: "/Feature-product-2.png",
    isOnSale: true,
    originalPrice: 30,
    quantity: 1
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    image: "/Feature-product-3.png",
    quantity: 1
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    image: "/Feature-product-4.png",
    quantity: 1
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 20,
    image: "/categories-product-2.png",
    quantity: 1
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    image: "/our-product-6.png",
    quantity: 1
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    image: "/our-product-7.png",
    isNew: true,
    quantity: 1
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    image: "/Feature-product-1.png",
    quantity: 1
  },
  { id: 9, 
    name: "Library Stool Chair", 
    price: 20, 
    image: "/Image.png",
    quantity: 1 },
  {
    id: 10,
    name: "Library Stool Chair",
    price: 20,
    image: "/our-product-2.png",
    isOnSale: true,
    originalPrice: 30,
    quantity: 1
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: 20,
    image: "/Feature-product-3.png",
    quantity: 1
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: 20,
    image: "/categories-product-3.png",
    quantity: 1
  },
];

interface Props{
  params: Promise<{id: string}>;
}


export default function ProductDetails({ params }: Props) {
    const {addToCart} = useCart();
    const {id} = use(params)
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className=" px-4 py-8 ">
      <div className="flex gap-8 flex-col md:flex-row items-center justify-center">
        
        <div className=" h-full md:h-96">
          <Image
            src={product.image}
            alt={product.name}
            height={450}
            width={450}
            className="rounded-lg shadow-md"
          />
        </div>

        
        <div className="flex flex-col justify-center items-center md:items-start">
          <div className="flex flex-col justify-center md:items-start items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <div className="w-28 py-2 bg-[#029FAE] text-center rounded-3xl text-white font-semibold ">
              $20.00 USD
            </div>
          </div>

          <hr className="my-6 w-80" />
          <div className="w-96 flex flex-col justify-center items-center md:items-start">
            <p className="text-gray-400 md:text-start text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam hic, fugit libero sapiente facilis dolore id. Facilis quaerat dolore deleniti vero, illum eligendi vitae minus labore voluptate optio? Asperiores, ex!</p>
            <div className="mt-6 w-48 py-3 bg-[#029FAE] text-white text-lg font-medium rounded-md hover:bg-teal-600 transition duration-300 flex text-center justify-center items-center">
            <Image src={"/Group.png"} alt='' width={26} height={14} className="mr-4 text-white"/>
            <button onClick={() => addToCart({ ...product, quantity: product.quantity || 1 })}>
              Add to Cart
            </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-36">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Products
          </h2>
          <Link href={"/AllProducts/"} className="underline underline-offset-4">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className=" p-4 rounded-lg transition duration-300"
            >
              <div className="relative w-full h-32 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="flex justify-between">
              <h3 className="text-sm font-medium text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">${item.price}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
