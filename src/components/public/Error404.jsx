import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
const Error404 = () => {
	return (
		<div className="error404Page">
			<div className="error404Page__bg"></div>
=======
import bg from "../../assets/images/page_not_found.webp";
const Error404 = () => {
	return (
		<div className="error404Page">
			<div className="error404Page__bg">
				<img src={bg} alt="Page not found" />
			</div>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
			<div className="error404Page__link">
				<Link to="">Back Home</Link>
			</div>
		</div>
	);
};

export default Error404;
