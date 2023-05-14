import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function Signup () {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // do something with formData, like send to server
  };

  return (
    <section className="w3l-form-36">
      <div className="form-36-mian section-gap">
        <div className="wrapper">
          <div className="form-inner-cont">
            <h3>Create your account</h3>
            <form onSubmit={handleSubmit} className="signin-form">
              <div className="form-input">
                <span className="fa fa-user-o" aria-hidden="true"></span>{" "}
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <span className="fa fa-envelope-o" aria-hidden="true"></span>{" "}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <span className="fa fa-key" aria-hidden="true"></span>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-input">
                <span className="fa fa-key" aria-hidden="true"></span>{" "}
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="login-remember d-grid">
                <label className="check-remaind">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  <p className="remember">Remember me</p>
                </label>
                <button type="submit" className="btn theme-button">
                  Signup
                </button>
              </div>
            </form>
            <div className="social-icons">
              <p className="continue">
                <span>Or</span>
              </p>
              <div className="social-login">
                <a href="#facebook">
                  <div className="facebook">
                    <span className="fa fa-facebook" aria-hidden="true">Fb</span>
                  </div>
                </a>
                <a href="#google">
                  <div className="google">
                    <span className="fa fa-google-plus" aria-hidden="true">G</span>
                  </div>
                </a>
              </div>
            </div>
            <p className="signup">
              Already a member?{" "}
              <Link to="/login" className="signuplink">
                Login
              </Link>
            </p>
          </div>

          {/* <div className="copy-right">
            <p>
              © 2020 Stock Signup Form. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com/" target="_blank">
                W3Layouts
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Signup;