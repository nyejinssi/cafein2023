import React from 'react';
import { Link } from "react-router-dom";

// 헤더 --- 드롭다운, 로그인, 샵 이동 버튼
const WebHeader = () => <nav>
        <>
            <div class="header">
                <div> <img src="../logo_2.png"/> </div>
                <span> Cafe인 </span>
            </div>
            <ul> <li><Link to ="/Home">Shop</Link></li>
                <li><Link to ="/Auth">Login</Link></li> {/* 추후 수정 예정 */}
                </ul>
             <div> <img src="../logo_2.png"/> </div> {/* 여기 그 이미지 들어가야하나,,? */}
             <div> 
                <li><Link to="/Auth"> 로그인 / 회원가입 </Link></li>
             </div>
        </>
    </nav>;

export default WebHeader;