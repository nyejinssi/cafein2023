import React, {useState } from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom';
import AppRouter from 'components/Router';
import fbase from "fbase";
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); // [변수, 함수] = useState(초기값)
  return 
      <Router isLoggedIn={isLoggedIn}/>;
}

export default App;