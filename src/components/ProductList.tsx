import ProductCard, { ProductType } from "./ProductCard";
export default function ProductList({products} :{products:ProductType[]}) {
   
  return (
    <>
      <div className="">
        
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
