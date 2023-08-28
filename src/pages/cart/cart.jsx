import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your ordering cart</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) =>
          cartItems[product.id] !== 0 ? (
            <CartItem key={product.id} data={product} />
          ) : null
        )}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal"> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Ordering </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1>is empty</h1>
      )}
    </div>
  );
};
