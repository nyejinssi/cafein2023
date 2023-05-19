import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom';
import AppRouter from 'components/Router';
import {authService} from '../fbase';
import ModalPage from 'routes/ModalPage';

const root = createRoot(document.getElementById('root'));

function App() {  
  return ( <div className="App"> <ModalPage /> </div>  );
}

export default App;
