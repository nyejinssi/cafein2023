// 리뷰 페이지
import { dbService, authService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import ReViewTmp from '../routes/ReViewTmp';

const ReView = () => {
    const [userreview, setUserreview] = useState("");
    const [userreviews, setUserreviews] = useState([]); 
    const [attachment, setAttachment] = useState("");
    const user = authService.currentUser;
    const navigate = useNavigate();
    const ReviewDone = () => { navigate('/Home');};
    
    useEffect(() => {
        const q = query(collection(dbService, "userReviews"));
        onSnapshot(q, (snapshot) => {
            const userreviewArray = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id, 
            }));
        setUserreviews(userreviewArray);
        });
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userReviews"), {
                text: userreview,
                createdAt: Date.now(),
                creatorId: user.uid,
            });
            setUserreview("");
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const onChange = (event) => {
        const { target: {value} } = event; 
        setUserreview(value); 
    };
    const onFileChange = (event) => {
        const { target: {files} } = event;
        const theFile = files[0];
        const reader = new FileReader();
        
        reader.onloadend = (finishedEvent) => {
            const {currentTarget: {result}} = finishedEvent;
            setAttachment(result);
        };

        reader.readAsDataURL(theFile);
    };
    const onClearAttachment = () => setAttachment("");

    return (
        <div>
            <form onSubmit = {onSubmit}> 
                <input 
                    value = {userreview} 
                    type = "text" 
                    placeholder = "당신의 솔직한 리뷰를 알려주세요 :)" 
                    maxLength = {120} 
                    onChange = {onChange} 
                /> <br/>
                <input type = "file" accept = "image/*" onChange={onFileChange}/>
                <input type = "submit" value = "저장"/>
                {attachment && (
                    <div>
                        <img src = {attachment} width = "100px" height = "80px" />
                        <button onClick = {onClearAttachment}>X</button>
                    </div>
                    )}
            </form>
            <div>
                {userreviews.map((userreview) => (
                    <ReViewTmp key={userreview.id} userreviewObj={userreview} isOwner={userreview.creatorId === user.uid}/>
                ))}
            </div>
        </div>
    );
};

export default ReView;