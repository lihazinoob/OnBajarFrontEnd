"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { useCart } from "@/context/CartContext";

export default function MobileTabTopMenuBar() {
  const { cartCount } = useCart();
  return (
    <div className="font-lufga flex items-center justify-between px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 shadow-md">
      <div className="flex gap-5 sm:gap-7 md:gap-10 cursor-pointer ">
        <RxHamburgerMenu size={20} />
        <IoSearchOutline size={20} />
      </div>
      <div className="cursor-point text-xl md:text-2xl font-bold">ON-BAZAR</div>
      <div className="flex gap-5 sm:gap-7 md:gap-10 cursor-pointer">
        <FiUser size={20} />
        <PiShoppingCartSimple size={20} />
        {cartCount > 0 && (
          <span className="absolute top-[15px] right-[10px] bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  );
}
