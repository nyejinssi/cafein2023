import React, {useEffect, useState} from 'react';
import {authService} from '../fbase';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import UserInfo from '../routes/UserInfo';

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/" element ={<Home/>}/>
                    <Route exact path="/profile" element ={<Profile/>}/>
                    <Route exact path="/UserInfo" element ={<UserInfo/>}/>
                </> 
                ): (
                    <Route exact path="/" element ={<Auth/>}/>                    
                )}
            </Routes>
        </Router>
        )
}

export default AppRouter;