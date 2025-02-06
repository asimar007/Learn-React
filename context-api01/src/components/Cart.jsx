import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  return (
    <div>
      <h1>Cart</h1>
      {/* {cart ??
        cart.item.map((items) => (
          <li>
            {items.name} - ${items.price}
          </li>
        ))} */}
    </div>
  );
};

export default Cart;
