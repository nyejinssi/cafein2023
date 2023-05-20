import { dbService, authService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import ModalPage from 'routes/ModalPage';
import Home from 'routes/Home';

const UserInfo = () => {
    const user = authService.currentUser;
    const [username, setUsername] = useState("");
    const [userphonenumber, setUserPhonenumber] = useState("");
    const [userInfomation, setUserInfo] = useState([]);
    const navigate = useNavigate();
    const InputDone = () => { navigate('/ModalPage');};    
    useEffect(() => {
            const q = query(collection(dbService, "userInfomation"));
            onSnapshot(q, (snapshot) => {
                const UserInfoArray = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id, 
                }));
            setUserInfo(UserInfoArray);
            });
        }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userInfomation"), {
                name: username,
                number: userphonenumber,
                createrId : user.uid,
                createdAt: Date.now(), });
            setUsername("");
            setUserPhonenumber("");
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
                    <input value = {username} name= "usersname" type = "name" placeholder = " 이 름 " maxLength = {15} onChange = {onChange} required/> <br/>
                    <input value = {userphonenumber} name="usersphonenumber" type = "tel" placeholder = " 전 화 번 호 " maxLength = {11} onChange = {onChange} required /> <br/>
                    <input type = "submit" value = " 다음 " onClick={InputDone}required/><br/>
            </form>
        </div>
    );  
    
};

export default UserInfo;
