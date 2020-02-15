import React from "react";
import { Route, NavLink } from "react-router-dom";

export default function Home({ products }) {
  console.log(products);

  return (
    <div className="nav-wrapper">
      {products.map(product => (
        <h2>{product.name}</h2>
      ))}
    </div>
  );
}
