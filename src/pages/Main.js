import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CategoryPage from './CategoryPage';
import BlogInfo from '../components/BlogsInfo'

const Main = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path='/grooming-blogs' element={<BlogInfo/>}/> 
    <Route path="/category/:slug" element={<CategoryPage />} />
  </Routes>
);

export default Main;
