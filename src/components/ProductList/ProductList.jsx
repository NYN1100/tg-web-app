import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import salad from "./salad.jpg";

const products = [
  {
    id: "1",
    title: "Salad",
    price: 5000,
    description: "Ko'k rang",
    img: "./salad.jpg",
  },
  {
    id: "2",
    title: "Salad",
    price: 3000,
    description: "Oq rang",
    img: "./salad.jpg",
  },
  {
    id: "3",
    title: "Salad",
    price: 1000,
    description: "Yashil rang",
    img: "./salad.jpg",
  },
  {
    id: "4",
    title: "Salad",
    price: 6000,
    description: "Havorang",
    img: "./salad.jpg",
  },
  {
    id: "5",
    title: "Salad",
    price: 7800,
    description: "Qora rang",
    img: "./salad.jpg",
  },
  {
    id: "6",
    title: "Salada",
    price: 12000,
    description: "Ko'k rang",
    img: "./salad.jpg",
  },
  {
    id: "7",
    title: "Salad",
    price: 5100,
    description: "Pushti rang",
    img: "./salad.jpg",
  },
  {
    id: "8",
    title: "Salada",
    price: 8000,
    description: "Qizil rang",
    img: "./salad.jpg",
  },
];

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
      {products.map((item) => (
        <ProductItem
          product={item}
          key={item.id}
          onAdd={onAdd}
          className="item"
          salad={salad}
        />
      ))}
    </div>
  );
};

export default Product;
