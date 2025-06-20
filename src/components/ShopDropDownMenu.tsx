export default function ShopDropDownMenu() {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto py-8 px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Category 1</h3>
          <ul className="space-y-1">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Category 2</h3>
          <ul className="space-y-1">
            <li>Item 4</li>
            <li>Item 5</li>
            <li>Item 6</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Category 3</h3>
          <ul className="space-y-1">
            <li>Item 7</li>
            <li>Item 8</li>
            <li>Item 9</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Category 4</h3>
          <ul className="space-y-1">
            <li>Item 10</li>
            <li>Item 11</li>
            <li>Item 12</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
