import React, { useState } from "react";
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
				<section
					style={{
						padding: "16px",
						overflowY: "auto",
						height: "77vh",
						zIndex: "1",
					}}>
					{children}
				</section>
			</div>
			<Footer />
		</>
	);
};

export default AuthLayout;
