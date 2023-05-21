import { dbService, authService  } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const MyReview = () => {
    const [review, setReview] = useState([]);

    const getReview = async() => {
        const reviewData = await getDocs(collection(dbService, "userReviews"));
        setReview(reviewData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }; 

    useEffect(() => {
        getReview();
    }, []);


    return (
        <div>
            {review.map((reviewData) => (
                <div>
                    {reviewData.creatorId === authService.currentUser.uid && (
                        <>
                            <h4>{reviewData.text}</h4>
                            <button> 삭 제 </button>
                            <button> 수 정 </button>
                        </>
                    )}
                </div>
            ))}
        </div>   
    )
}

export default MyReview;
