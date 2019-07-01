import React from "react";
import HOC from "./hoc";

function HOCDisplay(props) {
  const shoeList = props.data.map(shoe => {
    return (
      <div key={shoe.name}>
        <h1>{shoe.name}</h1>
        <h2>{shoe.price}</h2>
        <img src={shoe.image} />
      </div>
    );
  });
  return <div>{shoeList[3]}</div>;
}

export default HOC(HOCDisplay, "/api/products");
