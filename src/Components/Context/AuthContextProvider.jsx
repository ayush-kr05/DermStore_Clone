import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
	const userToken = JSON.parse(localStorage.getItem("userToken")) || false;
	const [isAuth, setIsAuth] = useState(userToken);
	const handleAuth = (value) => {
		setIsAuth(value);
	};

	return (
		<AuthContext.Provider value={{ isAuth, handleAuth }}>
			{children}
		</AuthContext.Provider>
	);
}

