"use client"


import { PiMinus, PiPlus } from "react-icons/pi";

interface QuantitySelectorProps {
  maxQuantity: number;
  value: number;
  onChange: (newQuantity: number) => void;
}
const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  maxQuantity,
  value,
  onChange,
}) =>{
  const handleDecrease = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };
  const handleIncrease = () => {
    if (value < maxQuantity) {
      onChange(value + 1);
    }
  };


  return(
    <div className="space-y-2">
      <div className="flex items-center xl:gap-4 gap-2 border border-gray-400 px-2 xl:py-2 py-1 rounded-md w-fit">
      <button
        onClick={handleDecrease}
        disabled={value <= 1}
        className="text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:text-black transition-colors"
      >
        <PiMinus size={18} />
      </button>

      <div className="h-6 w-px bg-gray-400" />

      <span className="text-lg min-w-[2rem] text-center">{value}</span>

      <div className="h-6 w-px bg-gray-400" />
      <button
        onClick={handleIncrease}
        disabled={value >= maxQuantity}
        className="text-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:text-black transition-colors"
      >
        <PiPlus size={18} />
      </button>
    </div>
    
    {maxQuantity > 0 && (
      <div className="text-xs text-gray-500">
        Max: {maxQuantity} available
      </div>
    )}
    </div>
  );
}
export default QuantitySelector;