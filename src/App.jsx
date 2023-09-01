import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/Pages/HomePage";
import CartPage from "./components/Pages/CartPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OrdersPage from "./components/Pages/OrdersPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
