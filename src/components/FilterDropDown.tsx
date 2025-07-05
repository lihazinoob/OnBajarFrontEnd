"use client";

import { motion, AnimatePresence } from "framer-motion";

type FilterDropDownProps = {
  isOpen: boolean;
  onSort: (option: string) => void;
};

export default function FilterDropDown({
  isOpen,
  onSort,
}: FilterDropDownProps) {
  return (
    <div className="w-full relative">
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            // className="absolute top-0 left-0 right-0 z-10 bg-white border rounded-lg shadow-md mt-2"
          >
            <div className="absolute top-0 left-0 right-0 z-10 bg-white border rounded-lg shadow-md mt-2">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
                <div>
                  <h4 className="font-bold mb-2">Sort by</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    {[
                      "Popularity",
                      "Average rating",
                      "Newness",
                      "Price: low to high",
                      "Price: high to low",
                    ].map((option) => (
                      <li
                        key={option}
                        className="cursor-pointer hover:underline"
                        onClick={() => onSort(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Price filter</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    {[
                      "All",
                      "0৳ - 290৳",
                      "290৳ - 580৳",
                      "580৳ - 870৳",
                      "870৳ +",
                    ].map((range) => (
                      <li
                        key={range}
                        className="cursor-pointer hover:underline"
                        onClick={() => {
                          // Add price filter logic here if needed
                        }}
                      >
                        {range}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
