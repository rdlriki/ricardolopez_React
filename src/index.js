import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfwhUCmbT9bJ3Muq0ENELqOEtyy2AzkIk",
  authDomain: "pruebapiguarte.firebaseapp.com",
  projectId: "pruebapiguarte",
  storageBucket: "pruebapiguarte.appspot.com",
  messagingSenderId: "676651161084",
  appId: "1:676651161084:web:61f4048fab5fee65b2ce79"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
    