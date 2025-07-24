import ImageSlider from "@/components/ImageSlider";
import React from "react";

async function getProduct(id: string) {
  const res = await fetch(
    `https://raw-node-js.onrender.com/api/fetchProductById/${id}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch product details");
  console.log("Product details fetched successfully", res);
  return res.json();
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProduct(params.id);
  const product = data.productInformation;
  // const [selectedImage, setSelectedImage] = React.useState(product.product_image[0]);

  return (
    <div className="font-lufga mt-8">
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
          <hr className="border-t border-gray-300 mb-12" />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-row gap-4 px-8">
          {/* LEFT:Scrollable Thumbnails */}
          <div className="flex flex-col overflow-y-auto gap-8 w-20 xl:w-40">
            {product.product_image.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="w-full h-20 xl:h-40 object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>

          {/* MIDDLE: Selected Images */}
          <div className="flex-1">
            <img
              src={product.product_image[0]}
              alt="Selected"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Right Section:Product Details */}
          <div className="w-full max-w-sm space-y-4">
            asdasdasdasdasdasd

          </div>
        </div>
      </div>
    </div>
  );
}
