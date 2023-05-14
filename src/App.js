import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
// import Product from "./pages/Product";
// import Login from "./pages/auth/Login";
// import ShoppingCart from "./pages/ShoppingCart";

// import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function App() {
	const [isDidLogin, setIsDidLogin] = useState(false);
	return (
		<div>
			{/* <Header /> */}
			<Outlet />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
