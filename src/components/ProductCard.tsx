"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProductBadges from "./ProductBadges";

export type ProductType = {
  id: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_sale_percentage?: number;
  is_new_product?: boolean;
  product_image: string;
};

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <>
      <Link
        href={`/product/${product.id}`}
      >
        <div
          key={product.id}
          className="relative group rounded overflow-hidden cursor-pointer"
        >
          {/* Discount Badge */}
          {/* {product.product_sale_percentage && (
          <div className="absolute top-2 left-2 bg-green-300 text-black text-xs px-2 py-1 font-bold z-10">
            -{product.product_sale_percentage}%
          </div>
        )} */}
          {/* New Badge */}
          <ProductBadges
            isNewProduct={product.is_new_product}
            isFeaturedProduct={false} // Assuming no featured product for now
            isSoldOut={false} // Assuming no sold out for now
            salePercentage={product.product_sale_percentage}
          />

          {/* Image */}
          <div className="relative w-full h-60 lg:h-80 overflow-hidden">
            <Image
              src={product.product_image[0]}
              alt={product.product_name}
              fill
              className="object-cover"
            />

            {/* Overlay container when modal is not open */}

            <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
              <div
                className="w-full bg-black bg-opacity-80 text-white text-sm lg:text-base py-2 text-center
      transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100
      transition-all duration-300 pointer-events-auto "
              >
                <div className="flex items-center justify-center">
                  <button>
                    <div className="text-xl tracking-tighter">View Product</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-2 text-center">
            <h3 className="text-sm lg:text-base font-semibold truncate">
              {product.product_name}
            </h3>

            {/* Price Info */}
            <div className="text-sm lg:text-xl flex items-center justify-center lg:gap-1">
              {product.product_price && (
                <span className="line-through text-gray-400 mr-1">
                  {product.product_price}.00৳
                </span>
              )}
              <span className="font-bold">{product.product_price}.00৳</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
