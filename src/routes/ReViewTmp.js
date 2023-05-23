// 게시글 삭제, 수정
import { deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { dbService, authService, storageService } from "fbase";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ReviewTmp = () => {
    const user = authService.currentUser;
    const reviewObj = [];
    reviewObj = dbService.userReviews;

    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(dbService.userReviews.text);

    const onDeleteClick = async () => {
        const ok = window.confirm("정말로 삭제하시겠습니까?");
        if (ok) {
            await deleteDoc(doc(dbService, `userReviews/${reviewObj.id}`));
        }
    };
    
    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewReview(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(doc(dbService, `userReviews/${reviewObj.id}`), {
            text: newReview,
        });
        setEditing(false);
    };

    return (
        <div>
        {editing ? (
            <> <form onSubmit={onSubmit}> 
                    <input onChange={onChange} value={newReview} required/> 
                    <input type="submit" value="저 장" /> </form>
                <button onClick={toggleEditing}>취 소</button>
            </>
        ) : (
            <> <h4>{reviewObj.text}</h4>
                {(user.id === reviewObj.creatorId) && (
                    <> 
                        <button onClick={onDeleteClick}> 삭 제</button>
                        <button onClick={toggleEditing}> 수 정</button>
                    </>
                )}
            </>
        )}
        </div>
    );
    };

export default ReviewTmp;