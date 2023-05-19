import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li><Link to="/"> 홈페이지 </Link></li>
        <li><Link to="/ReView"> 리 뷰 </Link></li>
        <li><Link to="/UserInfo">사용자 정보 입력</Link></li>
        <li><Link to="/ModalPage">우편번호 api 활용 modal</Link></li>
    </ul>
</nav>;

export default Navigation;
