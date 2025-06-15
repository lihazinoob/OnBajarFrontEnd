import Link from "next/link";
export default function DopDownMenu() {
  return (
    <div className="absolute top-8 left-0 mt-2 w-30 bg-gray-50 border border-gray-200 rounded-md shadow-lg z-30 px-4 py-2 opacity-0 translate-y-4 animate-slideIn">
      <div className="flex flex-col items-center justify-center space-y-2 text-gray-500">
        <Link
          href="/category/jersey"
          className="hover:text-gray-700 transition-colors duration-200"
        >
          Jersey
        </Link>
        <Link
          href="/category/t-shirt"
          className="hover:text-gray-700 transition-colors duration-200"
        >
          T-shirt
        </Link>
        <Link
          href="/category/trousers"
          className="hover:text-gray-700 transition-colors duration-200"
        >
          Trousers
        </Link>
        <Link
          href="/category/shirt"
          className="hover:text-gray-700 transition-colors duration-200"
        >
          Shirt
        </Link>
        <Link
          href="/category/shorts"
          className="hover:text-gray-700 transition-colors duration-200"
        >
          Shorts
        </Link>
      </div>
    </div>
  );
}
