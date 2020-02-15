import React from "react";
import { NavLink } from "react-router-dom";

import "../Repository/repository.css";

export default function Repository({ products, match }) {
  const selectedCategory = match.params.category;
  const category = products.find(product => product.name === selectedCategory);

  return (
    <div className="category-products">
      <span role="img" aria-label="iphone symbol">
        📱
      </span>
      {category.repository.map(item => (
        <NavLink to={`${match.url}/${item.name}`} key={item.id}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}
