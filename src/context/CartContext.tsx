"use client"

import React, { createContext, useContext, useState } from "react";

interface CartContextType{
  cartCount:number;
  addToCart:(quantity?:number) =>void
}

const CartContext = createContext<CartContextType|undefined>(undefined);

export const CartProvider = ({children}:{children:React.ReactNode}) => {
  const [cartCount,setCartCount] = useState(0);

  const addToCart = (quantity = 1) => setCartCount(c => c + quantity);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
