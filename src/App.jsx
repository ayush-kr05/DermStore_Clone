import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
// import { ProductPage } from "./Pages/Product/Product";
import { ProductOverview } from "./Pages/Product_Overview/ProductOverview";
import { Login } from "./Components/SignUp&Login/Login";
import { SignUp } from "./Components/SignUp&Login/SignUp";
import { ProductPage } from "./Pages/Product/Productpage";
// import Cart from "./Pages/Cart/Cart";
// import { PaymentPage } from "./Pages/Payment/PaymentPage";
import { CartAk } from "./Pages/Cart/CartAk";
// import { Payment } from "./Pages/Payment/Payment";
import { CheckoutPage } from "./Pages/Payment/CheckoutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<CartAk />} />
        <Route path="/payment" element={<CheckoutPage />} />
        <Route path="/products/:id" element={<ProductOverview />} />
      </Routes>
    </div>
  );
}

export default App;
