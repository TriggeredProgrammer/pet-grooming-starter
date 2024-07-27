import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { slug } = useParams();

  // Fetch data or perform actions based on the dynamic slug
  // For example, you can fetch data from an API based on the slug
  
  return (
    <div>
      <h1>Category: {slug}</h1>
      {/* Display data based on the slug */}
    </div>
  );
};

export default CategoryPage;
