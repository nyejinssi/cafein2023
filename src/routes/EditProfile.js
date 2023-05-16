import React from "react";

// The user object has basic properties such as display name, email, etc.
let UserName = user.username;
let email = user.email;
let userphonenumber = user.userphonenumber;
let uid = user.uid;
const EditProfile = () => {
    const ChangeUserName = (event) => {
        const { target: {value} } = event;
        UserName = value;
    };
    const ChangeUserPhoneNumber = (event) => {
        const { target: {value} } = event;
        userphonenumber = value;
    };
    const ChangeEmail = (event) => {
        const { target: {value} } = event;
        email = value;
    };
    const ChangePassword = (event) => {
        if (password !== password2) {
            setError("비밀번호가 일치하지 않습니다.");
            return;
        } else {
        const { target: {value} } = event;
        password = value;}
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(dbService, "userInfomation"), {
                name: username,
                text: userphonenumber,
                createdAt: Date.now(), });
            setUsername("");
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
};
export default EditProfile;