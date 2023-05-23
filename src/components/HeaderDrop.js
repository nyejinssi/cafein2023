import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { authService } from 'fbase';
import Main from '../Main';

// 헤더 --- 드롭다운, 로그인, 샵 이동 버튼
const HeaderDrop = () => {  
    const navigate = useNavigate();
    const onChange = (e) => {
        e.preventDefault();
        authService.signOut();
        navigate('/Main');
    };

    return(
    <nav>
        <>
            <div>
                <div> <b>My CafeIn</b>
                    <a></a>
                </div>
                <li><a href="#"><Link to="/Cart">장바구니</Link></a></li>
                </div>
                <li><a href="#"><Link to="/Like">찜한 상품</Link></a></li>
                <li><a href="#"><Link to="/Cart">관심 상품</Link></a></li>
                <div class="submenu_review">
                    <li><a href="#"><Link to="/MyReview">리뷰 관리</Link></a></li>
                    <li><a href="#"><Link to="/MyReview">작성 가능한 리뷰</Link></a></li>
                    <li><a href="#"><Link to="/ReView">내가 작성한 리뷰</Link></a></li>
                <li><a href="#"><Link to="/ReAuth">계정 관리</Link></a></li>
                <li><a href="#"><button type="submit" value="로그아웃" ></button></a></li>
            </div>
       </>
    </nav>
    );
};

export default HeaderDrop;