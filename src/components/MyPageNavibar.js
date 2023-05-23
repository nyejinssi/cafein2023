import React from "react";
import { Link } from "react-router-dom";

const MyPageNavibar = () => {<nav>
        <>
            <ul>
                <li><Link to="/ProductCart">장바구니</Link></li>
                <li><Link to="/Like"> 찜한 상품 </Link></li>
                <li><Link to="/ShopList">주문목록</Link></li>
                <li><Link to="/MNreview">리뷰관리</Link></li>
                <li><Link to="/MNreview">작성가능한 리뷰</Link></li>
                <li><Link to="/MyReview">내가 작성한 리뷰</Link></li>
                <li><Link to="/MNprofile">계정 관리</Link></li>
            </ul>
        </>
    </nav> 
};

export default MyPageNavibar;
