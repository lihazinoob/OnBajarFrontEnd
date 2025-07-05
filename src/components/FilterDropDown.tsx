interface FilterDropDownProps{
  priceRanges:string[];
}
export default function FilterDropDown({priceRanges}:FilterDropDownProps) {
  return (
    <>
      <div className="py-8 w-full transition-all duration-500 ease-in-out">
        <hr />
        <div className="grid grid-cols-2 gap-5 py-4 ">
          {/* Sort by filter option */}
          <div className="">
            <div className="font-semibold tracking-wider lg:text-xl mb-4">
              SORT BY
            </div>
            <div>
              <ul className="space-y-2 cursor-pointer">
                <li>Price:low to high</li>
                <li>Price:high to low</li>
              </ul>
            </div>
          </div>
          {/* Price filter option */}
          <div>
            <div className="font-semibold tracking-wider lg:text-xl mb-4">
              PRICE FILTER
            </div>
            <div>
              <ul className="space-y-2 cursor-pointer">
                <li>All</li>
                {priceRanges.map((range, index) => (
                  <li key={index}>{range}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
