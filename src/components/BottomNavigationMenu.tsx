import { RiShoppingBasketFill } from "react-icons/ri";
import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function BottomNavigationMenu() {
  return (
    <>
      <nav className="md:hidden  fixed px-12  bottom-0 left-0 right-0 bg-white border-t shadow-sm z-20">
        <div className="flex items-center justify-between cursor-pointer ">
          <div className="flex flex-col items-center justify-center py-2 gap-y-1 hover:text-gray-700 transition-colors duration-200 ease-in-out ">
            <RiShoppingBasketFill size={30} />
            <div className="font-semibold tracking-wider">Shop</div>
          </div>
          <div className="flex flex-col items-center justify-center py-2 gap-y-1 hover:text-gray-700 transition-colors duration-200 ease-in-out">
            <LuHeart size={30} />
            <div className="font-semibold tracking-wider">WishList</div>
          </div>
          <div className="flex flex-col items-center justify-center py-2 gap-y-1 hover:text-gray-700 transition-colors duration-200 ease-in-out">
            <MdOutlineShoppingCart size={30} />
            <div className="font-semibold tracking-wider">Cart</div>
          </div>
        </div>
      </nav>
    </>
  );
}
