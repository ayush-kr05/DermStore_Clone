import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ResNavBar } from "./ResNavBar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import dropOneData from "./utils/dropdownOne.json";
import dropTwoData from "./utils/dropdownTwo.json";
import dropFourData from "./utils/dropdownFour.json";
import dropFiveData from "./utils/dropdownFive.json";
import dropSixData from "./utils/dropdownSix.json";
import dropSevenData from "./utils/dropdownSeven.json";
import dropEightData from "./utils/dropdownEight.json";
import dropNineData from "./utils/dropdownNine.json";
import dropTwelveData from "./utils/dropdownTwelve.json";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import { GetCartCount, fetchCartData } from "../../Redux/action";

export const Navbar = () => {
  const [searchParam, setSearchParam] = React.useState("");
  const [showLoginDrop, setShowLoginDrop] = React.useState(false);
  const [searchData, setSearchData] = React.useState([]);
  const [searchDiv, setSearchDiv] = React.useState(false);
  const [dropdown1, setDropdown1] = React.useState(false);
  const [dropdown2, setDropdown2] = React.useState(false);
  const [dropdown4, setDropdown4] = React.useState(false);
  const [dropdown5, setDropdown5] = React.useState(false);
  const [dropdown6, setDropdown6] = React.useState(false);
  const [dropdown7, setDropdown7] = React.useState(false);
  const [dropdown8, setDropdown8] = React.useState(false);
  const [dropdown9, setDropdown9] = React.useState(false);
  const [dropdown12, setDropdown12] = React.useState(false);
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { CartCount } = useSelector((state) => state);
  let Token = JSON.parse(localStorage.getItem("Token"));

  function handleSearch(e) {
    setSearchParam(e.target.value);
    let timeId;
    let srhdivId;

    let debounce = () => {
      if (timeId) {
        clearTimeout(timeId);
        clearTimeout(srhdivId);
      }
      timeId = setTimeout(() => {
        getSearchData(searchParam);
        setSearchDiv(true);
        srhdivId = setTimeout(() => {
          setSearchDiv(false);
        }, 3000);
      }, 1000);
    };
    debounce();
  }

  const getSearchData = (param) => {
    fetch(
      `https://dermstoreproducts.cyclic.app/dermproducts?q=${param}&_limit=5`
    )
      .then((res) => res.json())
      .then((res) => setSearchData(res))
      .catch((error) => console.log(error));
  };

  const showProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/signUp");
  };

  // Updating NavbarCartData

  const SetToReduce = () => {
    axios
      .get(`https://dermstore.cyclic.app/items/${Token}`)
      .then(({ data }) => {
        dispatch(fetchCartData(data));
        dispatch(GetCartCount(data[0].cartItems.length));
        // console.log(data);
      });
  };

  React.useEffect(() => {
    SetToReduce();
  }, []);

  // console.log(searchData);

  return (
    <>
      <div
        className="ContryDiv"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "10px",
          textAlign: "right",
        }}
      >
        USA
      </div>
      <section className="navbarSection">
        <div className="navbar">
          <div className="upper_navbar">
            {/* Logo */}

            <div className="app_logo">
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

            {/* Search Bar */}

            <div className="searchBar">
              <input
                type="text"
                value={searchParam}
                placeholder="Search for a Product or Brand..."
                onChange={handleSearch}
              />
              <button id="search_btn">
                <svg
                  width="22"
                  height="22"
                  border="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  fill="white"
                >
                  <title>Search</title>
                  <path
                    d="M22 22l-6.344-6.344M10 18a8 8 0 100-16 8 8 0 000 16z"
                    stroke="inherit"
                    fill="white"
                    strokeWidth="2"
                    strokeMiterlimit="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>

              {searchDiv && (
                <div className="searchResult_Div">
                  {searchData.map((elm) => {
                    {
                      /* console.log(elm); */
                    }
                    return (
                      <div
                        key={elm.id}
                        onClick={() => {
                          showProductDetails(elm.id);
                        }}
                      >
                        <img src={elm.img_url_1} alt={`prodcut${elm.id}`} />
                        <p> {elm.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Account Option */}

            <div
              className="account_opt"
              onMouseEnter={() => {
                setShowLoginDrop(true);
              }}
              onMouseLeave={() => setShowLoginDrop(false)}
            >
              <Link
                to="/login"
                className="link"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80px",
                  gap: "15px",
                  fontSize: "14px",
                }}
              >
                <div>
                  <svg
                    className="UserDropDowns_icon_06"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke="#2F3337"
                    fill="#2F3337"
                  >
                    <title>User</title>
                    <path
                      d="M1 23c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10M12 13a6 6 0 100-12 6 6 0 000 12z"
                      stroke="inherit"
                      fill="none"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <p style={{ marginTop: "12px" }}>Account</p>
              </Link>
              {showLoginDrop ? (
                isAuth ? (
                  <div class="OnloginDropdown">
                    <div class="logButtDiv">
                      <button
                        className="loglot"
                        onClick={() => {
                          localStorage.removeItem("userToken");
                          localStorage.removeItem("Token");
                          window.location.reload();
                        }}
                      >
                        Logout
                      </button>
                    </div>

                    <Link to="/wishlist">My Favorites</Link>
                    <Link to="/cart">My Orders</Link>
                    <Link to="/">My Wishlist</Link>
                    <Link to="/">Your Referals</Link>
                  </div>
                ) : (
                  <div class="OnlogoutDropdown">
                    <div class="logButtDiv">
                      <button className="loglot" onClick={handleLogin}>
                        Login
                      </button>
                      <button className="logreg" onClick={handleRegister}>
                        Register
                      </button>
                    </div>

                    <Link to="/wishlist">My Favorites</Link>
                    <Link to="/cart">My Orders</Link>
                    <Link to="/">My Wishlist</Link>
                    <Link to="/">Your Referals</Link>
                  </div>
                )
              ) : (
                <></>
              )}
            </div>

            {/* Cart Option */}

            <div className="cart_option">
              <Link
                to="/cart"
                className="link"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "60px",
                  gap: "10px",
                  fontSize: "14px",
                }}
              >
                <div className="cart_svg_div">
                  <svg
                    className="UserDropDowns_icon_06"
                    width="22"
                    height="21"
                    viewBox="0 0 24 24"
                    stroke="#2F3337"
                    fill="#2F3337"
                  >
                    <title>Cart Empty</title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.174 14.4L5.208.833C5.14.356 4.697 0 4.174 0h-3.13C.466 0 0 .43 0 .96s.467.96 1.043.96H3.26l1.966 13.567c.07.477.512.833 1.035.833h14.608c.498 0 .926-.323 1.024-.772l2.087-9.6c.113-.52-.254-1.025-.819-1.13-.565-.103-1.115.234-1.228.754L20.014 14.4H7.174zm.13 9.6a2.087 2.087 0 100-4.174 2.087 2.087 0 000 4.174zm14.61-2.087a2.087 2.087 0 11-4.175 0 2.087 2.087 0 014.174 0z"
                      stroke="none"
                      fill="inherit"
                    ></path>
                  </svg>
                  <span className="cartCountNav">{CartCount}</span>
                </div>

                <p style={{ marginTop: "12px" }}>Cart</p>
              </Link>
            </div>
          </div>
          {/*----------------------------- {Lower Navbar Started} -----------------------------------*/}

          <div className="lower_navbar">
            <div
              id="drop1"
              onMouseEnter={() => {
                setDropdown1(true);
              }}
              onMouseLeave={() => setDropdown1(false)}
            >
              <Link to="/products" className="link">
                Brands
              </Link>
              {dropdown1 && (
                <div id="drop_1">
                  {dropOneData.map((e) => (
                    <div key={e.id}>
                      <p
                        style={{
                          padding: "8px",
                          fontWeight: "300",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              id="drop2"
              onMouseEnter={() => {
                setDropdown2(true);
              }}
              onMouseLeave={() => setDropdown2(false)}
            >
              <Link to="/products" className="link">
                Browse By
              </Link>
              {dropdown2 && (
                <div id="drop_2">
                  {dropTwoData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div id="drop3">
              <Link to="/products" className="link">
                Bestsellers
              </Link>
            </div>

            <div
              id="drop4"
              onMouseEnter={() => {
                setDropdown4(true);
              }}
              onMouseLeave={() => setDropdown4(false)}
            >
              <Link to="/products" className="link">
                Skin Care
              </Link>
              {dropdown4 && (
                <div id="drop_4">
                  {dropFourData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              id="drop5"
              onMouseEnter={() => {
                setDropdown5(true);
              }}
              onMouseLeave={() => setDropdown5(false)}
            >
              <Link to="/products" className="link">
                Makeup
              </Link>
              {dropdown5 && (
                <div id="drop_5">
                  {dropFiveData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              id="drop6"
              onMouseEnter={() => {
                setDropdown6(true);
              }}
              onMouseLeave={() => setDropdown6(false)}
            >
              <Link to="/products" className="link">
                Hair Care
              </Link>
              {dropdown6 && (
                <div id="drop_6">
                  {dropSixData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              id="drop7"
              onMouseEnter={() => {
                setDropdown7(true);
              }}
              onMouseLeave={() => setDropdown7(false)}
            >
              <Link to="/products" className="link">
                Bath & Body
              </Link>

              {dropdown7 && (
                <div id="drop_7">
                  {dropSevenData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              id="drop8"
              onMouseEnter={() => {
                setDropdown8(true);
              }}
              onMouseLeave={() => setDropdown8(false)}
            >
              <Link to="/products" className="link">
                Tools & Devices
              </Link>
              {dropdown8 && (
                <div id="drop_8">
                  {dropEightData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div
              id="drop9"
              onMouseEnter={() => {
                setDropdown9(true);
              }}
              onMouseLeave={() => setDropdown9(false)}
            >
              <Link to="/products" className="link">
                Gifts & Sets
              </Link>

              {dropdown9 && (
                <div id="drop_9">
                  {dropNineData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div id="drop10">
              <Link to="/products" className="link">
                BeautyFIX
              </Link>
            </div>

            <div id="drop11">
              <Link to="/products" className="link">
                Sale
              </Link>
            </div>

            <div
              id="drop12"
              onMouseEnter={() => {
                setDropdown12(true);
              }}
              onMouseLeave={() => setDropdown12(false)}
            >
              <Link to="/products" className="link">
                New
              </Link>
              {dropdown12 && (
                <div id="drop_12">
                  {dropTwelveData.map((e) => (
                    <div key={e.id}>
                      <h3
                        style={{
                          padding: "8px",
                          fontWeight: "bold",
                          fontSize: "25px",
                        }}
                      >
                        <Link to={e.to} className="linkln">
                          {e.title}
                        </Link>
                      </h3>
                      <div>
                        {e.products.map((el) => (
                          <div key={el.id}>
                            <p
                              style={{
                                padding: "8px",
                                // fontSize: "25px",
                              }}
                            >
                              <Link to={el.to} className="linkln">
                                {el.title}
                              </Link>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div id="drop13">
              <Link to="/products" className="link">
                Skin 101
              </Link>
            </div>
          </div>
        </div>

        <hr style={{ margin: "0" }} />
      </section>
      {/*----------------------------------- {Navbar End} ---------------------*/}

      <div className="offers">
        <div className="offers-container">
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "17%",
            }}
          >
            <li>
              <img
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/512/45/45880.png"
                alt=""
              />
            </li>
            <li>Free US shipping over $50</li>
          </ul>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "17%",
            }}
          >
            <li>
              <img
                width="20px"
                height="20px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROkQNSKNA7dRtPSl3FvXxQlibTuMNljFswCg&usqp=CAU"
                alt=""
              />
            </li>
            <li>New Customers save 15% </li>
          </ul>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "17%",
            }}
          >
            <li>
              <img
                width="20px"
                height="20px"
                src="https://www.freeiconspng.com/thumbs/battery-icon/battery-icon-13.png"
                alt=""
              />
            </li>
            <li>Dermstore Rewards</li>
          </ul>
          {/*  */}
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "17%",
            }}
          >
            <li>
              <img
                width="20px"
                height="20px"
                src="https://www.freeiconspng.com/uploads/watch-icon-10.png"
                alt=""
              />
            </li>
            <li> Ask The Esthetician</li>
          </ul>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "17%",
            }}
          >
            <li>
              <img
                width="20px"
                height="20px"
                src="https://www.freeiconspng.com/uploads/call-phone-smart-icon--icon-search-engine-29.png"
                alt=""
              />
            </li>
            <li>Download Our App</li>
          </ul>

          {/*  */}

          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "16%",
            }}
          >
            <li>
              <img
                width="20px"
                height="20px"
                src="https://cdn-icons-png.flaticon.com/512/1828/1828743.png"
                alt=""
              />
            </li>
            <li>Refer a Friend, Get $15</li>
          </ul>
        </div>
      </div>
      <div className="bottom-heading">
        15% off SkinMedica + 20% off when you subscribe. Receive a Skinmedica
        Lytera 0.30 oz ($36 value) when you spend $160 or more on the brand.
      </div>

      {/*-------------------------- Responsive Navbar------------------------ */}

      <section className="navRes_Section">
        <div>
          <ResNavBar />
        </div>
      </section>
    </>
  );
};
