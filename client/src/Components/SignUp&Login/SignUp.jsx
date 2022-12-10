import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const initialState = {
    fullName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    referralCode: "",
    reward: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    const data = await axios.post(
      "https://dermstore.cyclic.app/auth/signUp",
      formData
    );
    // console.log(user);
    if (data.data.message) {
      alert(`${data.data.message}, Please Login!`);
    }

    setFormData(initialState);
    navigate("/login");
  };

  return (
    <div>
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
      <div id="container1">
        <hr />

        <h1 id="about1">About You</h1>

        <p id="with">Sign Up With</p>

        <div id="signupwith">
          <div>
            <p id="logopara">
              <Link to="#" className="loginmySocial">
                <img
                  id="logo"
                  src="https://seeklogo.com/images/F/facebook-logo-C64946D6D2-seeklogo.com.png"
                  alt=""
                />{" "}
                Facebook
              </Link>
            </p>
          </div>
          <div>
            <p id="logopara">
              <Link to="#" className="loginmySocial">
                {" "}
                <img
                  id="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />{" "}
                Google
              </Link>
            </p>
          </div>
        </div>
        <hr />
        <div>
          <form onSubmit={handleSubmit}>
            <p id="with2">Or create an email account</p>
            <div>
              <p className="formptg">Full Name</p>
              <input
                type="text"
                onChange={handleChange}
                name="fullName"
                required
              />
            </div>
            <div>
              <p className="formptg"> *Email address</p>
              <input
                type="email"
                onChange={handleChange}
                name="email"
                required
              />
            </div>
            <div>
              <p className="formptg">*Confirm Email address</p>
              <input
                type="email"
                onChange={handleChange}
                name="confirmEmail"
                required
              />
            </div>
            <div>
              <p className="formptg">*Password</p>
              <input
                type="password"
                onChange={handleChange}
                name="password"
                required
              />
            </div>
            <div>
              <p className="formptg">*Confirm Password</p>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <p className="formptg">*Cell Phone Number(Optional)</p>
              <input type="tel" onChange={handleChange} name="mobile" id="" />
            </div>
            <div>
              <p className="formptg">*Referral Code (Optional)</p>
              <input type="text" onChange={handleChange} name="referralCode" />
              <p>* Your referrals discount is automatically applied at cart</p>
            </div>
            <div>
              <p>Loyalty Reward program</p>
              <div id="check1">
                <input
                  onChange={handleChange}
                  type="checkbox"
                  name="reward"
                  id="check"
                  required
                />
                <span>
                  <p id="paracheck">
                    Include me in the Dermstore Rewards program Read our terms
                    of use.
                  </p>
                </span>
              </div>
            </div>
            <input type="submit" value="Continue" id="submit" required />
            <p id="term">
              By proceeding, you are confirming that you agree to our{" "}
              <Link to="#"> Terms and Conditions </Link> and{" "}
              <Link to="#">Privacy Policy</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
