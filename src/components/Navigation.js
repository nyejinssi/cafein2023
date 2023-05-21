import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li><Link to="/"> 홈페이지 </Link></li>
        <li><Link to="/Like"> 찜한 상품 </Link></li>
        <li><Link to="/Logout"> 로그아웃 </Link></li>
        <li><Link to="/MNreview">리뷰</Link></li>
        <li><Link to="/useron">정보보기</Link></li>
        <li><Link to="/PWchange">비밀번호 변경</Link></li>
        <li><Link to="/UserInfo">사용자 정보 입력</Link></li>
        <li><Link to="/Auth">로그인/회원가입</Link></li>
    </ul>
</nav>;

export default Navigation;
