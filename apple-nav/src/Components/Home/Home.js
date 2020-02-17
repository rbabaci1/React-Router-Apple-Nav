import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "../Home/home.css";
import Repository from "../Repository/Repository";
import Item from "../Item/Item";

export default function Home({ products, history }) {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <div className="nav">
          <p className="logo" onClick={() => history.push("/")}>
            {"\uf8ff"}
          </p>

          {products.map(product => (
            <NavLink
              to={`/${product.name}`}
              key={product.id}
              activeClassName="selected"
            >
              {product.name}
            </NavLink>
          ))}

          <span role="img" aria-label="search icon">
            🔍
          </span>
          <span role="img" aria-label="cart icon">
            🛒
          </span>
        </div>
      </div>

      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={500} classNames="fade">
              <Switch>
                <Route
                  exact
                  path="/:category"
                  render={props => (
                    <Repository {...props} products={products} />
                  )}
                />

                <Route
                  path={`/:category/:item`}
                  render={props => <Item {...props} products={products} />}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}
