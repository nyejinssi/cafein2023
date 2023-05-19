import React from 'react';
import {authService} from '../fbase';
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import ReView from '../routes/ReView';
import PopupPostCode from 'routes/PopupPostCode';
import UserInfo from 'routes/UserInfo';
import ModalPage from 'routes/ModalPage';

const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/" element ={<Home userObj={userObj}/>} />
                    <Route exact path="/profile" element ={<Profile/>}/>
                    <Route exact path="/ReView" element ={<ReView/>}/>
                    <Route exact path="/PopupPostCode" element ={<PopupPostCode/>}/>
                    <Route exact path="/UserInfo" element ={<UserInfo/>}/>
                    <Route exact path="/ModalPage" element ={<ModalPage/>}/>
                </> 
                ): (
                    <Route exact path="/" element ={<Auth/>}/>            
                )}
            </Routes>
        </BrowserRouter>
        )
}
export default AppRouter;