import React from 'react';
import {authService} from '../fbase';
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import ReView from '../routes/ReView';
import UserInfo from '../routes/UserInfo';
import ModalPage from '../routes/ModalPage';
import MNprofile from '../routes/MNprofile';
import MNreview from '../routes/MNprofile';
import Logout from '../routes/Logout';
import PWchange from '../routes/PWchange';
import Like from '../routes/Like';
import MyReview from 'routes/MyReview';
import WebHeader from './Webheader';
const AppRouter = ({isLoggedIn, userObj}) => {
    return (
        <BrowserRouter>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/Home" element = {<Home/>} />
                    <Route exact path="/Like" element ={<Like/>}/>
                    <Route exact path='/Logout' element={<Logout/>}/>
                    <Route exact path='/MNreview' element={<MNreview/>}/>
                    <Route exact path='/MyReview' element={<MyReview/>}/>
                    <Route exact path="/ReView" element ={<ReView/>}/>
                    <Route exact path="/UserInfo" element ={<UserInfo/>}/>
                    <Route exact path='/MNprofile' element={<MNprofile/>}/>
                </> 
                ): (
                    <Route exact path="/" element ={<Auth/>}/>            
                )}
            </Routes>
        </BrowserRouter>
        )
}
export default AppRouter;