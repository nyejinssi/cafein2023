import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li><Link to="/UserInfoChange"> 회원정보 변경 </Link></li>
        <li><Link to="/UserInfo"> 회원정보 </Link></li>
        <li><Link to="/NewReView"> 리뷰 작성페이지 </Link></li>
        <li><Link to="/MyReview"> 리뷰 a </Link></li>
    </ul>
</nav>;

export default Navigation;
