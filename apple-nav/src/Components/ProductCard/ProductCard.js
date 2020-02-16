import React from "react";

import "./productCard.css";

export default function ProductCard({ item, productIcon }) {
  return (
    <div className="item-card">
      <span role="img" aria-label="product icon">
        {productIcon}
      </span>

      <p>{item.name}</p>

      <p style={{ color: "#f56300" }}>{item.new && "New"}</p>
    </div>
  );
}
