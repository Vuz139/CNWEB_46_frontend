import React from "react";
import Button from "../Button";

const ProductRemoveModal = ({ onClickHide, onRemove }) => {
	return (
		<div className="product__remove__modal">
			<span onClick={onClickHide} class="close-button">
				&times;
			</span>
			<h2>Bạn có chắc muốn xóa sản phẩm này chứ? </h2>
			<Button title={"Delete"} type="danger" onClick={onRemove} />
			<Button title={"Cancel"} onClick={onClickHide} />
		</div>
	);
};

export default ProductRemoveModal;
