"use client";
import React from "react";

const ProductDetailsSkeleton: React.FC = () => {
  return (
    <div className="font-lufga mt-8 animate-pulse">
      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Product Header Skeleton */}
        <div className="px-6 space-y-4">
          <div className="text-center space-y-3">
            <div className="h-8 bg-gray-300 rounded mx-auto w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded mx-auto w-full"></div>
            <div className="h-4 bg-gray-300 rounded mx-auto w-2/3"></div>
          </div>
          <div className="flex justify-center">
            <div className="h-8 bg-gray-300 rounded-full w-24"></div>
          </div>
        </div>

        {/* Image Skeleton */}
        <div className="mt-8 px-6">
          <div className="h-80 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Price Skeleton */}
        <div className="px-6 py-6">
          <div className="h-10 bg-gray-300 rounded w-40"></div>
        </div>

        <div className="px-4">
          <hr className="border-t border-gray-300" />
        </div>

        {/* Options Skeleton */}
        <div className="px-6 py-6 space-y-6">
          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded w-20"></div>
            <div className="flex gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-6 bg-gray-300 rounded w-16"></div>
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-gray-300 rounded"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons Skeleton */}
        <div className="px-6 space-y-4">
          <div className="flex gap-4">
            <div className="h-12 bg-gray-300 rounded w-32"></div>
            <div className="h-12 bg-gray-300 rounded flex-1"></div>
          </div>
          <div className="h-12 bg-gray-300 rounded w-full"></div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="flex md:px-10 xl:px-32 gap-8 xl:gap-16">
          {/* Image Section Skeleton */}
          <div className="flex gap-8 xl:gap-16">
            <div className="flex flex-col gap-4 w-20 xl:w-28">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-full h-20 xl:h-28 bg-gray-300 rounded"></div>
              ))}
            </div>
            <div className="flex-1 max-w-[650px] h-[400px] xl:h-[650px] bg-gray-300 rounded-lg"></div>
          </div>

          {/* Details Section Skeleton */}
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <div className="h-10 bg-gray-300 rounded w-3/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5"></div>
            </div>

            <div className="h-8 bg-gray-300 rounded w-32"></div>
            <div className="h-12 bg-gray-300 rounded w-48"></div>

            <hr className="border-t border-gray-300" />

            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-20"></div>
              <div className="flex gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-300 rounded-full"></div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-16"></div>
              <div className="flex gap-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>

            <div className="h-12 bg-gray-300 rounded w-40"></div>

            <div className="flex gap-4">
              <div className="h-12 bg-gray-300 rounded flex-1"></div>
              <div className="h-12 bg-gray-300 rounded flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
