import { useState, useEffect } from "react";
import { bundleData } from "../data";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Categories() {
  const [index, setIndex] = useState(0);
  const [bundles, setBundles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; 
  
  useEffect(() => {
    if (selectedCategory === "All category") {
      setBundles(bundleData);
    } else {
      setBundles(
        bundleData.filter((bundle) => bundle.dogCategory === selectedCategory)
      );
    }
    setCurrentPage(1);
  }, [selectedCategory]);

  const categories = [
    "All category",
    ...new Set(bundleData.map((bundle) => bundle.dogCategory)),
  ];

  const totalPages = Math.ceil(bundles.length / itemsPerPage);
  
  // Calculate the indices of items to display on the current page
  const displayedBundles = bundles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4 sm:p-8 lg:p-16">
      <div className="w-full flex justify-center mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          {categories.map((category, idx) => (
            <option key={idx} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
        {displayedBundles.map((item, idx) => {
          const { name, image, dogCategory } = item;
          return (
            <div
              onClick={() => setIndex(idx)}
              className="cursor-pointer text-left p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              key={idx}
            >
              <div className="mb-4 h-48 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src={image.type}
                  alt="icons"
                />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <h1 className="text-xl lg:text-2xl capitalize font-semibold text-blue-600 mb-2">
                    {name}
                  </h1>
                </div>
                <div className="flex justify-between items-center mt-2 sm:mt-0">
                  <div
                    className={`${
                      index === idx
                        ? "border-b-4 border-orange-500 relative pb-2 mb-2"
                        : "border-b-4 border-transparent"
                    }`}
                  >
                    <div className="capitalize text-gray-700">
                      {dogCategory}
                    </div>
                  </div>
                  <button className="bg-blue text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors duration-300 whitespace-nowrap">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center w-full max-w-6xl mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="p-3 bg-blue text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center transition-colors duration-300"
        >
          <FaChevronLeft className="text-xl text-white" />
          <span className="ml-2 rounded-md">Previous</span>
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="p-3 bg-blue text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center transition-colors duration-300"
        >
          <span className="mr-2 rounded-md">Next</span>
          <FaChevronRight className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}
