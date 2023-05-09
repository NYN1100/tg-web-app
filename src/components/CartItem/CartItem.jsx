import React from "react";
import "./CartItem.css";
import Button from "../Button/Button";
const CartItem = ({ menu }) => {
  return (
    <div className="cartItem">
      <img src={menu} alt="" />
      <h3>Menu 1</h3>
      <h5>100 000 sum</h5>
      <p>2 KUN</p>
      <div>
        <Button>-</Button>
        <span>2</span>
        <Button>+</Button>
      </div>
    </div>
  );
};

export default CartItem;
