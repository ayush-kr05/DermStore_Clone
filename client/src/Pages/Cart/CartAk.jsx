import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import "./CartAk.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchCartData, GetCartCount } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import { GET_CARTDATA } from "../../Redux/actionType";

export const CartAk = () => {
  // const { CartData } = useSelector((state) => state);
  const [CartData, setCartdata] = useState([]);
  const [count, setCount] = useState([]);

  // console.log(CartData);
  const dispatch = useDispatch();
  const [promo, setPromo] = React.useState("");
  const [point, setPoint] = React.useState("");
  const navigate = useNavigate();
  let CarTotalAmount = 0;

  for (let i = 0; i < CartData.length; i++) {
    CarTotalAmount += CartData[i].quantity * CartData[i].mrp;
  }

  useEffect(() => {
    getCartData();
  }, []);

  //getdata from api
  function getCartData() {
    fetch("http://localhost:8080/cart")
      .then((res) => res.json())
      .then((res) => setCartdata(res))
      .catch((err) => console.log(err));
  }

  // function getCount() {
  //   fetch("http://localhost:8080/cart/count")
  //     .then((res) => res.json())
  //     .then((res) => setCount(res));
  // }

  function handlePromo(e) {
    setPromo(e.target.value);
  }

  // const SetToReduce = () => {
  //   axios.get(`http://localhost:8080/cart`).then(({ data }) => {
  //     dispatch(fetchCartData(data));
  //     dispatch(GetCartCount(data.length));
  //     // console.log(data.length);
  //   });
  // };

  const MoveToPayment = () => {
    localStorage.setItem("totalAmount", CarTotalAmount);
    navigate("/payment");
  };

  //Data Remove From Cart

  const removeFromCart = (id) => {
    axios.delete(`http://localhost:8080/cart/${id}`).then(getCartData());
  };

  //Data Increase In Cart

  const handleIncrease = (id) => {
    console.log("increa", id);
    fetch(`http://localhost:8080/cart/inc/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    }).then(getCartData())
    setPoint(Number(CarTotalAmount / 3).toFixed(0));
  };

  const handleDecrease = (id) => {
    fetch(`http://localhost:8080/cart/dec/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    }).then(getCartData());
    setPoint(Number(CarTotalAmount / 3).toFixed(0));
  };

  return (
    <>
      <Navbar />
      <section className="CartMainSection">
        <div className="CardHeads">
          <h4>Your Cart</h4>
          <button className="SadabaharButton"> CHECKOUT SECURELY NOW</button>
        </div>
        <div className="CartItemsAdded">
          <table className="CartItemsTable">
            <thead>
              <tr>
                <th className="th1">Items</th>
                <th className="th2">Price</th>
                <th className="th3">Quantity</th>
                <th className="th4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {CartData.map((elm) => {
                return (
                  <tr className="CartRowMain" key={elm._id}>
                    <td className="td1">
                      <div className="td3Div">
                        <img src={elm.img_url_1} />
                        <p>{elm.name}</p>
                      </div>
                    </td>

                    <td>
                      <h5>$ {elm.mrp}</h5>
                    </td>

                    <td className="td3">
                      <div className="td3Div">
                        <button
                          className="InceDecCartBtn"
                          disabled={elm.quantity <= 1}
                          onClick={() => handleDecrease(elm._id)}
                        >
                          -
                        </button>
                        <h5>{elm.quantity}</h5>
                        <button
                          className="InceDecCartBtn"
                          onClick={() => handleIncrease(elm._id)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="td4">
                      <div className="td4Div">
                        <h5>$ {elm.quantity * elm.mrp}</h5>
                        <button
                          className="removBtn"
                          onClick={() => removeFromCart(elm._id)}
                        >
                          X
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div>
          <p style={{ width: "80%" }}>
            Receive an Augustinus Bader The Rich Cream 7ml when you spend over
            $150 on the brand.
          </p>
          <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "space-between",
            }}
          >
            <h5 style={{ fontWeight: "bold" }}>
              Rewards members earn {point} points on this order
            </h5>
            <div style={{ display: "flex", gap: "10px", fontWeight: "bold" }}>
              <p>Cart Subtotal:</p>
              <h5 style={{ fontWeight: "bold" }}>${CarTotalAmount}</h5>
            </div>
          </div>
          <div style={{ width: "80%", marginTop: "40px" }}>
            <input
              type="text"
              placeholder="Get a coupon code ? Enter it here"
              style={{ width: "400px", padding: "5px" }}
              value={promo}
              onChange={handlePromo}
            />
            <button
              style={{
                padding: "5px 20px",
                color: "white",
                backgroundColor: "#222",
              }}
            >
              ADD
            </button>
          </div>
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "50px",
            }}
          >
            <button>Continue Shopping</button>
            <button className="SadabaharButton" onClick={MoveToPayment}>
              {" "}
              CHECKOUT SECURELY NOW
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
