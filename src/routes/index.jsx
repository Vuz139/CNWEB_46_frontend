import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

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
import AuthLayout from "../layouts/auth/AuthLayout";
import ProductWrapper from "../components/products/ProductWrapper";
import SignUp from "../pages/auth/all_signup/Signup";
import ListOrder from "../pages/orders/ListOrder";

const ProtectedRoute = ({ children, roles }) => {
	const user = useSelector((state) => state.user);
	console.log(">>>Check user: ", roles);

	if (user) {
		if (roles && !roles.includes(user.role))
			return <Navigate to="/401" replace />;
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
						<Footer />
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
			<Route path="/signup" element={<SignUp />} />
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
			<Route
				path="/admin"
				element={
					<AuthLayout>
						<Outlet />
					</AuthLayout>
				}>
				<Route path="orders" element={<ListOrder />} />
				<Route path="products" element={<ProductWrapper />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
