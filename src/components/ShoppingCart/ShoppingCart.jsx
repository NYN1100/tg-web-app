import React, { useContext } from "react";
import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";

const ShoppingCart = () => {
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div className="shoppingCart">
      <div className="shoppingCart1">
        {PRODUCTS.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem key={item.id} data={item} />;
          }
        })}
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
        <p>{getTotalPrice()}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
