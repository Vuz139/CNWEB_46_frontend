import React from "react";
import Button from "../Button";

const ProductRemoveModal = ({
	onClickHide,
	onRemove,
	title = "Bạn có chắc muốn xóa sản phẩm này chứ?",
}) => {
	return (
		<div className="product__remove__modal">
			<span onClick={onClickHide} class="close-button">
				&times;
			</span>
			<h2>{title} </h2>
			<Button
				small={true}
				title={"Delete"}
				type="danger"
				onClick={onRemove}
			/>
			<Button small={true} title={"Cancel"} onClick={onClickHide} />
		</div>
	);
};

export default ProductRemoveModal;
