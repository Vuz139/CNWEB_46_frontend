import React, { useState } from "react";
import AuthSidebar from "./AuthSidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const AuthLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="authContainer">
				<header
					style={{
						margin: "0 8px",
						padding: "4px",
						border: "1px solid #ccc",
					}}>
					<AuthSidebar />
				</header>
				<section
					style={{
						padding: "16px",
						overflowY: "auto",
						height: "77vh",
						zIndex: "1",
						border: "1px solid #ccc",
					}}>
					{children}
				</section>
			</div>
			<Footer />
		</>
	);
};

export default AuthLayout;
