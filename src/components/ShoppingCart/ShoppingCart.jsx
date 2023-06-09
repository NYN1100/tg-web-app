import React, { useContext } from "react";
import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice } = useContext(ShopContext);
  const totalAmount = getTotalPrice();
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
      {totalAmount > 0 ? (
        <div className="Purchase">
          <div className="totalPrice">
            <span>Umumiy narx:</span>
            <div>{getTotalPrice()} UZS</div>
          </div>
          <div>
            <Button onClick={() => navigate("/form")}>Buyurtma berish</Button>
          </div>
        </div>
      ) : (
        <h1 style={{ fontFamily: "Open Sans" }}>Savatchangiz bo'sh</h1>
      )}
    </div>
  );
};

export default ShoppingCart;
