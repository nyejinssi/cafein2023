import React, {useEffect, useState} from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Routes>
                {isLoggedIn ? (
                <>
                    <Route exact path="/" element ={<Home/>}/>
                    <Route exact path="/profile" element ={<Profile/>}/>
                </> 
                ): (
                    <Route exact path="/" element ={<Auth/>}/>
                )}
            </Routes>
        </Router>
        )
}

export default AppRouter;