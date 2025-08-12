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
      <div className="flex gap-4 flex-wrap">
        {colors.map((color: string, index: number) => {
          const isSelected = selectedColor === color;
          return (
            <div key={index} className="flex flex-col items-center gap-2">
              <button
                onClick={() => onColorSelect(color)}
                style={{
                  backgroundColor: color,
                }}
                className={`
                  w-12 h-12 rounded-full border-2 transition-all duration-300
                  ${isSelected 
                    ? "border-black scale-110 shadow-lg" 
                    : "border-gray-400 hover:border-gray-600 hover:scale-105"
                  }
                `}
                title={color}
              />
              {/* Color name */}
              <span className="text-xs text-center capitalize font-medium text-gray-600">
                {color}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
