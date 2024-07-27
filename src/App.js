import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories";
import Main from "./pages/Main";
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BlogInfo from './components/BlogsInfo';
import BlogListScreen from "./pages/Blogs/BlogListScreen";
import BlogScreen from "./pages/Blogs/BlogScreen";

export default function App() {
  return (
        // <BrowserRouter>
    <div className="App">
        <Header />
        <Hero />
        <Prices />
        <Categories />
        <BlogListScreen/>
        <BlogScreen/>
        {/* <Routes> */}
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/grooming-blogs" element={<BlogInfo />} /> */}
          {/* <Route path="/category/:slug" element={<CategoryPage />} /> */}
          {/* Other routes can be added here */}
          {/* <Route path="/*" element={<Main />} /> */}
        {/* </Routes> */}
        <Footer />
      </div>
  );
}

