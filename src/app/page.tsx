import React from "react";
import Image from "next/image";

import fetchBannerImage from "@/services/fetchBannerImage";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductList from "@/components/ProductList";

const page = async () => {
  const imageURL = await fetchBannerImage();
  const response = await fetch("http://localhost:3000/api/fetchAllProducts", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  const productData = data.products.map((product: any) => ({
    ...product,
    product_name: JSON.parse(product.product_name)[0],
    product_description: JSON.parse(product.product_description)[0],
  }));

  return (
    <div className="font-lufga">
      <div className="px-4 w-full mt-4">
        {/* Image Container */}
        <div className="w-full h-[544px] md:h-[983px] lg:h-[800px] xl:h-[701px] relative ">
          {imageURL && (
            <>
              <Image
                src={imageURL}
                alt="samplerun"
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </>
          )}

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center xl:items-start xl:pl-32  text-white z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl tracking-wider leading-10">
              HEAT'S ON. <br />
              KEEP COOL
            </h1>
            <div>
              <p className="text-lg md:text-xl xl:text-2xl mt-4">
                LIGHTWEIGHT & BREATHABLE
              </p>
            </div>
            <div className="md:text-lg xl:text-xl">WARM WEATHER ESSENTIALS</div>
            <div>
              <button>
                <div className="bg-white text-black xl:text-xl px-6 xl:px-12 py-3 rounded-lg mt-10 shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:shadow-lg border border-white">
                  Shop Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Big Headline */}
      <div className="w-full px-4 lg:px-16 mt-20 lg:mt-32">
        <div className="text-center xl:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-light leading-tight tracking-tight">
            <span className="block text-gray-400">
              IT’S YOUR DAY, YOUR CHOICE
            </span>
            <span className="block text-black font-extrabold">
              DRESS FOR YOU,
            </span>
            <span className="block text-gray-400">DRESS YOUR WAY.</span>
          </h2>
        </div>
      </div>

      {/* The Product List Goes here */}
      {/* Product Section Header */}
      <div className="px-4 lg:px-16 mt-20 lg:mt-32">
        <div className="flex justify-between items-center mb-6">
          <div className="">
            <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
              OUR PRODUCTS
            </span>
          </div>
          <div>
            <a
              href="#"
              className="text-sm font-medium underline text-gray-700 hover:text-black"
            >
              SEE ALL PRODUCTS
            </a>
          </div>
        </div>
        <ProductList products={productData} />
      </div>
    </div>
  );
};

export default page;
