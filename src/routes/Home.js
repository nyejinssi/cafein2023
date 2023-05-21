import { dbService, authService  } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

// 마이페이지 메인화면
const Home = () => { 
    const [review, setReview] = useState([]);

    const getReview = async() => {
        const reviewData = await getDocs(collection(dbService, "userReviews"));
        //setReview(reviewData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(reviewData);
    };

    useEffect(() => {
        getReview();
    }
    , []);

    return (
        <div>
            {review.map((reviewData) => (
                <div>
                    <h4>{reviewData.text}</h4>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            ))}
        </div>  
    )
};

export default Home;