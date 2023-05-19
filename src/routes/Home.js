import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { authService } from 'fbase';

const Home = () => {
    const [userreview, setUserreview] = useState("");
    const [getDB, setgetDB] = useState([]);
    const user = authService.currentUser;

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userreviews"), {
                content: userreview,
                created: Date.now() });
            setUserreview("");
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    const getReviews = async() => {
        const q = query(collection(dbService, "userreviews"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const reviewfield = {
                ...doc.data(),
                id: doc.id,
                user: user,
            }
            setgetDB((prev) => [...prev, reviewfield]);
        });
    };

    const onChange = (event) => {
        const { target: {value} } = event; 
        setUserreview(value); 
    };

    useEffect(() => {
        const q = query(collection(dbService, "userreviews"));
        onSnapshot(q, (querySnapshot) => {
            const reviewArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),}));
            setgetDB(reviewArray);
        });
    }, []);

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
        </div>
    );
};

export default Home;