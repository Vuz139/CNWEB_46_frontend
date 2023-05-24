import './home.css';
import { useState } from 'react';
import React from 'react';
import OneProduct from './OneProduct';

import logo from './bg.jpg'

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const information = {
        // image:'https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/347628946_788957156083409_6973421327972198626_n.png?stp=dst-png_p843x403&_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=jy4P5EvwsN0AX-bw-Ow&_nc_ht=scontent.fhan14-4.fna&oh=00_AfD4GJXtP5gsDLa7L2kGni7I7PDCtGYJqA_O4gdlM279gw&oe=6469E86C',
        image:logo,
        nameProduct:'abcvasasd',
        costProduct: 1000,
        sell: 10002,
        rest : 10001,
        ratings : 4.5,
        description:"dddddddddddd dddddddd dddd ddddd sadksadks dksadkksdksdk álsaldldgl;á;;cxvbbbb bbbbbbbbbbbbbbbbbsafsa sdasdasdsadsffffsafasdasd   ssdasdas "
    } 

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

    // đây là để tạo ra 12 sản phẩm giống nhau để test
    const n = 12; // Số lần lặp lại
    const elements = [];

    for (let i = 0; i < n; i++) {
        elements.push(i);
    }

    return (
        <div className="gird_contain">
            <div className="menu">
                day la menu
            </div>

            <div className="main">
                {/* <div className="item">1</div>
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
                <div className="item">12</div> */}
                

                {
                    elements.map((id) =>(
                        <OneProduct className='item' key={id} information={information} >1</OneProduct>
                    ))
                }
                

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