import React from "react";
import "./shop.css";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      {" "}
      <img src={productImage} />{" "}
      <div className="description">
        <p>
          <strong>{productName}</strong>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add to Cart</button>
    </div>
  );
};
