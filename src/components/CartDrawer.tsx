"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import CartItemComponent from "./CartItemComponent";

import { useCart } from "@/context/CartContext";

import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { cartDrawerOpen, openCartDrawer, closeCartDrawer,cartItems } = useCart();

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-[320px] bg-white shadow-lg z-[999] transition-transform duration-300 ease-in-out ${
          cartDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button
            onClick={closeCartDrawer}
            className="text-gray-600 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Drawer  content */}
        {cartItems.length === 0 ? (
        <div className="p-4 text-sm text-gray-600">Your cart is empty.</div>
      ) : (
        cartItems.map((item) => <CartItemComponent key={item.id} item={item} />)
      )}
      </div>
    </>
  );
}
