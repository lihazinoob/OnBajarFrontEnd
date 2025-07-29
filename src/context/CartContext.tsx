"use client"

import React, { createContext, useContext, useState } from "react";

interface CartContextType{
  cartCount:number;
  addToCart:(quantity?:number) =>void,
  cartDrawerOpen:boolean,
  openCartDrawer:() => void,
  closeCartDrawer:() => void, 
}

const CartContext = createContext<CartContextType|undefined>(undefined);

export const CartProvider = ({children}:{children:React.ReactNode}) => {
  
  const [cartCount,setCartCount] = useState(0);
  // state for tracking if the cartDrawer is open or not
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // function to toggle the cartDrawer
  const toggleCartDrawer = () => setCartDrawerOpen(prev => !prev);
  // function to open the cartDrawer
  const openCartDrawer = () => setCartDrawerOpen(true);
  // function to close the cartDrawer
  const closeCartDrawer = () => setCartDrawerOpen(false);



  const addToCart = (quantity = 1) => setCartCount(c => c + quantity);

  return (
    <CartContext.Provider value={{ cartCount, addToCart,cartDrawerOpen,openCartDrawer,closeCartDrawer }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
