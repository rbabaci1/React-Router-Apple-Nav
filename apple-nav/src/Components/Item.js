import React from "react";

export default function Item(props) {
  console.log(props);
  //{ match, categoryItems }
  //   const selectedItem = match.params.itemId;
  //   const item = categoryItems.find(item => item.name === selectedItem);
  //   //   console.log(categoryItems);
  //   console.log(selectedItem);
  //   console.log(item);
  return <h1 style={{ color: "white" }}>item</h1>;
}
