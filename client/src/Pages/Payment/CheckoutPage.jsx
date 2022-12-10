import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData, GetCartCount } from "../../Redux/action";
import axios from "axios";
import { Link } from "react-router-dom";
// import * as React from 'react';
import { Alert, rgbToHex } from "@mui/material";

import "./CheckoutPage.css";
// import { AbsoluteCenter } from "@chakra-ui/react";
export const CheckoutPage = () => {
  const [box, setBox] = React.useState(false);
  const [check, setCheck] = React.useState(true);
  const onClick = () => {
    setBox(!box);
  };
  const onClick1 = () => {
    setCheck(!check);
  };
  // const { CartData } = useSelector((state) => state);
  const [CartData, setCartdata] = React.useState([]);
  console.log(CartData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const TotalPay = JSON.parse(localStorage.getItem("totalAmount"));
  let Token = JSON.parse(localStorage.getItem("Token"));
  // const [cartitem, setCartitem] = React.usestate([])
  // React.useEffect(() => {
  // 	// getData();
  // }, []);
  console.log(TotalPay);
  //   async function getData() {
  //     const data = await fetch("https://ayush05.herokuapp.com/dermcart").then((d) =>
  //       d.json()
  //     );
  //     setCartitem(data);
  //     //  console.log(data);
  //   }
  // const [paymentSucsess, setPaymentSucsesss] = React.useState(false);
  React.useEffect(() => {
    getCartData();
  }, []);

  const SetToReduce = () => {
    axios
      .get(` https://dermstore.cyclic.app/items/${Token}`)
      .then(({ data }) => {
        dispatch(fetchCartData(data));
        dispatch(GetCartCount(data[0].cartItems.length));
        // console.log(data);
      });
  };

  function getCartData() {
    // console.log(` https://dermstore-server-ayush.herokuapp.com/items/${Token}`);
    fetch(` https://dermstore.cyclic.app/items/${Token}`)
      .then((res) => res.json())
      .then((res) => setCartdata(res[0].cartItems))
      .catch((err) => console.log(err))
      .finally(() => SetToReduce());
  }

  const handlePaymentSuccess = () => {
    alert("Your Order is Successfully Placed");
    axios
      .delete(` https://dermstore.cyclic.app/items/all/${Token}`)
      .then(SetToReduce())
      .then(navigate("/"));
  };

  // const removeFromCart = (id) => {
  //   //localhost:8080/items/6340469bde6af2d810b23681?cartitemid=6343a65eee621d98e7dbb5cb
  //   http: axios
  //     .delete(` https://dermstore-server-ayush.herokuapp.com/items/${Token}?cartitemid=${id}`)
  //     .then(getCartData());
  // };

  return (
    <div>
      <div
        className="first_di"
        style={{ display: "flex", paddingLeft: "10px" }}
      >
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            width="200"
            color="#222222"
            viewBox="0 0 259 64"
            className="headerLogo"
          >
            <g fill="currentColor" fillRule="evenodd">
              <g fill="currentColor" fillRule="nonzero">
                <g>
                  <path
                    d="M54.998 9.03C48.853 3.01 40.261 0 29.286 0H0v63.15h29.098c10.724 0 19.253-3.01 25.587-9.092 6.206-5.796 9.65-13.961 9.47-22.451.273-8.481-3.053-16.682-9.157-22.576zm-24.27 41.955c-7.057-.011-13.572-3.787-17.091-9.905-3.52-6.117-3.507-13.647.031-19.754 3.539-6.106 10.066-9.86 17.124-9.85 10.91.018 19.74 8.876 19.722 19.786-.017 10.91-8.875 19.74-19.785 19.723zm59.264-29.036h7.337c6.083 0 9.783 3.763 9.783 9.595 0 5.832-3.7 9.595-9.783 9.595h-7.337v-19.19zm7.086 14.863c3.198 0 5.017-2.007 5.017-5.268 0-3.26-1.819-5.268-5.017-5.268h-2.07v10.536h2.07zm26.903-14.863v4.327h-8.905v3.01h8.153v4.202h-8.153v3.324h8.905v4.327H110.06v-19.19h13.922zm8.341 12.856v6.334h-5.017v-19.19h8.717c4.202 0 7.086 2.32 7.086 6.522 0 2.885-1.505 4.892-3.888 5.77l4.578 6.898h-5.644l-4.076-6.334h-1.756zm0-4.013h3.136c1.818 0 2.634-.878 2.634-2.32 0-1.38-.816-2.321-2.634-2.321h-3.136v4.64zm22.702 10.347l-4.077-11.414V41.14h-4.766v-19.19h6.209l4.264 11.978 4.265-11.978h6.145v19.253h-4.766V29.725l-4.013 11.414h-3.261zm20.005-5.644c.439 1.317 1.568 1.944 3.135 1.944 1.568 0 2.634-.627 2.634-1.819 0-.878-.627-1.317-1.818-1.567l-3.763-.753c-2.822-.627-5.017-2.07-5.017-5.33 0-3.763 3.136-6.209 7.463-6.209 4.766 0 7.462 2.571 7.964 5.895h-4.954c-.44-1.066-1.317-1.881-2.948-1.881-1.442 0-2.445.627-2.445 1.693 0 .815.627 1.317 1.63 1.505l3.826.878c3.323.752 5.142 2.571 5.142 5.518 0 3.951-3.324 6.209-7.588 6.209-4.64 0-7.84-2.195-8.529-6.02h5.268v-.063zm11.852-13.546h17.058v4.327h-6.02v14.926h-5.08V26.276h-5.958V21.95zm27.092 19.504c-5.581 0-9.47-4.202-9.47-9.909 0-5.77 3.889-9.908 9.47-9.908 5.644 0 9.532 4.139 9.532 9.908 0 5.77-3.888 9.909-9.532 9.909zm0-15.428c-2.634 0-4.327 2.195-4.327 5.52 0 3.323 1.693 5.518 4.327 5.518s4.39-2.195 4.39-5.519c0-3.324-1.756-5.519-4.39-5.519zm16.681 8.78v6.334h-5.017v-19.19h8.717c4.202 0 7.087 2.32 7.087 6.522 0 2.885-1.505 4.892-3.888 5.77l4.578 6.898h-5.645l-4.076-6.334h-1.756zm0-4.013h3.136c1.818 0 2.634-.878 2.634-2.32 0-1.38-.816-2.321-2.634-2.321h-3.136v4.64zm27.782-8.843v4.327h-8.905v3.01h8.152v4.202h-8.152v3.324h8.905v4.327h-13.86v-19.19h13.86z"
                    transform="translate(-890 -121) translate(890 121)"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </Link>
      </div>
      {/* </Link> */}
      <div className="primary">
        <div className="main">
          <div className="right_main">
            <div className="first_main">
              <h2>Login or sign up</h2> <br />
              <p>
                Checkout faster with saved details and get access to exclusive
                offers
              </p>
            </div>
            <div>
              <button
                onClick={() => {
                  // navigate("/login");
                }}
                className="btn"
              >
                LOGIN/SIGNUP
              </button>
            </div>
          </div>

          <div className="first_form">
            <hr className="hero" />
            <h3>Checkout as a guest</h3>
            <p>
              Complete your order without signing up, or sign up after payment.
            </p>
            <h5 className="em">1. Email and delivery address</h5>
            <form action="">
              <span>Email address</span>
              <br />
              <input type="text" className="text" required />
              <br />
              <span style={{ fontSize: "12px" }}>
                We'll send the purchase receipt to this email.
              </span>
              <h4
                style={{
                  "margin-top": "3%",
                }}
              >
                Country/Region
              </h4>
              {/* <input type="text" className="text" required /> */}
              <select className="text">
                <option>Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Britain">Britain</option>
              </select>
              <p className="type">Full Name</p>
              <input type="text" className="text" required />
              <p className="type">Address Search</p>
              <input
                type="text"
                className="text"
                placeholder="Start typing your address..."
                required
              />
              <br />
              <p className="to_active" onClick={onClick}>
                or Enter Address Manually
              </p>
              {box ? (
                <div className="display">
                  <p className="type" style={{ marginLeft: "-15px" }}>
                    Address
                  </p>
                  <input
                    type="text"
                    className="text"
                    style={{ marginLeft: "-15px" }}
                    required
                  />
                  <p className="type" style={{ marginLeft: "-15px" }}>
                    Apartment/Suite number
                  </p>
                  <input
                    type="text"
                    className="text"
                    style={{ marginLeft: "-15px" }}
                    required
                  />
                  <p className="type" style={{ marginLeft: "-15px" }}>
                    Town/City
                  </p>
                  <input
                    type="text"
                    className="text"
                    style={{ marginLeft: "-15px" }}
                    required
                  />
                  <p className="type" style={{ marginLeft: "-15px" }}>
                    Zip Code/Postcode
                  </p>
                  <input
                    type="text"
                    className="text"
                    style={{ marginLeft: "-15px" }}
                    required
                  />
                </div>
              ) : (
                ""
              )}

              <p className="type">Contact Number</p>
              <input type="text" className="text" required />
            </form>
          </div>

          <div className="delivery">
            <h2 className="lefty">2. Select Delivery Option</h2>
            <div className="box_del">
              {/* Please enter your address so we can calculate your delivery
              options */}
              <Alert
                severity="info"
                style={{ color: "rgb(52, 91, 235)", fontWeight: 600 }}
              >
                {" "}
                <p id="blue">
                  Please enter your address so we can calculate your delivery
                  options
                </p>
              </Alert>
            </div>
          </div>

          <div className="payment">
            <h4 className="lefty">3. Select Payment Method</h4>
            <div className="payment_div">
              <div className="under_payment">
                <h5>Credit/Debit Card</h5>
                <div className="images_d">
                  <img
                    src="https://mms.businesswire.com/media/20210126006164/en/854905/5/Visa+Brand+Mark+-+Blue+-+900x291.jpg"
                    alt=""
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"
                    alt=""
                  />
                  <img
                    src="https://www.investopedia.com/thmb/LF_8TWZPQxdvn6y0DG-bNIZT5Co=/1000x714/filters:fill(auto,1)/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg"
                    alt=""
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/1200px-Maestro_2016.svg.png"
                    alt=""
                  />
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <p className="type">Card Number</p>
                <input type="number" className="text" />
                <p className="type">Name on card</p>
                <input type="text" className="text" />
                <p className="type">Expiry Date</p>
                <div className="exp">
                  <select className="half_text">
                    <option>Month</option>
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select className="half_text">
                    <option style={{ background: "gray" }}>Year</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                  </select>
                </div>

                <p className="type">Security Code (CV2)</p>
                <input type="number" className="half_cvv" />
                <br />
                <br />
                <div className="check">
                  <div>
                    <input
                      type="checkbox"
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                      onClick={onClick1}
                    />
                  </div>

                  <div>
                    <p style={{ display: "inline", paddingLeft: "10px" }}>
                      Use my shipping address as my cardholder address
                    </p>{" "}
                  </div>
                </div>
                {check ? (
                  <>
                    <p className="type">Country/Region</p>
                    <select className="text">
                      <option>Country</option>
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Britain">britain</option>
                    </select>
                    <p className="type">Address Search</p>
                    <input
                      type="text"
                      className="text"
                      placeholder="Start typing your address..."
                      required
                    />
                  </>
                ) : null}
              </div>
            </div>

            <div className="last_box">
              <h3>Use a different payment method</h3>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                height={"30px"}
                width={"40px"}
              />
              <img src="https://s1.thcdn.com/checkout/resources/images/52c235cfc21b037c320712891df2cffc.svg" />
              <img
                src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                alt=""
              />
              <img src="https://s1.thcdn.com/checkout/resources/images/959a8e732266683b799128acf46e03fd.svg" />
              <img
                src="https://s1.thcdn.com/checkout/resources/images/5ba5f9cd0c43d9f966774630aa65d7c6.svg"
                height={"30px"}
              />
            </div>
          </div>

          <div className="payDiv">
            <button onClick={handlePaymentSuccess} className="last_but">
              SUBMIT MY ORDER
            </button>
          </div>
        </div>

        <div className="second_main">
          <div>
            <h3>Order Summary</h3>
            <p>Order Number : 402475627</p>
            <div className="store_items_list">
              {CartData.map((elm) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                      overflow: "hidden",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={elm.img_url_1}
                      alt="prod"
                      style={{ width: "60px", height: "80px" }}
                    />
                    <p>{elm.name.substr(0, 30)}</p>
                  </div>
                );
              })}
            </div>

            <hr />
            <div className="data_div">
              <p>Delivery</p>
              <p>Calculated at next step</p>
            </div>
          </div>

          <hr />
          <div className="data_div">
            <p>Total to pay :</p>
            <h4>${TotalPay}</h4>
          </div>
        </div>
        <hr />
      </div>
      <div className="footera">{/* <Footer /> */}</div>
    </div>
  );
};
