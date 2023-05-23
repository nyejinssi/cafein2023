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
import shop from '../routes/shop';
import ProductCart from 'routes/ProductCart';
import ShopList from 'routes/ShopList';

const MyPageRouter = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <>
                        <Route exact path="/ProductCart" element={<ProductCart/>}/>
                        <Route exact path="/Like/*" element ={<Like/>}/>
                        <Route exact path="/ShopList/*" element={<ShopList/>}/>
                        <Route exact path='/MNreview/*' element={<MNreview/>}/>
                        <Route exact path='/MyReview/*' element={<MyReview/>}/>
                        <Route exact path="/ReView/*" element ={<ReView/>}/>
                        <Route exact path='/MNprofile/*' element={<MNprofile/>}/>
                    </>       
            </Routes>
        </BrowserRouter>
        )
}
export default MyPageRouter;