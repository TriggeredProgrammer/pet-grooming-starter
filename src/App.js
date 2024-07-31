import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import BlogInfo from './components/BlogsInfo';
import BlogScreen from "./pages/Blogs/BlogScreen";
// import BlogListScreen from "./pages/Blogs/BlogListScreen";
export default function App() {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/grooming-blogs" element={<BlogInfo />} />
      <Route path="/category/:slug" element={<CategoryPage />} />
      Other routes can be added here
      <Route path="/*" element={<Main />} />
      <Route path="/blog"element={<Main/>}/>
      <Route path="/blog/:slug" element={<BlogScreen />}>
      </Route>
    </Routes >

  );
}


