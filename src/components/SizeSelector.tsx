"use client";
import React from "react";

interface ProductSize {
  size: string;
  quantity: number;
}

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string | null;
  onSizeSelect: (size: string) => void;
  className?: string;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSizeSelect,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="font-semibold tracking-widest text-lg">SIZE</div>
      <div className="flex gap-3 flex-wrap">
        {sizes.map((sizeInfo, index) => {
          const isSelected = selectedSize === sizeInfo.size;
          const isOutOfStock = sizeInfo.quantity === 0;
          
          return (
            <div key={index} className="relative">
              <button
                onClick={() => !isOutOfStock && onSizeSelect(sizeInfo.size)}
                disabled={isOutOfStock}
                className={`
                  w-12 h-12 flex items-center justify-center border text-sm font-semibold 
                  rounded-md transition-all duration-300 relative
                  ${isSelected
                    ? "bg-black text-white border-black"
                    : isOutOfStock
                    ? "border-gray-300 text-gray-400 cursor-not-allowed bg-gray-100"
                    : "border-gray-300 hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
                  }
                `}
              >
                {sizeInfo.size}
                {isOutOfStock && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-red-500 rotate-45"></div>
                  </div>
                )}
              </button>
              {/* Stock indicator */}
              <div className="text-xs text-center mt-1 text-gray-500">
                {isOutOfStock ? "Out" : `${sizeInfo.quantity}`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SizeSelector;
