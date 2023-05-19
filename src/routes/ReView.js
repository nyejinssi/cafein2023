import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { authService } from '../fbase';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";

const ReView = () => {
    const [userreview, setUserreview] = useState("");
    const [userreviews, setUserreviews] = useState([]); 
    const user = authService().currentUser;

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
                createdAt: serverTimestamp(),
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
                <input type = "submit" value = "저장"/>
            </form>

            <div>
                {userreviews.map((userreview) => (
                    <div key = {userreview.uid}>
                        <h4> {userreview.text} </h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReView;