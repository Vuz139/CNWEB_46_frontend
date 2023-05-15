import './home.css';
import { useState } from 'react';
import React from 'react';
function Home() {
    const [currentPage, setCurrentPage] = useState(1);

  // Hàm xử lý sự kiện khi chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Dữ liệu các item trong grid
  const gridData = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    // ...
  ];

  // Số item hiển thị trên mỗi trang
  const itemsPerPage = 12;

  // Tính toán chỉ số bắt đầu và chỉ số kết thúc của các item trong trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Lấy các item trong trang hiện tại
  const currentPageItems = gridData.slice(startIndex, endIndex);
    return (
        <div className="gird_contain">
            <div className="menu">
                day la menu
            </div>

            <div className="main">
                <div className="item">1</div>
                <div className="item">2</div>
                <div className="item">3</div>
                <div className="item">4</div>
                <div className="item">5</div>
                <div className="item">6</div>
                <div className="item">7</div>
                <div className="item">8</div>
                <div className="item">9</div>
                <div className="item">10</div>
                <div className="item">11</div>
                <div className="item">12</div>
                {/* {currentPage.map(
                    (item) => {
                        return (
                            <div className='item'>

                            </div>
                        )
                    }
                )} */}
                {/* Hiển thị chuyển trang */}
                <div className="pagination">
                    <button className='chuyen_trang'
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Pre
                    </button>
                    <span>{currentPage}</span>
                    <button className='chuyen_trang'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={endIndex >= gridData.length}
                    >
                        Next
                    </button>
                </div>
            </div>

        </div>
    )


}
export default Home