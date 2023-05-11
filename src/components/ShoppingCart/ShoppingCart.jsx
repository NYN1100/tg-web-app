import React from "react";
import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";
import menu from "./menu1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
const purchasedProducts = [
  {
    id: "1",
    title: "Menu 2",
    price: 5000,
    img: "./salad.jpg",
  },
  {
    id: "2",
    title: "Menu 2",
    price: 3000,
    img: "./salad.jpg",
  },
  {
    id: "1",
    title: "Menu 2",
    price: 5000,
    img: "./salad.jpg",
  },
  {
    id: "2",
    title: "Menu 2",
    price: 3000,
    img: "./salad.jpg",
  },
  {
    id: "1",
    title: "Menu 2",
    price: 5000,
    img: "./salad.jpg",
  },
  {
    id: "2",
    title: "Menu 2",
    price: 3000,
    img: "./salad.jpg",
  },
];

const ShoppingCart = () => {
  return (
    <div className="shoppingCart">
      <div className="shoppingCart1">
        {purchasedProducts.map((item) => (
          <CartItem key={item.id} product={item} menu={menu} />
        ))}
      </div>

      <div>
        <div className="faTruck">
          <FontAwesomeIcon
            icon={faTruckFast}
            size="xl"
            style={{ color: "#14a88d" }}
          />
        </div>
      </div>
      <div className="totalPrice">
        <span>Umumiy narx:</span>
        <p>400 000sum</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
