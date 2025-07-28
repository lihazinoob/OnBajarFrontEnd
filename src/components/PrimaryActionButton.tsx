import React from "react";
import classNames from "classnames"; // Optional: for cleaner class merging

interface PrimaryActionButtonProps {
  type: "addToCart" | "buyNow";
  onAddToCart: () => void;
  onBuyNow: () => void;
  disabled?: boolean;
  className?: string;
}

const PrimaryActionButton: React.FC<PrimaryActionButtonProps> = ({
  type,
  onAddToCart,
  onBuyNow,
  disabled = false,
  className = "",
}) => {
  const handleClick = () => {
    if (type === "addToCart") {
      onAddToCart();
    } else if (type === "buyNow") {
      onBuyNow();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        xl:px-6 px-3 xl:py-3 py-2 rounded-md tracking-wider text-white bg-black hover:bg-gray-900 
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {type === "addToCart" ? "Add to Cart" : "Buy Now"}
    </button>
  );
};

export default PrimaryActionButton;
