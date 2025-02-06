import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = (props) => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <div className="item-card">
      <h4>Item Name {props.name}</h4>
      <p>Price ${props.price}</p>
      <button
        onClick={() => {
          cart.setItem([
            ...cart.item,
            { name: props.name, price: props.price },
          ]);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
