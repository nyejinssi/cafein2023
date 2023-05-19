import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const root = document.getElementById('root');
const modalroot = document.getElementById('modal-root');
ReactDOM.createRoot(modalroot).render(<App/>);