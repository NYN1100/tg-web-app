import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Details from "./components/ProductDetails/Details";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShopContextProvider from "./context/shop-context";

const App = () => {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <ShopContextProvider>
        <Header className="header" />
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="menu/:menuId" element={<Details />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

export default App;
