import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/auth/all_signup/Signup";
import Login from "./pages/auth/all_login/Login";
import Me from "./pages/auth/all_me/Me";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import { Provider } from "react-redux";
import { store } from "./redux/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<App />
								<Footer />{" "}
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								<Header />
								<Login />
								<Footer />{" "}
							</>
						}
					/>
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/product"
						element={
							<>
								<Header />
								<Product />
								<Footer />
							</>
						}
					/>
					<Route path="/me" element={<Me />} />
					<Route
						path="/cart"
						element={
							<>
								<Header />
								<ShoppingCart />
								<Footer />
							</>
						}
					/>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
