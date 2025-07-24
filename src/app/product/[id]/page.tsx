import ImageSlider from "@/components/ImageSlider";

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

  return (
    <div className="font-lufga mt-8">

      {/* Product Title and Subtitle Portion */}
      <div className="flex flex-col gap-2 justify-center items-center ">
        {/* Product Title */}
        <div className="text-2xl text-gray-500 font-bold tracking-widest">
          {product.product_name}
        </div>
        {/* Product Subtitle */}
        <div className="font-extralight text-base text-center max-w-md mx-auto px-8">
          {product.product_description }
        </div>
      </div>
      {/* Product Image Portion */}
      <div className="mt-8">
        <ImageSlider images={product.product_image} name={product.product_name}/>
      </div>
      {/* <h1 className="text-2xl font-bold mb-3">{product.product_name}</h1>
      <img
        src={product.product_image[0]}
        alt={product.product_name}
        className="w-64 h-64 object-cover mb-4"
      />
      <p>{product.product_description}</p>
      <p className="mt-2 font-semibold text-lg">{product.product_price}.00৳</p>
      {/* Example: Show size and colors */}
      {/* <div className="mt-2">
        <strong>Sizes:</strong> {product.product_size.join(", ")}
      </div>
      <div className="mt-2">
        <strong>Colors:</strong>{" "}
        {product.product_colors.map((color: string, i: number) => (
          <span
            key={color}
            style={{ backgroundColor: color, display: "inline-block", width: 20, height: 20, borderRadius: "50%", marginRight: 8 }}
            title={color}
          />
        ))}
      </div> */}
      {/* You can add more product fields here as needed */}
    </div>
  );
}
