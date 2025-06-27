"use client";
import Image from "next/image";
import React from "react";
interface Category {
  id: number;
  created_at: string;
  category_name: string;
  category_description: string;
  category_image: string;
}

export default  function ShopDropDownMenu() {
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
    <div className="z-10 absolute w-screen bg-white text-black shadow-md hidden group-hover:block">
      <div className=" py-8 grid grid-cols-2 lg:grid-cols-5 lg:gap-2 xl:gap-24 lg:pl-8 xl:pl-0">
        {categories.map((category: Category) => (
          <div key={category.id}>
            {/* Image container */}
            <div className="relative w-40 h-60 xl:w-60">
              <Image
                src={category.category_image || "/images/sample.jpg"} // fallback image
                alt={category.category_name}
                fill
                className="object-cover"
              />
            </div>
            {/* Text Container */}
            <div>
              <h3 className="tracking-widest text-2xl my-4">
                {category.category_name.toUpperCase()}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.category_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
