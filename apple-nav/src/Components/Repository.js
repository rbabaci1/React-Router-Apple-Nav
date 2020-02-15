import React from "react";
import { Link, Route } from "react-router-dom";

export default function Repository({ products, match }) {
  const SelectedCategory = match.params.category;
  const category = products.find(product => product.name === SelectedCategory);

  return (
    <div>
      <h1 style={{ color: "white" }}>{category.name} Selected</h1>
    </div>
  );
}
