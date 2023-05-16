import React from "react";
import AuthSidebar from "./AuthSidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const AuthLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="authContainer">
				<header>
					<AuthSidebar />
				</header>
				<section>{children}</section>
			</div>
			<Footer />
		</>
	);
};

export default AuthLayout;
