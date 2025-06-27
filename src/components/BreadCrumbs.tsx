"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs() {
  const pathname = usePathname();
  // split breaks the path wenever we see a forward slash "/"
  // filter removes any empty segments from the array
  const pathSegments = pathname.split("/").filter((segment) => segment);

  // create breadcrumbs array which is an array of objects
  const breadcrumbs = [
    {
      path: "/",
      label: "Home",
    },
    // destructuring the pathSegments array to create the breadcrumbs
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      // segment is the current path segment
      // index is the current index in the pathSegments array
      // Convert kebab-case or snake_case to Title Case
      const label = segment
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return { path, label };
    }),
  ];

  return (
    <>
      <div className="md:px-10 px-4 md:py-4 py-2 font-lufga">
        <div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.path} className="inline-flex items-center cursor-pointer">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    // Last item (current page)
                    <span className="text-gray-500 font-medium">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    // Previous pages (clickable links)
                    <Link
                      href={breadcrumb.path}
                      className="text-gray-600 hover:text-yellow-500"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
