"use client";

import React from "react";

import Link from "next/link";

import { LuSearch } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function TopBar() {
  //state for tracking when hovering over the shop menu item, the dropdown is open or not
  const [isShopHovered, setIsShopHovered] = React.useState<boolean>(false);

  return (
    <>
      {/* Semi-transparent Overlay */}
      {isShopHovered && (
        <div className="fixed inset-0 top-[72px] bg-black/10 z-10" />
      )}
      <header className="w-full border-b shadow-sm bg-white ">
        <div className="flex items-center justify-between px-12 py-4">
          {/* Logo */}
          <Link href={"/"}>
            <div className="text-xl font-bold">On Bazar</div>
          </Link>

          {/* Menu Items */}
          <nav className="hidden md:flex gap-2 font-medium items-center">
            {/* Shop Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopHovered(true)}
              onMouseLeave={() => setIsShopHovered(false)}
            >
              <div className="flex items-center">
                <Link
                  href="/new-in"
                  className="px-1 py-2 rounded-md hover:text-gray-700 transition-colors duration-200 ease-in-out"
                >
                  Shop
                </Link>
                <FaArrowTurnDown className="mt-1" />
              </div>
              {/* Dropdown Menu */}
              {isShopHovered && (
                <div className="absolute top-8 left-0 mt-2 w-30 bg-gray-50 border border-gray-200 rounded-md shadow-lg z-30 px-4 py-2">
                  <div className="flex flex-col items-center justify-center space-y-2 text-gray-500">
                    <Link
                      href="/category/jersey"
                      className="hover:text-gray-700 transition-colors duration-200"
                    >
                      Jersey
                    </Link>
                    <Link
                      href="/category/t-shirt"
                      className="hover:text-gray-700 transition-colors duration-200"
                    >
                      T-shirt
                    </Link>
                    <Link
                      href="/category/trousers"
                      className="hover:text-gray-700 transition-colors duration-200"
                    >
                      Trousers
                    </Link>
                    <Link
                      href="/category/shirt"
                      className="hover:text-gray-700 transition-colors duration-200"
                    >
                      Shirt
                    </Link>
                    <Link
                      href="/category/shorts"
                      className="hover:text-gray-700 transition-colors duration-200"
                    >
                      Shorts
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div>
              <Link
                href="/new-in"
                className="px-3 py-2 rounded-md hover:text-gray-700 transition-colors duration-200 ease-in-out"
              >
                New Arrivals
              </Link>
            </div>
            <div>
              <Link
                href="/new-in"
                className="px-3 py-2 rounded-md hover:text-gray-700 transition-colors duration-200 ease-in-out"
              >
                New Arrivals
              </Link>
            </div>
            <div>
              <Link
                href="/accessories"
                className="px-3 py-2 rounded-md hover:text-gray-700 transition-colors duration-200 ease-in-out"
              >
                Bestsellers
              </Link>
            </div>
            <div>
              <Link
                href="/sale"
                className="px-3 py-2 rounded-md hover:text-gray-700 transition-colors duration-200 ease-in-out"
              >
                Sale
              </Link>
            </div>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6 cursor-pointer">
            <LuSearch size={30} />
            <LuHeart size={30} />
            <Link href="/cart" className="flex items-center gap-1">
              <MdOutlineShoppingCart size={30} />
              {/* Cart Item Count */}
              <span className="text-base font-medium">৳ 0.00</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
