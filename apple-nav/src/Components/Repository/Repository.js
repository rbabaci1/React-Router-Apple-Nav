import React from "react";
import { NavLink } from "react-router-dom";

import "../Repository/repository.css";
import ProductCard from "../ProductCard/ProductCard";

export default function Repository({ products, match }) {
  const selectedCategory = match.params.category;
  const category = products.find(product => product.name === selectedCategory);
  const productIcon = category.productIcon;

  return (
    <div className="category-wrap">
      <div className="category-products">
        {category.repository.map(item => (
          <NavLink to={`${match.url}/${item.name}`} key={item.id}>
            <ProductCard item={item} productIcon={productIcon} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
