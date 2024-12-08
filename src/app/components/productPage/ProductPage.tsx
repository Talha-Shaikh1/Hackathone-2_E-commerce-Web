import React from 'react';

const featuredProducts = [
  { id: 1, name: 'Library Stool Chair', price: 20, image: '/images/feature-product-1.jpg' },
  { id: 2, name: 'Reading Table', price: 50, image: '/images/feature-product-2.jpg' },
  { id: 3, name: 'Office Chair', price: 75, image: '/images/feature-product-3.jpg' },
  { id: 4, name: 'Lamp Set', price: 40, image: '/images/feature-product-4.jpg' },
  { id: 5, name: 'Book Shelf', price: 150, image: '/images/feature-product-5.jpg' },
];

const ProductPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Product Details */}
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/product-main.jpg"
            alt="Library Stool Chair"
            className="w-full lg:w-[400px] h-auto object-cover rounded-lg border border-gray-300"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Library Stool Chair</h1>
          <p className="text-lg text-teal-600 font-semibold mb-4">$20.00 USD</p>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition">
            🛒 Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Featured Products</h2>
          <a href="#" className="text-teal-500 hover:underline text-sm">
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[150px] object-cover rounded-md mb-4"
              />
              <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
              <p className="text-gray-600 text-sm">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
