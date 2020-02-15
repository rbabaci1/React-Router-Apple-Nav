import React from "react";
import { Link } from "react-router-dom";

export default function Repository({ products, match }) {
  const selectedCategory = match.params.category;
  const category = products.find(product => product.name === selectedCategory);

  return (
    <div>
      <div className="category-products">
        {category.repository.map(item => (
          <Link to={`${match.url}/${item.name}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
