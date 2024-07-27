import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const categories = [
    { name: 'Technology', slug: 'technology' },
    { name: 'Health', slug: 'health' },
    // Add more categories as needed
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.slug}>
            <Link to={`/category/${category.slug}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
