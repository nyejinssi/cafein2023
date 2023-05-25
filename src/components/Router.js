import React from 'react';
import {authService} from '../fbase';
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import UserInfoChange from "../routes/UserInfoChange";
import Auth from "../routes/Auth";
import UserInfo from "../routes/UserInfo";
import ReView from "../routes/ReView";

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/UserInfoChange/*" element = {<UserInfoChange/>} />
                    <Route exact path="/UserInfo/*" element ={<UserInfo/>}/>
                    <Route exact path="/ReView" element ={<ReView/>}/>
                </> 
                ): (
                    <Route exact path="/Auth/*" element ={<Auth/>}/>            
                )}
            </Routes>
        </BrowserRouter>
        )
}
export default AppRouter;