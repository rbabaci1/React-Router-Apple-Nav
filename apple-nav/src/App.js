import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import appleData from "./data/appleData";
import Home from "./Components/Home";

function App() {
  const [products] = useState(appleData);

  return (
    <div className="App">
      <h2>test</h2>
      <Route exact path="/" render={() => <Home products={products} />} />
    </div>
  );
}

export default App;
