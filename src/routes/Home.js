import { dbService } from 'fbase';
import React, { useState } from 'react';
import { getFirestore, addDoc, collection } from "firebase/firestore";

const Home = () => {
    const [userreview, setUserreview] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            const docRef = await addDoc(collection(dbService, "userreviews"), {
                userreview,
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
                    placeholder = "write reviews" 
                    maxLength = {120} 
                    onChange = {onChange} 
                />
                <input type = "submit" value = "저장"/>
            </form>
        </div>
    );
};
export default Home;
