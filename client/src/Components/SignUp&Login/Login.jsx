import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import "./Login.css";
export const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState([]);
  const [loginData, setLoginData] = useState(initialState);

  // let userToken = JSON.parse(localStorage.getItem("userToken"));
  const { isAuth, handleAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  // console.log("userToken", userToken);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  // console.log("userData", userData);

  const getUserData = async () => {
    const { data } = await axios.get(
      "https://ayush05.herokuapp.com/dermuserinfo"
    );
    setUserData(data);
  };

  // const handleSubmit = (event)

  const handleSubmit = async (event) => {
    event.preventDefault();
    // let flag = false;
    const { data } = await axios.post(
      " https://dermstore.cyclic.app/auth/login",
      loginData
    );
    if (data.token) {
      localStorage.setItem("Token", JSON.stringify(data.token));
      localStorage.setItem("userToken", JSON.stringify(loginData));
      handleAuth(loginData);
      window.location.reload();
    } else {
      alert(data.message);
      return;
    }
  };

  return (
    <div>
      <div id="container">
        <div
          id="main"
          style={{
            paddingTop: "0px",
            marginTop: "5px",
          }}
        >
          <Link to="/">
            <div id="nav1">
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
            </div>
          </Link>
        </div>
        <div id="body">
          <div id="bigdiv">
            <form onSubmit={handleSubmit}>
              <div>
                <p id="cus1">Existing Customers</p>
                <div>
                  <p id="ep">*Email address</p>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    className="inputss"
                  />
                </div>
              </div>
              <div>
                <div>
                  <p id="ep">*Password</p>
                  <input
                    type="text"
                    name="password"
                    onChange={handleChange}
                    className="inputss"
                  />
                </div>
              </div>
              <p id="forgot">
                <a href="google.com/forgot password">
                  Forgotten your password?{" "}
                </a>
              </p>
              <input
                type="submit"
                id="submit"
                value="LOGIN TO YOUR ACCOUNT"
                className="inputss"
              />

              <p id="ep1">Or, Continue with</p>
            </form>
            <div id="toogle">
              <div id="fg">
                <p id="logopara">
                  <a href="facebook.com">
                    <img
                      id="logo"
                      src="https://seeklogo.com/images/F/facebook-logo-C64946D6D2-seeklogo.com.png"
                      alt=""
                    />{" "}
                    Facebook
                  </a>
                </p>
              </div>
              <div id="fg">
                <p id="logopara">
                  <a href="google.com">
                    <img
                      id="logo"
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      alt=""
                    />{" "}
                    Google
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div id="smldiv">
            <p id="cus">New Customers</p>
            <button className="continue_2">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                to="/signUp"
              >
                {" "}
                CONTINUE{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
