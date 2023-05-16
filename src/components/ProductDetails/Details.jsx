import React, { useState, useContext } from "react";
import "./Details.css";
import { PRODUCTS } from "../../product";

import Button from "../Button/Button.jsx";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const Details = () => {
  let { menuId } = useParams();
  menuId = +menuId;

  const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);
  const pruduct = PRODUCTS[menuId - 1];
  return (
    <div className="details">
      <div className="details1">
        <div className="img1">
          <img src={pruduct.img} />
        </div>
        <h2>{pruduct.title}</h2>
        <h3>{pruduct.price} sum</h3>
        <p>{pruduct.description}</p>
      </div>
      <div className="details2">
        <h3>Necha kun uchun buyurtma berasiz</h3>
        <div>
          <Button onClick={() => removeFromCart(menuId)}>-</Button>
          <p>{cartItems[menuId]}</p>
          <Button onClick={() => addToCart(menuId)}>+</Button>
        </div>
      </div>
      <Button className="button1">Ma'lumotlarim</Button>
    </div>
  );
};

export default Details;
