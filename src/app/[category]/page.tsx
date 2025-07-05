
import FilterDropDown from "@/components/FilterDropDown";
import ProductList from "@/components/ProductList";
import React from "react";
import { FaFilter } from "react-icons/fa";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const slug = params.category;
  console.log("slug is ", slug);
  const response = await fetch(
    `http://localhost:3000/api/fetchProductsByCategory/${slug}`,
    {
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  const productData = data.products.map((product: any) => ({
    ...product,
    product_name: JSON.parse(product.product_name)[0],
    product_description: JSON.parse(product.product_description)[0],
  }));


  return (
    <>
      <div className="font-lufga">
        <div className="lg:px-12 px-4 w-full mt-8">
          <div className="flex justify-between items-center ">
            <div className="text-xl md:text-4xl lg:text-5xl xl:text-6xl">
              OUR <span className="text-gray-400">{slug.toUpperCase()}</span>{" "}
              PRODUCTS
            </div>
            <div className="">
              <button className="flex justify-start items-center lg:gap-2 gap-1 cursor-pointer">
                <FaFilter size={20} />{" "}
                <span className="text-sm lg:text-xl">Filter</span>
              </button>
            </div>
          </div>

          {/* Filter DropDown Menu */}
          

          <ProductList products={productData} />
        </div>
      </div>
    </>
  );
}
