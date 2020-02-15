import React from "react";
import { Route, NavLink } from "react-router-dom";

import Repository from "./Repository";

export default function Home({ products }) {
  return (
    <div>
      <div className="nav-wrapper">
        {products.map(product => (
          <NavLink to={`/${product.name}`} key={product.id}>
            <h2>{product.name}</h2>
          </NavLink>
        ))}
      </div>

      <Route
        path="/:category"
        render={props => <Repository {...props} products={products} />}
      />
    </div>
  );
}
