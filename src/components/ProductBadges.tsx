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
    <div className="absolute top-4 left-2 flex flex-col gap-2 z-10">
      {isSoldOut && (
        <div className="bg-white text-white text-xs px-2 py-1 rounded-lg font-semibold">
          SOLD OUT
        </div>
      )}
      {salePercentage && salePercentage > 0 && (
        <div className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
          -{salePercentage}% OFF
        </div>
      )}
      {isNewProduct && (
        <div className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
          NEW
        </div>
      )}
      {isFeaturedProduct && (
        <div className="bg-white text-black text-xs px-2 py-1 rounded-lg font-semibold">
          FEATURED
        </div>
      )}
    </div>
  );
};

export default ProductBadges;
