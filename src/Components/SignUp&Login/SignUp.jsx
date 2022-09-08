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
		await axios.post("http://localhost:8080/usersInfo", formData);

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
				}}>
				<Link to="/">
					<div id="nav1">
						<img
							src="https://s1.thcdn.com/enterprise/assets/dermstore-global-a3ce7f42-4a2c-4cc5-ad05-ba594900fa02-logo-default.svg"
							alt="Navbar"
						/>
					</div>
				</Link>
			</div>
			<div id="container1">
				<hr />

				<h2 id="about1">About You</h2>
				

				<p id="with">Sign Up With</p>
				
				<div id="signupwith">
					
					<div>
						<p id="logopara">
							<Link to="#">
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
							<Link to="#">
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
						
							<p>Full Name</p>
							<input
								type="text"
								onChange={handleChange}
								name="fullName"
								required
							/>
						</div>
						<div>
							<p> *Email address</p>
							<input
								type="email"
								onChange={handleChange}
								name="email"
								required
							/>
						</div>
						<div>
							<p>*Confirm Email address</p>
							<input
								type="email"
								onChange={handleChange}
								name="confirmEmail"
								required
							/>
						</div>
						<div>
							<p>*Password</p>
							<input
								type="password"
								onChange={handleChange}
								name="password"
								required
							/>
						</div>
						<div>
							<p>*Confirm Password</p>
							<input
								type="password"
								name="confirmPassword"
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<p>*Cell Phone Number(Optional)</p>
							<input type="tel" onChange={handleChange} name="mobile" id="" />
						</div>
						<div>
							<p>*Referral Code (Optional)</p>
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
