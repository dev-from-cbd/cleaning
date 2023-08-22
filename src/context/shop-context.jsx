import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};
