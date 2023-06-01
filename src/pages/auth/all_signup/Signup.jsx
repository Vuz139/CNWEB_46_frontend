import React, { useState } from "react";
import "./style.css";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
import { createUser } from "../../../requests/users.request";
import Button from "../../../components/Button";
function SignUp() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
<<<<<<< HEAD
	const navigate = useNavigate();
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
	const [avatar, setAvatar] = useState(null);

	const [loading, setLoading] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (formData.password != formData.confirmPassword) {
<<<<<<< HEAD
			alert("Mật khẩu không trùng khớp");
=======
			alert("Password do not match with confirm password");
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
			return;
		}
		formData.role = "user";
		try {
			setLoading(true);

			const result = await createUser(formData, avatar && avatar[0]);

			console.log(result);
			if (result.success) {
<<<<<<< HEAD
				alert("Tạo tài khoản thành công");
=======
				alert("User created successfully");
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
				setFormData({
					name: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
				setAvatar(null);
<<<<<<< HEAD
				navigate("/login");
=======
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
			}
		} catch (error) {
			console.log(error);
			alert(error.errMessage || "Đăng ký không thành công");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w3l-form-36">
			<div className="form-36-mian section-gap">
				<div className="wrapper">
					<div className="form-inner-cont">
						<h3>Create your account</h3>
						<form onSubmit={handleSubmit} className="signin-form">
							<div className="form-input">
								<span
									className="fa fa-user-o"
									aria-hidden="true"></span>{" "}
								<input
									type="text"
									name="name"
									placeholder="Username"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-input">
								<span
									className="fa fa-envelope-o"
									aria-hidden="true"></span>{" "}
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
								<span
									className="fa fa-key"
									aria-hidden="true"></span>
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
								<span
									className="fa fa-key"
									aria-hidden="true"></span>{" "}
								<input
									type="password"
									name="confirmPassword"
									placeholder="Confirm Password"
									value={formData.confirmPassword}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-input">
								<span className="fa fa-key" aria-hidden="false">
									Avatar
								</span>{" "}
								<input
									type="file"
									onChange={(e) => {
										setAvatar(e.target.files);
									}}
									placeholder="Avatar"
								/>
							</div>

							<div className="login-remember d-grid">
								<Button
									onClick={(e) => handleSubmit(e)}
									title={"Sign Up"}
									loading={loading}
								/>
							</div>
						</form>

						<p className="signup">
							Already a member?{" "}
							<Link to="/login" className="signuplink">
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SignUp;
