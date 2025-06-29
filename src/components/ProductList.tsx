import Image from "next/image";
export default function ProductList() {
  type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    isNew?: boolean;
    hasOptions?: boolean;
    rating?: number; // Optional: If not provided, no stars shown
  };

  const products: Product[] = [
    {
      id: 1,
      title: "Fear Less",
      image: "/images/sample.jpg",
      price: 499,
      oldPrice: 590,
      discount: 15,
    },
    {
      id: 2,
      title: "In2 Travel Cotton Polo",
      image: "/images/p2.jpg",
      price: 399,
      oldPrice: 750,
      discount: 47,
      rating: 4,
    },
    {
      id: 3,
      title: "Jet Black Solid T-shirt",
      image: "/images/p3.jpg",
      price: 430,
      oldPrice: 480,
      discount: 10,
    },
    {
      id: 4,
      title: "Adventure Freak",
      image: "/images/p4.jpg",
      price: 550,
      oldPrice: 590,
      discount: 7,
      rating: 5,
    },
    {
      id: 5,
      title: "Wild",
      image: "/images/p5.jpg",
      price: 499,
      oldPrice: 590,
      discount: 15,
    },
    {
      id: 6,
      title: "আমি ঘুরি সারা বাংলাদেশ",
      image: "/images/p6.jpg",
      price: 550,
      oldPrice: 690,
      discount: 20,
      rating: 5,
    },
    {
      id: 7,
      title: "In2 Travel Jersey Half",
      image: "/images/p7.jpg",
      price: 950,
      oldPrice: 1180,
      discount: 19,
      isNew: true,
    },
    {
      id: 8,
      title: "Save Palestine",
      image: "/images/p8.jpg",
      price: 490,
      oldPrice: 590,
      discount: 17,
    },
    {
      id: 9,
      title: "City Escape",
      image: "/images/p9.jpg",
      price: 590,
      oldPrice: 690,
      discount: 14,
    },
    {
      id: 10,
      title: "Skydive",
      image: "/images/p10.jpg",
      price: 499,
      oldPrice: 590,
      discount: 15,
    },
    {
      id: 11,
      title: "Sajek",
      image: "/images/p11.jpg",
      price: 499,
      oldPrice: 590,
      discount: 15,
      rating: 5,
    },
    {
      id: 12,
      title: "Mens In2 Travel Jersey",
      image: "/images/p12.jpg",
      price: 550,
      oldPrice: 690,
      discount: 20,
      isNew: true,
      hasOptions: true,
    },
  ];
  return (
    <>
      <div className="px-4 lg:px-16 mt-48">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center justify-center">
            <h2 className="text-5xl">TAKE A LOOK AT OUR PRODUCTS. </h2>
            <span className="text-5xl text-gray-400"> SHOP</span>
          </div>
          <div>
            <a
              href="#"
              className="text-sm font-medium underline text-gray-700 hover:text-black"
            >
              SEE ALL PRODUCTS
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white shadow-sm rounded overflow-hidden"
            >
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
                  -{product.discount}%
                </div>
              )}
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-2 left-14 bg-blue-600 text-white text-xs px-2 py-1 rounded z-10">
                  NEW
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-60">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                {/* Options overlay */}
                {product.hasOptions && (
                  <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white text-center py-2 text-sm font-semibold">
                    SELECT OPTIONS
                  </div>
                )}
                {/* Wishlist Icon (optional) */}
                {product.hasOptions && (
                  <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
                    ❤️
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-2 text-center">
                <h3 className="text-sm font-semibold truncate">
                  {product.title}
                </h3>
                {/* Optional Stars */}
                {product.rating && (
                  <div className="text-yellow-400 text-sm mb-1">
                    {"★".repeat(product.rating)}
                    {"☆".repeat(5 - product.rating)}
                  </div>
                )}
                {/* Price Info */}
                <div className="text-sm">
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 mr-1">
                      {product.oldPrice}.০০৳
                    </span>
                  )}
                  <span className="font-bold">{product.price}.০০৳</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
