"use client";
import Image from "next/image";
import { CartItem } from "@/context/CartContext";

interface CartItemProps {
  item: CartItem;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item }) => {
  return (
    <>
      <div className="flex gap-4 p-4 border-b items-center">
        {/* Product Image */}
        <div className="w-20 h-20 flex-shrink-0 relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between flex-1">
          <div className="text-sm font-semibold">{item.name}</div>
          <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
          <div className="text-sm font-medium text-gray-900">
            ৳ {item.price}
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItemComponent;
