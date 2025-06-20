"use client";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import ShopDropDownMenu from "./ShopDropDownMenu";

import React from "react";

export default function LaptopTopMenuBar() {
  const [isShopHovered, setIsShopHovered] = React.useState(false);

  return (
    <>
      <div
        className="font-lufga w-full shadow-lg "
        onMouseLeave={() => setIsShopHovered(false)}
      >
        <div className=" flex items-center justify-between px-12 xl:px-20 shadow-lg py-6  ">
          <div className="text-3xl font-bold cursor-pointer">ON-BAZAR</div>
          <div className="flex gap-8 xl:gap-12 tracking-tight text-lg xl:text-xl cursor-pointer">
            <div className="relative group cursor-pointer">
              <div
                onMouseEnter={() => setIsShopHovered(true)}
                className="pb-2 group-hover:border-b-2 group-hover:border-yellow-500 transition-all duration-200"
              >
                Shop
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div
                onMouseEnter={() => setIsShopHovered(false)}
                className="pb-2 group-hover:border-b-2 group-hover:border-yellow-500 transition-all duration-200"
              >
                New Arrivals
              </div>
            </div>
            <div className="relative group cursor-pointer">
              <div className="pb-2 group-hover:border-b-2 group-hover:border-yellow-500 transition-all duration-200">
                BestSellers
              </div>
            </div>
            <div>Sale</div>
          </div>
          <div className="flex gap-4 items-center xl:gap-8">
            {/* Search bar */}
            <div className="flex items-center gap-2 xl:gap-4 border border-slate-300 px-4 xl:px-6 py-2">
              <div className="text-slate-400 xl:text-lg">Search</div>
              <IoSearchOutline size={25} className="cursor-pointer" />
            </div>
            <PiShoppingCartSimple size={25} />
          </div>
        </div>
        {isShopHovered && <ShopDropDownMenu />}
      </div>
    </>
  );
}
