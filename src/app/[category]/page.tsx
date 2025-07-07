"use client";
import FilterDropDown from "@/components/FilterDropDown";
import ProductList from "@/components/ProductList";
import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import dynamicPriceRangeCalculator from "@/services/dynamicPriceRangeCalculator";
import { useParams } from "next/navigation";
import ProductSkeletonList from "@/components/ProductSkeletonList";
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

export default function CategoryPage() {
  const params = useParams();
  const rawSlug = params?.category;
  const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug ?? "";

  // state for tracking in which page I am in
  const [currentPage, setCurrentPage] = useState(1);
  // state for tracking how many pages in total in there
  const [totalPages, setTotalPages] = useState(1);

  const [prouducts, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);
  // an array to put all the product prices

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://raw-node-js.onrender.com/api/fetchProductsByCategory/${slug}?page=${currentPage}`,
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
        setTotalPages(data.totalPages);
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
          {open && <FilterDropDown priceRanges={priceRanges} />}

          {error && <p className="text-red-500">{error}</p>}

          {loading ?(<>
            <ProductSkeletonList count={12}/>
          </>) : !error && (
            <>
              <ProductList products={prouducts} />

              {/* Render the pages here */}
              <div className="flex justify-center gap-2 mt-10">
                <button
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded ${
                        currentPage === page
                          ? "bg-black text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
