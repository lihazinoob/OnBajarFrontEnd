"use client";
import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import Image from "next/image";

import React from "react";
import Link from "next/link";

interface Category {
  id: number;
  created_at: string;
  category_name: string;
  category_description: string;
  slug:string;
  category_image: string;
}

export default function LaptopTopMenuBar() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  React.useEffect(() => {
    const fetchCategoryInfo = async () => {
      const response = await fetch(
        "https://raw-node-js.onrender.com/api/fetchAllCategoryInformation"
      );
      if (!response.ok) {
        throw new Error("Error fetching data from the backend");
      }
      const result = await response.json();
      setCategories(result.categoryInformation);
    };
    fetchCategoryInfo();
  });
  return (
    <>
      <div className="font-lufga w-full shadow-md ">
        <div className=" flex items-center justify-between px-12 xl:px-20 shadow-lg py-6  ">
          <div className="text-3xl font-bold cursor-pointer">ON-BAZAR</div>
          <nav>
            <ul className="flex gap-8 xl:gap-12 tracking-tight text-lg xl:text-xl cursor-pointer">
              <li className="relative group">
                <button className="hover:opacity-50 cursor-pointer">
                  Shop
                </button>
                <div className="absolute top-0 -left-[30rem] transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 lg:min-w-[1340px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="relative z-10">
                      <div className="py-8 grid grid-cols-2 lg:grid-cols-4 lg:gap-8 mx-auto lg:ml-12">
                        {categories.map((category: Category) => (
                          <Link href={`/${category.slug}`} key={category.id}>
                            <div >
                              <div className="relative w-40 h-60 xl:w-60">
                                <Image
                                  src={
                                    category.category_image ||
                                    "/images/sample.jpg"
                                  }
                                  alt={category.category_name}
                                  fill
                                  className="object-cover"
                                />
                              </div>

                              <div>
                                <h3 className="tracking-widest text-2xl my-4">
                                  {category.category_name.toUpperCase()}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  {category.category_description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>New Arrivals</li>
              <li>BestSeller</li>
            </ul>
          </nav>

          <div className="flex gap-4 items-center xl:gap-8">
            {/* Search bar */}
            <div className="flex items-center gap-2 xl:gap-4 border border-slate-300 px-4 xl:px-6 py-2">
              <div className="text-slate-400 xl:text-lg">Search</div>
              <IoSearchOutline size={25} className="cursor-pointer" />
            </div>
            <PiShoppingCartSimple size={25} />
          </div>
        </div>
      </div>
    </>
  );
}
