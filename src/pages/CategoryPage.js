import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { bundleData } from '../data';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

const CategoryPage = () => {
  const { slug } = useParams();
  const [bundles, setBundles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const [currentPage, setCurrentPage] = useState(1);

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

  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row p-4 lg:p-8">
        <aside className="lg:w-1/4 mb-8 lg:mb-0 lg:mr-8">
          <h2 className="text-lg font-semibold mb-4">Categories</h2>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded w-full"
          >
            {categories.map((category, idx) => (
              <option key={idx} value={category}>
                {category}
              </option>
            ))}
          </select>
        </aside>
        <section className="lg:w-3/4">
          {/* <h1 className="text-2xl font-bold mb-4">Category: {slug}</h1> */}
          {/* Display data based on the slug */}
          {/* You can add your code here to display the filtered bundles */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
