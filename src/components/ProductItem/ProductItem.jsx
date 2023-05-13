import React, { useContext } from "react";
import Button from "../Button/Button";
import "./ProductItem.css";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const ProductItem = ({ product, className, salad, userId }) => {
  // const onAddHandler = () => {
  //   onAdd(product);
  // };
  const { addToCart, cartItems } = useContext(ShopContext);

  console.log(cartItems);

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
          addToCart(userId);
        }}
      >
        Korzinkaga qushish {cartItems[userId] > 0 && <>{cartItems[userId]}</>}
      </Button>
    </div>
  );
};

export default ProductItem;
