import React from "react";

export default function Item({ match, products }) {
  const selectedCategory = match.params.category;
  const category = products.find(product => product.name === selectedCategory);

  const itemBgImage = {
    backgroundImage: `url(${category.imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "95vh"
  };

  return <div style={itemBgImage}></div>;
}
