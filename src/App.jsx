import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";
import Details from "./components/ProductDetails/Details";
const App = () => {
  const { onToggleButton, tg } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path="/:menuId" element={<Details />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
