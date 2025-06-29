import React, { useEffect, useState } from "react";
import Image from "next/image";

import fetchBannerImage from "@/services/fetchBannerImage";
import FeaturedProducts from "@/components/FeaturedProducts";

const page = async () => {
  const imageURL = await fetchBannerImage();

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
      <FeaturedProducts/>
    </div>
  );
};

export default page;
