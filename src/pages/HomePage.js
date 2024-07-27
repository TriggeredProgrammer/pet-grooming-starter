import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Prices from "../components/Prices";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories";
import BlogListScreen from "./Blogs/BlogListScreen";
import BlogScreen from "./Blogs/BlogScreen";

const HomePage = () => {
  const categories = [
    { name: 'Technology', slug: 'technology' },
    { name: 'Health', slug: 'health' },
    // Add more categories as needed
  ];

  return (
    <div>
      <div className="App">
        <Header />
        <Hero />
        <Prices />
        <Categories />
        <BlogListScreen />

        <ul>
          {categories.map((category) => (
            <li key={category.slug}>
              <Link to={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
