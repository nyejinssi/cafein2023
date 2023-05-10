import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li><Link to="/"> 홈페이지 </Link></li>
        <li><Link to="/profile"> 내 계정 </Link></li>
        <li><Link to="/UserInfo"> 유저 정보 저장</Link></li>
    </ul>
</nav>;

export default Navigation;
