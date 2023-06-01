import React from "react";
import { ImSpinner3 } from "react-icons/im";

const Button = ({
	loading = false,
	title,
	onClick,
<<<<<<< HEAD
	color = "primary",
	type = "primary",
	value = "",
=======
	type = "primary",
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
	children,
}) => {
	return (
		<button
<<<<<<< HEAD
			value={value}
			onClick={onClick}
			type="submit"
			className={`btn ${type} ${color} theme-button`}>
=======
			onClick={onClick}
			type="submit"
			className={`btn ${type} theme-button`}>
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
			{loading ? (
				<div className="loading__icon ">
					<span>
						<ImSpinner3 />
					</span>
				</div>
			) : (
				title || children
			)}
		</button>
	);
};

export default Button;
