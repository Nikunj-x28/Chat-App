import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './configs/firebase.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
    const userString = JSON.stringify(user, (key, value) => {
      if (value === undefined) {
        return null;
      }
      return value;
    });
    localStorage.setItem('user', userString);
  } else {
    console.log('User is signed out');
    localStorage.removeItem('user');
  }
});

export const data = { auth };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
