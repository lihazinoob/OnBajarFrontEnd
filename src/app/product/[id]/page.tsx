"use client";
import ImageSlider from "@/components/ImageSlider";
import React from "react";
import { use } from "react";

import QuantitySelector from "@/components/QuantitySelector";
import PrimaryActionButton from "@/components/PrimaryActionButton";

interface Product {
  product_name: string;
  product_description: string;
  product_price: number;
  product_image: string[];
  product_colors: string[];
  product_size: string[];
  product_quantity: number;
}

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // Using use to resolve the promise and get the id
  const [product, setProduct] = React.useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://raw-node-js.onrender.com/api/fetchProductById/${id}`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch product details");

        const data = await res.json();
        setProduct(data.productInformation);
        setSelectedImage(data.productInformation.product_image[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // functionality for image selection
  const selectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImage(e.currentTarget.src);
  };

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg">
        Product not found
      </div>
    );
  }
  return (
    <div className="font-lufga mt-8">
      {/* This portion is for mobile */}
      <div className="md:hidden">
        {/* Product Title and Subtitle Portion */}
        <div className="flex flex-col gap-2 justify-center items-center ">
          {/* Product Title */}
          <div className="text-2xl text-gray-500 font-bold tracking-widest">
            {product.product_name}
          </div>
          {/* Product Subtitle */}
          <div className="font-extralight text-base text-center max-w-md mx-auto px-8">
            {product.product_description}
          </div>
        </div>
        {/* Product Image Portion */}
        <div className="mt-8">
          <ImageSlider
            images={product.product_image}
            name={product.product_name}
          />
        </div>

        {/* <hr className="border-t border-gray-300 mt-12" /> */}

        {/* Product Price Portion */}
        <div className="text-3xl  font-semibold text-gray-700 px-8 py-4 mt-8">
          {product.product_price}.00৳
        </div>

        <div className="px-4">
          <hr className="border-t border-gray-300 " />
        </div>

        {/* Product Color Portion */}
        <div className="mt-4 mb-4">
          <div className="flex items-center justify-center font-semibold tracking-widest">
            COLOR
          </div>
          <div className="flex items-center justify-center gap-8 mt-4 text-center">
            {product.product_colors.map((color: string, i: number) => (
              <span
                key={i}
                style={{
                  backgroundColor: color,
                  display: "inline-block",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "2px solid #666", // <- consistent border for all
                  // antialiased: "auto", // <- smooth edges
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        <div className="px-4">
          <hr className="border-t border-gray-300 mb-6" />
        </div>
        <div>
          <div className="flex items-center justify-center font-semibold tracking-widest">
            SIZE
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 text-center">
            {product.product_size.map((size: string, index: number) => (
              <span
                key={index}
                className="w-10 h-10 flex items-center justify-center border border-gray-100 text-lg font-semibold cursor-pointer rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800"
              >
                {size}
              </span>
            ))}
          </div>
          <div className="flex flex-row my-8 px-4 gap-4">
            <QuantitySelector
              maxQuantity={product.product_quantity}
              value={quantity}
              onChange={(newQuantity) => setQuantity(newQuantity)}
            />
            <PrimaryActionButton
                type="addToCart"
                onAddToCart={() => console.log("Added to cart!")}
                onBuyNow={() => console.log("Buying now!")}
              />
          </div>
        </div>
      </div>

      {/* This portion is for laptop */}

      <div className="hidden md:block">
        <div className="flex flex-row md:px-10 xl:gap-16  md:gap-12 xl:px-32  ">
          <div className="flex flex-row xl:gap-16 md:gap-8">
            {/* LEFT:Scrollable Thumbnails */}
            <div className="flex flex-col gap-4 w-20 xl:w-28 overflow-y-auto max-h-[90vh] pr-1">
              {product.product_image.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-20 xl:h-28 object-cover rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={selectImage}
                />
              ))}
            </div>

            {/* MIDDLE: Selected Images */}
            <div className="flex-1 2xl:w-[800px]  xl:w-[650px] md:w-[290px] md:h-[410px] xl:h-[820px]">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section:Product Details */}
          <div className="w-full space-y-4">
            <div className="xl:text-4xl md:text-xl font-semibold tracking-wider">
              {product.product_name}
            </div>
            <div>Review Section</div>
            <div className="xl:text-xl md:text-md mb-4">
              {product.product_description}
            </div>

            <div className="text-3xl font-semibold text-gray-700 pb-8">
              {product.product_price}.00৳
            </div>

            <hr className="border-t border-gray-300 " />
            <div className="font-semibold tracking-widest text-lg pb-4">
              COLOR
            </div>
            <div className="flex gap-8 text-center pb-6">
              {product.product_colors.map((color: string, i: number) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: color,
                    display: "inline-block",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "2px solid #666", // <- consistent border for all
                    // antialiased: "auto", // <- smooth edges
                  }}
                  title={color}
                />
              ))}
            </div>
            <hr className="border-t border-gray-300 " />
            <div className="font-semibold tracking-widest text-lg pt-6 ">
              SIZE
            </div>
            <div className="flex gap-6 text-center pb-6">
              {product.product_size.map((size: string, index: number) => (
                <span
                  key={index}
                  className="w-10 h-10 flex items-center justify-center border border-gray-100 text-lg font-semibold rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-gray-800"
                >
                  {size}
                </span>
              ))}
            </div>
            <div className="mb-4">
              <QuantitySelector
                maxQuantity={product.product_quantity}
                value={quantity}
                onChange={(newQuantity) => setQuantity(newQuantity)}
              />
            </div>
            <div className="flex gap-2">
              <PrimaryActionButton
                type="addToCart"
                onAddToCart={() => console.log("Added to cart!")}
                onBuyNow={() => console.log("Buying now!")}
              />
              <PrimaryActionButton
                type="buyNow"
                onAddToCart={() => console.log("Added to cart!")}
                onBuyNow={() => console.log("Buying now!")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
