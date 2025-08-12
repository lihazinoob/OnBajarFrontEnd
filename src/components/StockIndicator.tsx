"use client";
import React from "react";

interface StockIndicatorProps {
  totalQuantity: number;
  className?: string;
}

const StockIndicator: React.FC<StockIndicatorProps> = ({
  totalQuantity,
  className = "",
}) => {
  const getStockStatus = () => {
    if (totalQuantity === 0) {
      return { text: "Out of Stock", color: "text-red-600 bg-red-50", icon: "❌" };
    } else if (totalQuantity <= 10) {
      return { text: `Only ${totalQuantity} left`, color: "text-orange-600 bg-orange-50", icon: "⚠️" };
    } else if (totalQuantity <= 50) {
      return { text: `${totalQuantity} in stock`, color: "text-yellow-600 bg-yellow-50", icon: "📦" };
    } else {
      return { text: "In Stock", color: "text-green-600 bg-green-50", icon: "✅" };
    }
  };

  const status = getStockStatus();

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg ${status.color} ${className}`}>
      <span>{status.icon}</span>
      <span className="font-medium text-sm">{status.text}</span>
    </div>
  );
};

export default StockIndicator;
