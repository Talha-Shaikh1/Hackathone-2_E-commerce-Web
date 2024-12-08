import React from 'react'

function Products() {

  const images = [
    "/categories-product-2.png",
    "/Image.png",
    '/Feature-product-2.png', 
    '/Feature-product-1.png',
    '/Feature-product-3.png',
    "/categories-product-3.png"
  ]

  return (
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
  )
}

export default Products
