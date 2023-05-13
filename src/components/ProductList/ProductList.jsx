import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import salad from "./salad.jpg";

import { PRODUCTS } from "../../product";

const getTotalPrice = (items = []) => {
  return items.reduce((acc, item) => {
    return (acc += item.price);
  }, 0);
};

const Product = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  // const onSendData = useCallback(() => {
  //   const data = {
  //     products: addedItems,
  //     totalPrice: getTotalPrice(addedItems),
  //   };
  //   tg.sendData(JSON.stringify(data));
  // }, []);

  // useEffect(() => {
  //   Telegram.WebApp.onEvent("mainButtonClicked", onSendData);
  //   return () => {
  //     Telegram.WebApp.offEvent("mainButtonClicked", onSendData);
  //   };
  // }, [onSendData]);

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
      {PRODUCTS.map((item) => (
        <ProductItem
          product={item}
          key={item.id}
          onAdd={onAdd}
          className="item"
          salad={salad}
          userId={item.id}
        />
      ))}
    </div>
  );
};

export default Product;
