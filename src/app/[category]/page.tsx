"use client";
import FilterDropDown from "@/components/FilterDropDown";
import ProductList from "@/components/ProductList";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import dynamicPriceRangeCalculator from "@/services/dynamicPriceRangeCalculator";

interface Product {
  id: number;
  created_at: string;
  product_name: string; // Parsed from JSON string
  product_description: string; // Parsed from JSON string
  product_price: number;
  product_sale_percentage: number;
  is_featured_product: boolean;
  is_new_product: boolean;
  product_quantity: number;
  product_colors: string[]; // Array of hex color strings
  product_category_id: number;
  is_sold_out: boolean;
  product_image: string;
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const slug = params.category;
  const [prouducts, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  // an array to put all the product prices

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://raw-node-js.onrender.com/api/fetchProductsByCategory/${slug}`,
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

        setProducts(productData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [slug]);

  const allProductPrice = prouducts.map((p) => p.product_price);
  const priceRanges = dynamicPriceRangeCalculator(allProductPrice);
  // console.log(priceRanges);

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
              <button
                className="flex justify-start items-center lg:gap-2 gap-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <FaFilter size={20} />{" "}
                <span className="text-sm lg:text-xl">Filter</span>
              </button>
            </div>
          </div>

          {/* Filter DropDown Menu */}
          {open && <FilterDropDown priceRanges = {priceRanges} />}

          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && <ProductList products={prouducts} />}
        </div>
      </div>
    </>
  );
}
