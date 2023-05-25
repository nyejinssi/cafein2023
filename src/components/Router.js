import React from 'react';
import {authService} from '../fbase';
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import UserInfoChange from "../routes/UserInfoChange";
import Auth from "../routes/Auth";
import UserInfo from "../routes/UserInfo";
import NewReview from "../routes/NewReview";
import MyReview from "../routes/MyReview";

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/UserInfoChange/*" element = {<UserInfoChange/>} />
                    <Route exact path="/UserInfo/*" element ={<UserInfo/>}/>
                    <Route exact path="/NewReview" element ={<NewReview/>}/>
                    <Route exact path="/MyReview" element ={<MyReview/>}/>
                </> 
                ): (
                    <Route exact path="/Auth/*" element ={<Auth/>}/>            
                )}
            </Routes>
        </BrowserRouter>
        )
}
export default AppRouter;