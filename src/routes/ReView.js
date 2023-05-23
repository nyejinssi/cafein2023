// 리뷰 페이지
import { dbService, authService, storageService } from 'fbase';
import React, { useEffect, useState, createRef } from 'react';
import { getFirestore,  addDoc, getDocs, collection, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import ReViewTmp from '../routes/ReViewTmp';
import {ref, uploadString, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid';

const ReView = () => {
    const [getDB, setGetDB] = useState([]);
    const [userreview, setUserreview] = useState("");
    const [userreviews, setUserreviews] = useState([]); 
    const [File, setFile] = useState("");
    const user = authService.currentUser;
    const navigate = useNavigate();
    const ReviewDone = () => { navigate('/Home');};
    
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

    const getReviews = async () => {
        const q = query(collection(dbService, "userReviews"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const userreviewfield = { ...doc.data(), id: doc.id };
            setGetDB(prev => userreviewfield);});
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        let FileURL ="";
        if(URL!= ""){
            const fileRef = ref(storageService, `${user.uid}/${v4()}`);
            const response = await uploadString(fileRef, 'data_url');
            const FileURL = await getDownloadURL(response.ref);
        }
        const content = {
            text: userreview,
            createdAt: Date.now(),
            creatorId: user.uid,
            FileURL: FileURL,
        }
        try {
            await addDoc(collection(dbService, "userReviews"), content);
            setUserreview("");
            console.log("Document written with ID: ", storageService.userReviews.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }         
    };

    const onChange = (event) => {
        const { target: {value} } = event; 
        setUserreview(value); 
    };

    const onFileChange = (event) => {
        const { target: {files} } = event;
        const myFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(myFile);
        reader.onloadend = (finished) => {
            const {currentTarget : {result}} = finished;
            setFile(result);
        };
    };

    const FileInput = React.createRef();
    const onClearFile = () => {
            setFile("");
            FileInput.current.value = null;}
    


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
                <input type = "file" ref={FileInput} accept = "image/*" onChange={onFileChange}/>
                <input type = "submit" value = "저장"/>
                {File && (
                    <div>
                        <img src = {File} width = "100px" height = "80px" />
                        <button onClick = {onClearFile}> X </button>
                    </div>
                    )}
            </form>

            <div>
                {userreviews.map((userreview) => (
                    <ReViewTmp key={userreview.id}/>
                ))}
            </div>
        </div>
    );
};

export default ReView;