import React from 'react';
import { Link } from "react-router-dom";

// 헤더 --- 드롭다운, 로그인, 샵 이동 버튼
const WebHeader = () => {  <nav>
        <>
            <div class="header">
                <div> <img src="../logo_2.png"/> </div>
                <span> Cafe인 </span>
                <span>
            <ul> <li><Link to ="/Home">Shop</Link></li>
                <li><Link to ="/Auth">Login</Link></li> {/* 추후 수정 예정 */}
            </ul>
        </span>

        <div> 
            <button type="button" id="img_btn"><img src="../logo_2.jpg"/></button>
            <div>
                <div> <b>My CafeIn</b>
                    <a></a>
                </div>
                <a href="#"><Link to="/Cart">장바구니</Link></a>
                </div>
                <a href="#"><Link to="/Like">찜한 상품</Link></a>
                <a href="#"><Link to="/Cart">관심 상품</Link></a>
                <div class="submenu_review">
                    <a href="#"><Link to="/MyReview">리뷰 관리</Link></a>
                    <a href="#"><Link to="/MyReview">작성 가능한 리뷰</Link></a>
                    <a href="#"><Link to="/ReView">내가 작성한 리뷰</Link></a>
                <a href="#"><Link to="/ReAuth">계정 관리</Link></a>
            </div>
        </div>
        <div class="guest">guest1 님 </div> {/*추후 변경 예정 */}
    </div>
    </>
    </nav>
};

export default WebHeader;