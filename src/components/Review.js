import { dbService } from "fbase";
import React from "react";
import { doc, deleteDoc } from "firebase/firestore";

const onDelete = async({reviewObj}) => {
    let messageDelete = window.confirm("정말 삭제하시겠습니까?");
    const ReviewTextRef = doc(dbService, "userReviews", `${reviewObj.id}`);
    if(messageDelete){
        await deleteDoc(ReviewTextRef);
    }
};

export default onDelete;

