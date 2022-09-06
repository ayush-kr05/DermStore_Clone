import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Product } from "./Pages/Product/Product";
import { ProductOverview } from "./Pages/Product_Overview/ProductOverview";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<ProductOverview />}></Route>
      </Routes>
      <div style={{ height: "1500px" }}>Gapping only</div>
    </div>
  );
}

export default App;
