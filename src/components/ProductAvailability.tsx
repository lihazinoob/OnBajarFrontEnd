"use client";
import React from "react";

interface ProductSize {
  size: string;
  quantity: number;
}

interface ProductAvailabilityProps {
  sizes: ProductSize[];
  selectedSize: string | null;
  className?: string;
}

const ProductAvailability: React.FC<ProductAvailabilityProps> = ({
  sizes,
  selectedSize,
  className = "",
}) => {
  const totalStock = sizes.reduce((sum, size) => sum + size.quantity, 0);
  const selectedSizeStock = selectedSize 
    ? sizes.find(s => s.size === selectedSize)?.quantity || 0 
    : totalStock;

  const getAvailabilityInfo = () => {
    if (selectedSizeStock === 0) {
      return {
        message: selectedSize ? `Size ${selectedSize} is out of stock` : "Product is out of stock",
        color: "text-red-600 bg-red-50",
        icon: "❌"
      };
    } else if (selectedSizeStock <= 5) {
      return {
        message: `Only ${selectedSizeStock} left${selectedSize ? ` in size ${selectedSize}` : ''}!`,
        color: "text-orange-600 bg-orange-50",
        icon: "⚠️"
      };
    } else if (selectedSizeStock <= 20) {
      return {
        message: `${selectedSizeStock} in stock${selectedSize ? ` (size ${selectedSize})` : ''}`,
        color: "text-yellow-600 bg-yellow-50",
        icon: "📦"
      };
    } else {
      return {
        message: `Available${selectedSize ? ` in size ${selectedSize}` : ''}`,
        color: "text-green-600 bg-green-50",
        icon: "✅"
      };
    }
  };

  const availability = getAvailabilityInfo();

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${availability.color} ${className}`}>
      <span className="text-sm">{availability.icon}</span>
      <span className="text-sm font-medium">{availability.message}</span>
    </div>
  );
};

export default ProductAvailability;
