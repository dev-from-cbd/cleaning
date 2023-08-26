import React from "react";
//import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="cartItem">
      <img src={productImage} alt="Cart Item" />
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p> ${price}</p>
      </div>
    </div>
  );
};
