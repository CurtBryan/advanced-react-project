import React from "react";

function ShoeRender(props) {
  const shoeList = props.shoes.map(shoe => {
    return (
      <div key={shoe.name}>
        <h1>{shoe.name}</h1>
        <h2>{shoe.price}</h2>
        <img src={shoe.image} />
      </div>
    );
  });
  return <div>{shoeList}</div>;
}

export default ShoeRender;
