"use client";
import React from "react";

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
  className?: string;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onColorSelect,
  className = "",
}) => {
  if (!colors || colors.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="font-semibold tracking-widest text-lg">COLOR</div>
      <div className="flex gap-3 flex-wrap">
        {colors.map((color: string, index: number) => {
          const isSelected = selectedColor === color;
          return (
            <button
              key={index}
              onClick={() => onColorSelect(color)}
              className={`
                px-4 py-2 rounded-lg border-2 transition-all duration-300 font-medium text-sm
                ${isSelected 
                  ? "border-black bg-black text-white shadow-lg" 
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-50"
                }
              `}
            >
              {color}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;