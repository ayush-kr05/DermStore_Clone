import { Route, Routes } from "react-router-dom";
import { Middle } from "./Components/Middle";
import { second_extra } from "./Components/slider";
import { Login } from "./Components/SignUp&Login/Login";
import { SignUp } from "./Components/SignUp&Login/SignUp";
function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Middle slides={second_extra} />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
		</div>
	);
}

export default App;
