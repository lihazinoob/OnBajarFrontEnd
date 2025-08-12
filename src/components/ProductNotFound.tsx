"use client";
import React from "react";
import Link from "next/link";

interface ProductNotFoundProps {
  message?: string;
  onRetry?: () => void;
}

const ProductNotFound: React.FC<ProductNotFoundProps> = ({ 
  message = "Product not found", 
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="text-center space-y-6">
        {/* Error Icon */}
        <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" 
            />
          </svg>
        </div>

        {/* Error Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 max-w-md">
            {message}. The product you're looking for might have been removed or is temporarily unavailable.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Try Again
            </button>
          )}
          <Link
            href="/"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
