import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";

export const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      {" "}
      <div className="noname">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {" "}
        {PRODUCTS.map((product) => {
          if (cartItems) {
          }
        })}
      </div>
    </div>
  );
};
