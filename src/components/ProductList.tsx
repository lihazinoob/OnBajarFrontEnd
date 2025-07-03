import ProductCard, { ProductType } from "./ProductCard";
export default function ProductList({products} :{products:ProductType[]}) {
   
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
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </>
  );
}
