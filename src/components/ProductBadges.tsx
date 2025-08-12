"use client";
import React from "react";

interface ProductBadgesProps {
  isNewProduct?: boolean;
  isFeaturedProduct?: boolean;
  isSoldOut?: boolean;
  salePercentage?: number;
}

const ProductBadges: React.FC<ProductBadgesProps> = ({
  isNewProduct,
  isFeaturedProduct,
  isSoldOut,
  salePercentage,
}) => {
  return (
    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
      {isSoldOut && (
        <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          SOLD OUT
        </div>
      )}
      {salePercentage && salePercentage > 0 && (
        <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          -{salePercentage}% OFF
        </div>
      )}
      {isNewProduct && (
        <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          NEW
        </div>
      )}
      {isFeaturedProduct && (
        <div className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
          FEATURED
        </div>
      )}
    </div>
  );
};

export default ProductBadges;
