import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import FilterComponent from './FilterComponent';
import { menuItems } from './Items';


const MenuComponent = () => {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const handleFilter = (category) => {
    if (category === "All") {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter(item => item.category === category);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 text-light">Our Menu</h1>
      <FilterComponent onFilter={handleFilter} />
      <div className="row row-cols-1 row-cols-md-3 g-5 mt-5">
        {filteredItems.map((item, index) => (
          <div key={index} className="col p-5">
            <div className="card-dark text-light h-100 d-flex flex-column">
              <div className="card-img-container d-flex align-items-end flex-grow-1 m-auto">
                <img src={item.image} className="card-img-top" alt={item.name} />
              </div>
              <div className="card-body text-center d-flex flex-column justify-content-end pt-3">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
                <Link to={`/drinks/${item.id}`} className="btn btn-primary btn-detail">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;