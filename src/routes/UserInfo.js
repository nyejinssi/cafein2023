import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";

const UserInfo = () => {
    const [username, setUsername] = useState("");
    const [userphonenumber, setUserPhonenumber] = useState("");
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
                    <input type="text" maxlength={5} placeholder='우편번호'/> <input type="submit" value="검색" /><br/>
                    <input type="text" maxlength={30} placeholder='도로명주소'/><br/>
                    <input type="text" maxLength={30} placeholder='상세주소'/><br/>
                    <input type = "submit" value = " 저 장 "/>
                </tr>
            </form>
        </div>
    );  
    
};

export default UserInfo;