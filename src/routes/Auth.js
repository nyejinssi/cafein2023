import React, { useState } from 'react';
import { authService } from '../fbase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true); 
    const [error, setError] = useState(""); 

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        }   else if(name === "password"){
            setPassword(value);
        }
    };

    const onSubmit = (event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount){
                data = authService.createUserWithEmailAndPassword(authService, email, password);
            } else {
                data = authService.signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data);
        } catch(error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);

    const onSocialClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if (name === "google"){
            provider = new GoogleAuthProvider();
        }
        const data = await signInWithPopup(authService, provider);
        console.log(data);        
    };

    return (
            <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder="Email" required value = {email} onChange={onChange}/><br></br>
                <input name="password" type="password" placeholder="Password" required value = {password} onChange={onChange} /><br></br>
                <input type="submit" value={newAccount ? "Sign Up" : "Sign In"} /><br></br>
                {error}
            </form>
    <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Sign Up"}</span>
            <div>
                <button onClick = {onSocialClick} name = "google"> 구글로 회원가입 </button>
            </div>
        </div> ) }


export default Auth; 
