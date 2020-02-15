import React from "react";
import { Link } from "react-router-dom";

export default function Repository({ products, match }) {
  const SelectedCategory = match.params.category;
  const category = products.find(product => product.name === SelectedCategory);

  return (
    <div>
      <h1>{category.name} Selected</h1>
    </div>
  );
}
