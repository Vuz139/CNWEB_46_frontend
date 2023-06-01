import React from "react";
import Button from "../Button";

<<<<<<< HEAD
const ProductRemoveModal = ({
	onClickHide,
	onRemove,
	title = "Bạn có chắc muốn xóa sản phẩm này chứ?",
}) => {
=======
const ProductRemoveModal = ({ onClickHide, onRemove }) => {
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
	return (
		<div className="product__remove__modal">
			<span onClick={onClickHide} class="close-button">
				&times;
			</span>
<<<<<<< HEAD
			<h2>{title} </h2>
			<Button
				title={"Xóa"}
				type="small"
				color="danger"
				onClick={onRemove}
			/>
			<Button
				type="small"
				color="primary"
				title={"Quay lại"}
				onClick={onClickHide}
			/>
=======
			<h2>Bạn có chắc muốn xóa sản phẩm này chứ? </h2>
			<Button title={"Delete"} type="danger" onClick={onRemove} />
			<Button title={"Cancel"} onClick={onClickHide} />
>>>>>>> a83f9c5a3bdc026c3d8ea7b98dbf32959904e62a
		</div>
	);
};

export default ProductRemoveModal;
