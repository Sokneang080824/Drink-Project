import React from 'react';
import './style.css';

const FilterComponent = ({ onFilter }) => {
  const categories = ["All", "Coffee", "Milk Tea", "Juices", "Frozen Drinks", "Snacks"];

  return (
    <div className="nav_btn text-center mb-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className="btn mx-2 text-light border-light"
          onClick={() => onFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;