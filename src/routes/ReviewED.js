import { getFirestore, addDoc, doc, updateDoc, deleteDoc, getDocs, collection, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import { dbService, authService, storageService } from "fbase";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { deleteObject, ref, uploadString, getDownloadURL } from "firebase/storage";
import MyReview from '../routes/MyReview'
import { v4 as uuidv4 } from 'uuid';

const ReviewED = ({reviewObj, isOwner}) => {
    const user = authService.currentUser;
    const [editing, setEditing] = useState(false);
    const [newReview, setNewReview] = useState(reviewObj.text);
    const [attachment, setAttachment] = useState("");

    const onDeleteClick = async () => {
        const ok = window.confirm("삭제하시겠습니까?");
        if (ok) {
            await deleteDoc(doc(dbService, `userReviews/${reviewObj.id}`));
            if(reviewObj.attachmentURL !== "") {
                await deleteDoc(doc(dbService, reviewObj.attachmentURL));
            }
        }
    };

    const toggleEditing = () => setEditing((prev) => !prev);

    const onChange = (event) => { 
        const { target: {value} } = event; 
        setNewReview(value); 
        console.log(setNewReview(value));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentURL = "";
        if (attachment !== ""){
            const attachmentRef = ref(storageService, `${user.uid}/${uuidv4()}`);
            const response = await uploadString(attachmentRef, attachment, 'data_url');
            attachmentURL = await getDownloadURL(response.ref);
        }

        const updateContent = {
            text: newReview,
            reviewimage: attachmentURL
        };

        await updateDoc(doc(dbService, `userReviews/${reviewObj.id}`), updateContent);
        setEditing(false); 
        setAttachment("");
    };

    const onFileChange = (event) => {  // 사진 미리보기 만들기
        const { target: {files} } = event; 
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent)  => {
            const {
                currentTarget: {result}
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    };

    const onClearAttachment = () => { 
        setAttachment("");
    };

    return (
        <div>
            {editing ? (
                <> 
                <form onSubmit={onSubmit}> 
                    <input onChange={onChange} value={newReview} required/> 
                    <input type="file" accept="image/*" onChange={onFileChange}/>
                    <input type="submit" value="변경하기"></input>
                    <button onClick={toggleEditing}>취소</button>
                    {attachment && (
                        <div>
                            <img src={attachment} width="50px" height="40px" />
                            <button onClick={onClearAttachment}>X</button>
                        </div> 
                    )} 
                 </form>
                </>
            ) : (
                <> 
                    <h4>{reviewObj.text}</h4>
                    {reviewObj.reviewimage && (
                        <img src={reviewObj.reviewimage} width="200px" height="150px" /> )}
                    {isOwner && (
                        <> 
                            <button onClick={onDeleteClick}>X</button>
                            <button onClick={toggleEditing}>수정</button>
                        </>
                    )}
                </>
            )}
        </div>
    ); 
};

export default ReviewED;