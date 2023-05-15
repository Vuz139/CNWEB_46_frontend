import React from "react";
import './style.css';
import { Link } from "react-router-dom";



function Login() {
	return (
		// <div>
		// 	<h1>Login</h1>
		// </div>
	    <section className="w3l-hotair-form">
		  <h1>Report Login Form</h1>
		  <div className="container">
			<div className="workinghny-form-grid">
			  <div className="main-hotair">
				<div className="content-wthree">
				  <h2>Log In</h2>
				  <form action="#" method="post">
					<input
					  type="text"
					  className="text"
					  name="text"
					  placeholder="User Name"
					  required
					  autoFocus
					/>
					<input
					  type="password"
					  className="password"
					  name="password"
					  placeholder="User Password"
					  required
					  autoFocus
					/>
					<button className="btn" type="submit">
					  Log In
					</button>
				  </form>
				  <p className="account">
					Don't have an account? <Link to="/signup">Register</Link>
				  </p>
				</div>
				<div className="w3l_form align-self">
				  <div className="left_grid_info">
					<img
					  src="./sign.png"
					  alt=""
					  className="img-fluid"
					/>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  {/* <div className="copyright">
			<p className="copy-footer-29">
			  © 2021 Report Login Form. All rights reserved | Design by{" "}
			  <a href="#">W3layouts</a>
			</p>
		  </div> */}
		</section>
  
	)
};

export default Login;

