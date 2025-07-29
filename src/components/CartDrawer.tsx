"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { useCart } from "@/context/CartContext";

import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { cartDrawerOpen, openCartDrawer, closeCartDrawer } = useCart();

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
        <div className="p-4">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>
      </div>
    </>
  );
}
