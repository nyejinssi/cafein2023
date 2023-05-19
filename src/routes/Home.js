import { dbService,authService  } from 'fbase';
import React, { useEffect, useState } from 'react';
import { getFirestore, addDoc, getDocs, collection, query, onSnapshot } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };
  return (
    <> <button onClick={onLogOutClick}> 로 그 아 웃 </button></>
  ); };

export default Home;