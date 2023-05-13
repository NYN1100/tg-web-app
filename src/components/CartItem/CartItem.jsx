import React, { useContext, useState } from "react";
import "./CartItem.css";
import AddSubs from "../AddSubs/AddSubs";
import { ShopContext } from "../../context/shop-context";
const CartItem = (props) => {
  const { id, title, price, img } = props.data;
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h5>{price}</h5>
      <span>{cartItems[id]} kun</span>
      <AddSubs id={id}> </AddSubs>
    </div>
  );
};

export default CartItem;
