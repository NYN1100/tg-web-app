import React from "react";
import Button from "../Button/Button";
import "./ProductItem.css";
import { Link, useParams } from "react-router-dom";

const ProductItem = ({ product, className, onAdd, salad, userId }) => {
  const onAddHandler = () => {
    onAdd(product);
  };

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
        <Button className="add-btn" onClick={onAddHandler}>
          Korzinkaga qushish
        </Button>
      </Link>
    </div>
  );
};

export default ProductItem;
