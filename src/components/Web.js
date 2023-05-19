import Header from './components/Header';
import Home from './components/Home';
import React, {useEffect, useState} from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import App from './components/Router';
import {authService} from '../fbase';

function Web() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = "/" element={<Home />}></Route>
                <Route path = "/App" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Web;
