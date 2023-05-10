import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query } from "firebase/firestore";

const ReView = () => {
    const [userreview, setUserreview] = useState("");
    const [userreviews, setUserreviews] = useState([]);

    const getReviews = async () => {
        const dbreviews = query(collection(dbService, "reviews"));
        const querySnapshot = await getDocs(dbreviews);
        querySnapshot.forEach((doc) => {
            const reviewObject = {
                ...doc.data(),
                id: doc.id,
            };
            setUserreviews((prev) => [reviewObject, ...prev]);
            });
    };

    useEffect(() => {
        getReviews();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userreviews"), {
                text: userreview,
                createdAt: Date.now(),
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
                    <div key={userreview.id} >
                        <h4>{userreview.userreview}</h4>
                    </div> ))}
            </div>
        </div>
    );
};

export default ReView;
