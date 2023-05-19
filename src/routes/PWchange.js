import React, { useState } from 'react';
import { authService } from '../fbase';
import { getAuth, updatePassword, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const PWchange = () => {
    const auth = authService();
    const user = auth.currentUser;
    const newPassword = getASecureRandomPassword();    
    updatePassword(user, newPassword).then(() => {
        // Update successful.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
};