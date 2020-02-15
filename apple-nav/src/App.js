import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";

import "./App.css";
import appleData from "./data/appleData";

function App() {
  const [products] = useState(appleData);

  return (
    <div className="App">
      <h2>test</h2>
    </div>
  );
}

export default App;
