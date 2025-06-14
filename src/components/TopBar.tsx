import Link from "next/link";
import { LuSearch } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function TopBar() {
  return (
    <>
      <header className="w-full border-b shadow-sm bg-white ">
        <div className="flex items-center justify-between px-12 py-4">
          {/* Logo */}
          <Link href={"/"}>
            <div className="text-xl font-bold">On Bazar</div>
          </Link>

          {/* Menu Items */}
          <nav className="hidden md:flex gap-2 font-medium">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/new-in", label: "New Arrivals" },
              { href: "/accessories", label: "Bestsellers" },
              { href: "/sale", label: "Sale" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md hover:text-gray-700 transition-colors duration-200 ease-in-out"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6 cursor-pointer">
            <LuSearch size={30} />
            <LuHeart size={30} />
            <Link href="/cart" className="flex items-center gap-1">
              <MdOutlineShoppingCart size={30} />
              {/* Cart Item Count */}
              <span className="text-base font-medium">৳ 0.00</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
