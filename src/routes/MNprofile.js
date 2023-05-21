import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PWchange from './PWchange';
import UserInfoChange from './UserInfoChange';

const MNprofile = () => {
    const navigate = useNavigate();
    const changeUserInfo = () => {
        navigate('/UserInfoChange');
      };
    const changePW = () => {
        navigate('/PWchange');};
    
    return (
         <div>
            계정 정보 <input type = "Submit" value="수정" onClick={changeUserInfo}/> <br/>
            비밀번호 <input type = "submit" value="변경" onClick={changePW}/>
        </div>
 );
};



export default MNprofile;