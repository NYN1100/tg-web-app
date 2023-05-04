import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
  { id: "1", title: "Jinsi", price: "5000", description: "Ko'k rang" },
  { id: "2", title: "Kurtka", price: "3000", description: "Oq rang" },
  { id: "3", title: "Jinsi 2", price: "1000", description: "Yashil rang" },
  { id: "4", title: "Kurtka 8", price: "6000", description: "Havorang" },
  { id: "5", title: "Jinsi 3", price: "7800", description: "Qora rang" },
  { id: "6", title: "Kurtka 7", price: "12000", description: "Ko'k rang" },
  { id: "7", title: "Jinsi 4", price: "5100", description: "Pushti rang" },
  { id: "8", title: "Kurtka 5", price: "8000", description: "Qizil rang" },
];

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  });
};

const Product = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();
  const onAdd = (product) => {
    const alreadyAdded = addedItems.find((item) => item.id === product.id);
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }
    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Sotib Olish ${getTotalPrice(newItems)}`,
      });
    }
  };
  return (
    <div className="list">
      {products.map((item) => (
        <ProductItem product={item} onAdd={onAdd} className="item" />
      ))}
    </div>
  );
};

export default Product;
