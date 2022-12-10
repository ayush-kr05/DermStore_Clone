import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
// import Navbar from "../Navbar/Navbar";
import { Categeory } from "./categeory";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import "./product.css";
import { AuthContext } from "../../Components/Context/AuthContextProvider";
import { fetchCartData, GetCartCount } from "../../Redux/action";

export const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState([]);
  const [makeup, setMakeup] = useState([]);
  const [makeupPr, setMakeupPr] = useState([]);
  const [cFormat, setCFormat] = useState([]);
  const [cFinish, setCFinish] = useState([]);
  const [cCoverage, setCCoverage] = useState([]);
  const [cTA, setCTA] = useState([]);
  const [cBT, setCBT] = useState([]);
  const [lProducts, setLProducts] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [price, setPrice] = useState([]);
  const [savings, setSavings] = useState([]);
  const [aReviews, setAReviews] = useState([]);
  const [like, setItemlike] = useState([]);
  const [Token, setToken] = useState("");
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("Token")));
  }, []);

  useEffect(() => {
    setCategory(Categeory.Category);
  }, []);

  useEffect(() => {
    setMakeup(Categeory.Makeup_Category);
  }, []);

  useEffect(() => {
    setMakeupPr(Categeory.Makeup_Product_Type);
  }, []);

  useEffect(() => {
    setCFormat(Categeory.Complexion_Format);
  }, []);

  useEffect(() => {
    setCFinish(Categeory.Complexion_Finish);
  }, []);

  useEffect(() => {
    setCCoverage(Categeory.Complexion_Coverage);
  }, []);

  useEffect(() => {
    setCTA(Categeory.Cosmetics_TA);
  }, []);

  useEffect(() => {
    setCBT(Categeory.Cosmetics_BT);
  }, []);

  useEffect(() => {
    setLProducts(Categeory.Lips_Products);
  }, []);

  useEffect(() => {
    setPreferences(Categeory.Preferences);
  }, []);

  useEffect(() => {
    setPrice(Categeory.Price);
  }, []);

  useEffect(() => {
    setSavings(Categeory.Savings);
  }, []);

  useEffect(() => {
    setAReviews(Categeory.Average_Reviews);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const dispatch = useDispatch();

  async function getData() {
    const data = await fetch(
      "https://dermstoreproducts.cyclic.app/dermproducts"
    ).then((d) => d.json());
    setItems(data);
    //  console.log(data);
  }

  const Sort = (e) => {
    if (e.target.value == "LTH") {
      const d = [...items].sort((a, b) => {
        return Number(a.mrp) - Number(b.mrp);
      });
      console.log(d);
      setItems(d);
    }

    if (e.target.value == "HTL") {
      const d = [...items].sort((a, b) => {
        return Number(b.mrp) - Number(a.mrp);
      });
      console.log(d);
      setItems(d);
    }

    if (e.target.value == "ATZ") {
      const d = [...items].sort((a, b) => {
        return a.title > b.title ? 1 : -1;
      });
      console.log(d);
      setItems(d);
    }
    if (e.target.value == "dfault") {
      const d = [...items];
      setItems(d);
    }
  };

  const handleItemCategory = (category) => {
    axios
      .get(
        ` https://dermstoreproducts.cyclic.app/dermproducts?item_category=${category}`
      )
      .then(({ data }) => {
        console.log(data);
        setItems(data);
      });
  };

  // const SetToReduce = () => {
  //   axios.get(`https://ayush05.herokuapp.com/dermcart`).then(({ data }) => {
  //     dispatch(fetchCartData(data));
  //     dispatch(GetCartCount(data.length));
  //     // console.log(data.length);
  //   });
  // };
  const SetToReduce = () => {
    axios
      .get(`https://dermstore.cyclic.app/items/${Token}`)
      .then(({ data }) => {
        dispatch(fetchCartData(data));
        dispatch(GetCartCount(data[0].cartItems.length));
        // console.log(data);
      });
  };

  const sendToCart = (elem) => {
    // console.log(elem);
    if (!isAuth) {
      alert("Please login");
      return;
    }
    alert("Added to Cart");
    fetch(`https://dermstore.cyclic.app/cart/${Token}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(elem),
    }).then(() => SetToReduce());
  };

  const handleMakeupCategory = (makeup_category) => {
    axios
      .get(
        `https://dermstoreproducts.cyclic.app/dermproducts?makeup_category=${makeup_category}&&`
      )
      .then(({ data }) => {
        setItems(data);
      });
  };

  const priceFilter = (low, high) => {
    let pricecheck = items.filter((elem) => {
      return elem.mrp >= low && elem.mrp < high;
    });
    setItems(pricecheck);
  };

  return (
    <div>
      <Navbar />
      <div style={{ width: "100%", display: "flex", marginBottom: "3%" }}>
        <div className="sort">
          <div>
            {/* <h3> Refine</h3> */}
            {/* <hr /> */}
            <br />
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Item Category
            </h4>
            <hr />
            <div className="Brands">
              {category.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleItemCategory(e[0])}
                    className="SI"
                  >
                    {`${e[0]}`}
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Makeup Category
            </h4>
            <hr />
            <div
              style={
                {
                  // paddingLeft:"7px"
                }
              }
            >
              {makeup.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Makeup Product Type
            </h4>
            <hr />
            <div>
              {makeupPr.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Complexion Format
            </h4>
            <hr />
            <div>
              {cFormat.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Complexion Finish
            </h4>
            <hr />
            <div>
              {cFinish.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Complexion Coverage
            </h4>
            <hr />
            <div>
              {cCoverage.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Cosmetics Tools & Accessories
            </h4>
            <hr />
            <div>
              {cTA.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>
              Cosmetics Brush Type
            </h4>
            <hr />
            <div>
              {cBT.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "20px", marginTop: "10px" }}>
              Lips Products
            </h3>
            <hr />
            <div className="Lips">
              {lProducts.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => handleMakeupCategory(e)}
                    className="SI"
                  >
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: "20px", marginTop: "10px" }}>Preferences</h4>
            <hr />
            <div className="Preference">
              {preferences.map((e, index) => {
                return (
                  <div key={index} className="SI">
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "20px", marginTop: "10px" }}>Price</h3>
            <hr />
            <div>
              {price.map((e, index) => {
                return (
                  <div
                    key={index}
                    className="SI"
                    onClick={() => priceFilter(50, 100)}
                  >
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3>Savings</h3>
            <hr />
            <div>
              {savings.map((e, index) => {
                return (
                  <div key={index} className="SI">
                    {/* <button></button> */}
                    <p>{e}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: "20px", marginTop: "10px" }}>
              Average Reviews
            </h3>
            <hr />
            <div>
              {aReviews.map((e, index) => {
                return (
                  <div key={index} className="SI">
                    {/* <button></button> */}
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="product">
          <div className="HPP">
            <p
              style={{
                fontSize: "x-large",
                fontFamily: "serif",
                marginBottom: "0",
              }}
            >
              {/* Lipstick */}
            </p>
            {/* <p style={{ marginTop: "1%" }}>29 results</p> */}

            <br />
            <br />
            <br />
            <p style={{ fontSize: "80%", marginTop: "1%", marginBottom: "1%" }}>
              Perfecting your pout takes just a single swipe of this velvety
              rich trick: lipstick. Whether you want to simply enhance the color
              of your lips or hydrate them with a clear moisturizing gloss,
              lipstick is one of those cosmetics that women simply can't—and
              won't—go without. Here at Dermstore, we've taken the guesswork out
              of finding the perfect shade from top brands like jane iredale,
              DHC and Tarte Cosmetics.
            </p>
          </div>
          <div className="Sortby">
            <p>Sort by</p>
            <select defaultValue="dfault" onClick={Sort}>
              <option value="default">Default</option>
              {/* <option value="">Bestsellers</option> */}
              <option value="LTH">Price : Low to High</option>
              <option value="HTL">Price : High to Low</option>
              <option value="ATZ">A - Z</option>
              {/* <option value="">Newest Arrivals</option> */}
              {/* <option value="PD">Percentage Discount</option> */}
            </select>
          </div>
          <div className="PRlist">
            {items.map((elem, index) => {
              return (
                <div key={index} style={{ width: "99%" }}>
                  <div className="IW">
                    <div className="ImG">
                      <img
                        src={elem.img_url_1 || elem.img_url_2}
                        // alt="https://www.insticc.org/node/TechnicalProgram/56e7352809eb881d8c5546a9bbf8406e.png"

                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <div
                      onClick={(e) => {
                        // this.style.color="green";
                        alert("Added to wishlist");
                        getData();
                        const data = elem;
                        console.log(data.item_like);
                        fetch(
                          " https://dermstore-server-ayush.herokuapp.com/wishlist",
                          {
                            method: "POST",
                            headers: {
                              "content-type": "application/json",
                            },
                            body: JSON.stringify(data),
                          }
                        );
                      }}
                      className="wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        />
                        {/* <path fill-rule="evenodd" 
											 		d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" 
													fill="red"></path>  */}
                      </svg>
                    </div>
                  </div>
                  <div className="TRP">
                    <p>{elem.name.slice(0, 30)}...</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100px",
                        margin: "auto",
                      }}
                    >
                      <Stack spacing={0.5}>
                        <Rating
                          name="half-rating-read"
                          defaultValue={elem.rating}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                      <h3>{elem.rating}</h3>
                    </div>
                    <h3
                      name="price"
                      style={{ marginTop: "0px", textAlign: "center" }}
                    >
                      $ {elem.mrp}
                    </h3>
                  </div>
                  <div
                    className="QB"
                    style={{
                      marginBottom: "0",
                      height: "10%",
                    }}
                  >
                    <button
                      style={{
                        padding: "5px",
                        fontSize: "18px",
                      }}
                      onClick={() => {
                        getData();
                        const data = elem;
                        //send data to cart
                        sendToCart(elem);
                        // fetch("https://ayush05.herokuapp.com/dermcart", {
                        //   method: "POST",
                        //   headers: {
                        //     "content-type": "application/json",
                        //   },
                        //   body: JSON.stringify(data),
                        // });
                        SetToReduce();
                      }}
                      className="ATC"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
