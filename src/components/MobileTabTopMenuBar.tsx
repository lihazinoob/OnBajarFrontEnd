import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function MobileTabTopMenuBar()
{
  return(
    <div className="font-lufga flex items-center justify-between px-6 sm:px-8 md:px-12 py-5 sm:py-6 md:py-7 shadow-md">
        <div className="flex gap-5 sm:gap-7 md:gap-10 cursor-pointer ">
          <RxHamburgerMenu size={20}/>
          <IoSearchOutline size={20} />
        </div>
        <div className="cursor-point text-xl md:text-2xl font-bold">ON-BAZAR</div>
        <div className="flex gap-5 sm:gap-7 md:gap-10 cursor-pointer">
          <FiUser size={20} />
          <PiShoppingCartSimple size={20} />
        </div>
      </div>
  );
}