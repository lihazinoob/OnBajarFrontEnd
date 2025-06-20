import Image from "next/image";

export default function ShopDropDownMenu() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl xl:mx-auto py-8  grid grid-cols-2 lg:grid-cols-5 lg:gap-2 xl:gap-24 lg:pl-8 xl:pl-0">
        {/* Jersey Category */}
        <div>
          {/* Image container */}
          <div className="relative w-40 h-60 xl:w-60">
            <Image
              src={"/images/sample.jpg"}
              alt="sampleImage"
              fill
              className="object-cover"
            />
          </div>
          {/* Text Container */}
          <div className="">
            <h3 className="tracking-widest text-2xl my-4">JERSEYS</h3>
            <div>
              <p className="text-gray-600 text-sm ">
                Explore our collection of jerseys, perfect for sports
                enthusiasts and casual wear.
              </p>
            </div>
          </div>
        </div>
        {/* T-shirt Category */}
        <div>
          {/* Image container */}
          <div className="relative w-40 h-60 xl:w-60">
            <Image
              src={"/images/sample.jpg"}
              alt="sampleImage"
              fill
              className="object-cover"
            />
          </div>
          {/* Text Container */}
          <div className="">
            <h3 className="tracking-widest text-2xl my-4">JERSEYS</h3>
            <div>
              <p className="text-gray-600 text-sm">
                Explore our collection of jerseys, perfect for sports
                enthusiasts and casual wear.
              </p>
            </div>
          </div>
        </div>
        {/* Trousers Category */}
        <div>
          {/* Image container */}
          <div className="relative w-40 h-60 xl:w-60">
            <Image
              src={"/images/sample.jpg"}
              alt="sampleImage"
              fill
              className="object-cover"
            />
          </div>
          {/* Text Container */}
          <div className="">
            <h3 className="tracking-widest text-2xl my-4">JERSEYS</h3>
            <div>
              <p className="text-gray-600 text-sm">
                Explore our collection of jerseys, perfect for sports
                enthusiasts and casual wear.
              </p>
            </div>
          </div>
        </div>
        {/* Shirt Category */}
        <div>
          {/* Image container */}
          <div className="relative w-40 h-60 xl:w-60">
            <Image
              src={"/images/sample.jpg"}
              alt="sampleImage"
              fill
              className="object-cover"
            />
          </div>
          {/* Text Container */}
          <div className="">
            <h3 className="tracking-widest text-2xl my-4">JERSEYS</h3>
            <div>
              <p className="text-gray-600 text-sm">
                Explore our collection of jerseys, perfect for sports
                enthusiasts and casual wear.
              </p>
            </div>
          </div>
        </div>
        {/* Shorts Category */}
        <div>
          {/* Image container */}
          <div className="relative w-40 h-60 xl:w-60">
            <Image
              src={"/images/sample.jpg"}
              alt="sampleImage"
              fill
              className="object-cover"
            />
          </div>
          {/* Text Container */}
          <div className="">
            <h3 className="tracking-widest text-2xl my-4">JERSEYS</h3>
            <div>
              <p className="text-gray-600 text-sm">
                Explore our collection of jerseys, perfect for sports
                enthusiasts and casual wear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
