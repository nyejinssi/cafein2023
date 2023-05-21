import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li><Link to="/Home"> 홈페이지 </Link></li>
        <li><Link to="/Like"> 찜한 상품 </Link></li>
        <li><Link to="/Logout"> 로그아웃 </Link></li>
        <li><Link to="/MNreview"> 리뷰 관리 </Link></li>
        <li><Link to="MyReview">내가 쓴 리뷰</Link></li>
        <li><Link to="/ReView"> 리뷰 쓰기 </Link></li>
        <li><Link to="/UserInfo"> 사용자 정보 입력 </Link></li>
        <li><Link to="/MNprofile"> 계정 정보 수정 </Link></li>
        <li><Link to="/Auth">로그인/회원가입</Link></li>

    </ul>
</nav>;

export default Navigation;
