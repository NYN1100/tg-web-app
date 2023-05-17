import React, { useContext } from "react";
import Button from "../Button/Button";
import "./ProductItem.css";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const ProductItem = ({ product, className, salad, userId, onAdd }) => {
  const onAddHandler = () => {
    onAdd(userId);
  };
  const { addToCart, cartItems } = useContext(ShopContext);

  return (
    <div className={"product " + className}>
      <Link to={`menu/${userId}`}>
        <div className="img">
          <img src={salad} alt="" />
        </div>
        <div className="title">{product.title}</div>

        <div className="price">
          <span>
            Narx: <b>{product.price}</b>
          </span>
        </div>
      </Link>
      <Button
        className="add-btn"
        onClick={() => {
          onAddHandler();
          addToCart(userId);
        }}
      >
        Savatchaga qushish {cartItems[userId] > 0 && <>({cartItems[userId]})</>}
      </Button>
    </div>
  );
};

export default ProductItem;
