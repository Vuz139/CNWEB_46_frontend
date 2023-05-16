import "./home.css";
import "../components/products/product.css";
import { useState } from "react";
import React from "react";
import ProductWrapper from "../components/products/ProductWrapper";
import Sidebar from "../components/Sidebar";
function Home() {
	const [currentPage, setCurrentPage] = useState(1);

	// Hàm xử lý sự kiện khi chuyển trang
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	// Dữ liệu các item trong grid
	const gridData = [
		{ id: 1, content: "Item 1" },
		{ id: 2, content: "Item 2" },
		{ id: 3, content: "Item 3" },
	];

	// Số item hiển thị trên mỗi trang
	const itemsPerPage = 12;

	// Tính toán chỉ số bắt đầu và chỉ số kết thúc của các item trong trang hiện tại
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	// Lấy các item trong trang hiện tại
	const currentPageItems = gridData.slice(startIndex, endIndex);
	return (
		<div className="grid">
			<div className="grid__row">
				<div className="col-3 sm-0">
					<Sidebar />
				</div>
				<div className="col-9 sm-full">
					<ProductWrapper />

					<div className="pagination">
						<button
							className="chuyen_trang"
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}>
							Pre
						</button>
						<span>{currentPage}</span>
						<button
							className="chuyen_trang"
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={endIndex >= gridData.length}>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Home;
