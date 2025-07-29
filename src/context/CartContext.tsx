"use client";
import React, { createContext, useContext, useState } from "react";

// types.ts (optional file)
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  color: string;
  size: string;
  image: string;
}


interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: CartItem) => void;
  cartDrawerOpen: boolean;
  openCartDrawer: () => void;
  closeCartDrawer: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const openCartDrawer = () => setCartDrawerOpen(true);
  const closeCartDrawer = () => setCartDrawerOpen(false);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (existingItemIndex !== -1) {
        // If item already exists, increase quantity
        const updated = [...prev];
        updated[existingItemIndex].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prev, newItem];
      }
    });
  };

  const cartCount = cartItems.length

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        cartDrawerOpen,
        openCartDrawer,
        closeCartDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
