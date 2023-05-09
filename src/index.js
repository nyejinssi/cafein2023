import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

console.log(firebase);

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
