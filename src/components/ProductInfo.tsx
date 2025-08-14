"use client";
import React from "react";

interface ProductInfoProps {
  name: string;
  description: string;
  className?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  description,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold tracking-wider text-gray-800">
        {name}
      </h1>
      
      {/* Review section placeholder */}
      {/* <div className="flex items-center gap-2">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-lg">★</span>
          ))}
        </div>
        <span className="text-sm text-gray-600">(4.5) • 127 reviews</span>
      </div> */}
      
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProductInfo;
