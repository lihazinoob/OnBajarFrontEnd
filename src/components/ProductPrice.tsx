"use client";
import React from "react";

interface ProductPriceProps {
  price: number;
  salePercentage?: number;
  className?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  salePercentage,
  className = "",
}) => {
  const hasDiscount = salePercentage && salePercentage > 0;
  const originalPrice = hasDiscount ? Math.round(price / (1 - salePercentage / 100)) : price;
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-3xl font-semibold text-gray-700">
        ৳{price}
      </span>
      {hasDiscount && (
        <>
          <span className="text-xl line-through text-gray-400">
            ৳{originalPrice}
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-semibold">
            Save ৳{originalPrice - price}
          </span>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
