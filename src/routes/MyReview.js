import { dbService, authService  } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, doc, deleteDoc, addDoc, getDocs, collection, query, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const MyReview = () => {
    // const [review, setReview] = useState([]);
    // const [newReview, setNewReview] = useState("");
    // const navigate = useNavigate();    
    // const ReviewDone = () => { navigate('/Home');};

    // const getReview = async() => {
    //     reviews = await getDocs(collection(dbService, "userReviews"));
    //     setReview(reviews.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // }; 

    // useEffect(() => {
    //     getReview();
    // }, []);

    // const onDeleteClick = () => {
    //     const ok = window.confirm("정말로 삭제하시겠습니까?");
    //     if (ok) {
    //         deleteDoc(doc(dbService, `userReviews/${review.id}`));
    //     }
    // };

    // const onEdictClick = () => {
    //     const ok = window.confirm("정말로 수정하시겠습니까?");
    //     if (ok) {
    //         updateDoc(doc(dbService, `userReviews/${review.id}`));
    //     }
    // };

    // return (
    //     <div>
    //         {reviews.map((review) => (
    //             <div>
    //                 {review.creatorId === authService.currentUser.uid && (
    //                     <>
    //                         <h4>{review.text}</h4>
    //                         <button onClick={onDeleteClick} > 삭 제 </button>
    //                         <button onClick={onEdictClick} > 수 정 </button> 
    //                      </>
    //                 )}
    //             </div>
    //         ))}
    //     </div>   
    // )
}

export default MyReview;
