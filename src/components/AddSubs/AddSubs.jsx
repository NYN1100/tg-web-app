import React, { useContext, useEffect, useState } from "react";
import "./AddSubs.css";
import Button from "../Button/Button";
import { ShopContext } from "../../context/shop-context";
const AddSubs = ({ id }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="IncDec">
      <Button onClick={() => addToCart(id)}>+</Button>
      <p>{cartItemAmount > 0 && <>{cartItemAmount}</>}</p>
      <Button onClick={() => removeFromCart(id)}>-</Button>
    </div>
  );
};

export default AddSubs;
