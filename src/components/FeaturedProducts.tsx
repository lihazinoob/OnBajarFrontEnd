export default function FeaturedProducts() {
  return (
    <>
      <div className="px-4 lg:px-16 w-full mt-12 xl:mt-16 tracking-tighter">
        <div>
          <span className="text-xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            FEATURED PRODUCTS.{" "}
          </span>
          <span className="text-xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-500">
            FOR ALL STYLES.
          </span>
        </div>
        {/* Section for showing the featured products */}

        <div className="mt-4 lg:mt-12">
          <div className="flex lg:grid lg:grid-cols-5 gap-4 md:gap-8 lg:gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
            {[
              {
                id: 1,
                title: "Product 1",
                image: "/images/sample.jpg",
              },
              {
                id: 2,
                title: "Product 2",
                image: "/images/sample.jpg",
              },
              {
                id: 3,
                title: "Product 3",
                image: "/images/sample.jpg",
              },
              {
                id: 4,
                title: "Product 4",
                image: "/images/sample.jpg",
              },
              {
                id: 5,
                title: "Product 5",
                image: "/images/sample.jpg",
              },
            ].map((products) => (
              <div
                key={products.id}
                className="cursor-pointer min-w-[60%] sm:min-w-[50%] md:min-w-[38%] lg:min-w-0 xl:min-w-0 relative  h-80 md:h-96 lg:h-[28rem]  rounded-xl overflow-hidden shadow-lg group "
              >
                <div className="absolute left-0 top-0 w-1 h-0 bg-slate-100 transition-all duration-500 group-hover:h-full z-20" />
                <img
                  src={products.image}
                  alt={products.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center px-2">
                    {products.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
