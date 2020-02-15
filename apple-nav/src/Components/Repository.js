import React from "react";
import { Link, Route } from "react-router-dom";

export default function Repository({ products, match }) {
  console.log(match);
  const selectedCategory = match.params.category;
  const category = products.find(product => product.name === selectedCategory);
  console.log(category);

  return (
    <div>
      <div className="category-products">
        {category.repository.map(item => (
          <Link to={`${match.url}/${item.name}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>

      <Route path={`/${selectedCategory}/:itemId`} />
    </div>
  );
}
