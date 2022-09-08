import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import dropLoginData from "../utils/dropdownLogin.json";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Navbar() {
	const [dropdownLogin, setDropdownLogin] = useState(false);

	const { isAuth } = useContext(AuthContext);

	return (
	<div id="navbar">
		<div className="emptyDiv"></div>
			<div id="upper_navbar">
				<div id="inside_upper_navbar">

					<div id="logos">
						<div
							onMouseEnter={() => {
								setDropdownLogin(true);
							}}
							onMouseLeave={() => setDropdownLogin(false)}>
							<Link
								to=""
								className="link"
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "80px",
									fontSize: "14px",
								}}>
								<div>
									<svg
										className="UserDropDowns_icon_06"
										width="22"
										height="22"
										viewBox="0 0 24 24"
										stroke="#2F3337"
										fill="#2F3337">
										<title>User</title>
										<path
											d="M1 23c0-5.523 4.477-10 10-10h2c5.523 0 10 4.477 10 10M12 13a6 6 0 100-12 6 6 0 000 12z"
											stroke="inherit"
											fill="none"
											strokeWidth="2"
											strokeMiterlimit="10"
											strokeLinecap="round"
											strokeLinejoin="round"></path>
									</svg>
								</div>
								<p style={{ marginTop: "12px" }}>Account</p>
							</Link>
							{dropdownLogin && (
								<div id="drop_login">
									{dropLoginData.map((e) => (
										<div key={e.id}>
											<h3
												style={{
													padding: "8px",
													fontWeight: "bold",
													fontSize: "25px",
												}}>
												{!isAuth && (
													<Link to={e.loginButton.to}>
														<button className="loginButton">
															{e.loginButton.title}
														</button>
													</Link>
												)}
												{isAuth && (
													<button
														onClick={() => {
															localStorage.removeItem("userToken");
															window.location.reload();
														}}
														className="logoutButton">
														{e.logoutButton.title}
													</button>
												)}
												{!isAuth && (
													<Link to={e.registerButton.to}>
														<button className="registerButton">
															{e.registerButton.title}
														</button>
													</Link>
												)}
											</h3>
											<div>
												{e.loginMenu.map((el) => (
													<div key={el.id}>
														<p id="logoMenu">
															<Link
																to={el.to}
																style={{
																	textDecoration: "none",
																	color: "black",
																}}>
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
					</div>
				</div>
			</div>
		</div>
	);
}
