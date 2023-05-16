import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../pages/auth/all_signup/Signup";
import Login from "../pages/auth/all_login/Login";
import Me from "../pages/auth/all_me/Me";
import Header from "../components/Header";
import Footer from "../components/Footer";

import ShoppingCart from "../pages/ShoppingCart";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import ListProducts from "../pages/ListProducts";
import Error404 from "../components/public/Error404";
import Error403 from "../components/public/Error403";

const ProtectedRoute = ({ children, roles }) => {
	const user = useSelector((state) => state.user);
	console.log(">>>Check user: ", roles);

	if (user) {
		if (roles && !roles.includes(user.role))
			return <Navigate to="/40" replace />;
		return children;
	}

	return <Navigate to="/login" replace />;
};

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/*" element={<Error404 />} />
			<Route path="/403*" element={<Error403 />} />

			<Route
				path="/"
				element={
					<>
						<Header />
						<Home />
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
						<ListProducts />
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
	);
};

export default AppRoutes;
