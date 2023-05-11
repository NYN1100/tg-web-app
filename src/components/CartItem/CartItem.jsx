import React, { useState } from "react";
import "./CartItem.css";
import AddSubs from "../AddSubs/AddSubs";
const CartItem = ({ menu }) => {
  let [count, setCount] = useState(0);
  return (
    <div className="cartItem">
      <img src={menu} alt="" />
      <h3>Menu 1</h3>
      <h5>100 000 sum</h5>
      <span>2 KUN</span>
      <AddSubs count={count} setCount={setCount}></AddSubs>
    </div>
  );
};

export default CartItem;
