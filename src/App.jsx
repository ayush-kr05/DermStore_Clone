import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { ProductOverview } from "./Pages/Product_Overview/ProductOverview";
import { Login } from "./Components/SignUp&Login/Login";
import { SignUp } from "./Components/SignUp&Login/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductOverview />}></Route>
      </Routes>
    </div>
  );
}

export default App;
