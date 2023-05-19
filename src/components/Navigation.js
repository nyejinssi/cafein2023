import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => <nav>
    <ul>
        <li><Link to="/"> 홈페이지 </Link></li>
        <li><Link to="/Profile" >로 그 아 웃</Link></li>
        <li><Link to="/ReView"> 리 뷰 </Link></li>
        <li><Link to="/PopupPostCode"> 우 편 번 호 </Link></li>
        <li><Link to="/UserInfo">ㅇㄴㅁㅇ</Link></li>
        <li><Link to="/ModalPage">우편번호 api 활용 modal</Link></li>
    </ul>
</nav>;

export default Navigation;
