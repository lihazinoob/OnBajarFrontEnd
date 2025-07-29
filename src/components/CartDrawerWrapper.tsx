"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function CartDrawerWrapper() {
  const { cartDrawerOpen, closeCartDrawer } = useCart();

  // Optional: prevent body scroll when cart is open
  useEffect(() => {
    if (cartDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartDrawerOpen]);

  return (
    <>
      {cartDrawerOpen && (
        <div
          onClick={closeCartDrawer}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        />
      )}
      <CartDrawer />
    </>
  );
}
