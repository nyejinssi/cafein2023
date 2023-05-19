import { dbService, authService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import ModalPage from './ModalPage';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const [username, setUsername] = useState("");
    const [userphonenumber, setUserPhonenumber] = useState("");
    const navigate = useNavigate();
    const changeAddress = () => {
        navigate('/ModalPage');
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userInfomation"), {
                name: username,
                text: userphonenumber,
                createdAt: Date.now(), });
            setUsername("");
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const onChange = (event) => {
        const { target: {name, value} } = event; 
        if (name === "usersname"){
            setUsername(value); 
        } else if (name === "usersphonenumber"){
            setUserPhonenumber(value);
        }
    };

    return(
        <div>
            <form onSubmit = {onSubmit}> 
                <tr>
                    <input value = {username} name= "usersname" type = "name" placeholder = " 이 름 " maxLength = {15} onChange = {onChange} required/> <br/>
                    <input value = {userphonenumber} name="usersphonenumber" type = "tel" placeholder = " 전 화 번 호 " maxLength = {11} onChange = {onChange} required /> <br/>
                </tr>
                <tr> 
                    <button onClick={changeAddress}> 주소지 변경 </button>
                    <input type = "submit" value = " 저 장 " onSubmit={onSubmit}/>
                </tr>
            </form>
        </div>
    );  
    
};

export default UserInfo;
