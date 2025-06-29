import Image from "next/image";
import { PiShoppingCartSimple } from "react-icons/pi";
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
      isNew: true,
    },
    {
      id: 2,
      title: "In2 Travel Cotton Polo",
      image: "/images/sample.jpg",
      price: 399,
      oldPrice: 750,
      discount: 47,
      rating: 4,
    },
    {
      id: 3,
      title: "Jet Black Solid T-shirt",
      image: "/images/sample.jpg",
      price: 430,
      oldPrice: 480,
      discount: 10,
    },
    {
      id: 4,
      title: "Adventure Freak",
      image: "/images/sample.jpg",
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
      <div className="px-4 lg:px-16 mt-20 lg:mt-32">
        {/* Product Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="">
            <span className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
              OUR PRODUCTS
            </span>
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
        {/* Products are rendering here */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-y-8 mt-4 lg:mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group rounded overflow-hidden cursor-pointer"
            >
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 -left-1  bg-green-300 text-black text-xs px-4 py-1 z-10 font-bold tracking-widest">
                  -{product.discount}%
                </div>
              )}
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-12  bg-blue-600 text-white text-xs px-2 py-1 rounded z-10">
                  NEW
                </div>
              )}

              {/* Image */}
              <div className="relative w-full h-60 lg:h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay container */}
                <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
                  <div
                    className="w-full bg-black bg-opacity-80 text-white text-sm lg:text-base py-2 text-center
      transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100
      transition-all duration-300 pointer-events-auto "
                  >
                    <div className="flex items-center justify-center">
                      <PiShoppingCartSimple size={30} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-2 text-center">
                <h3 className="text-sm lg:text-base font-semibold truncate">
                  {product.title}
                </h3>

                {/* Price Info */}
                <div className="text-sm lg:text-xl flex items-center justify-center lg:gap-1">
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 mr-1">
                      {product.oldPrice}.00৳
                    </span>
                  )}
                  <span className="font-bold">{product.price}.00৳</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
