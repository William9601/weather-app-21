// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
});
const firebaseConfig = {
  apiKey: 'AIzaSyBoDKn9B9Wm2RjL8bIYLveBjZIxWLhmZeY',
  authDomain: 'weather-app21.firebaseapp.com',
  projectId: 'weather-app21',
  storageBucket: 'weather-app21.appspot.com',
  messagingSenderId: '1036376187918',
  appId: '1:1036376187918:web:c640886582c3724eb8c85f',
};

REACT_APP_FIREBASE_KEY = AIzaSyBoDKn9B9Wm2RjL8bIYLveBjZIxWLhmZeY;
REACT_APP_FIREBASE_DOMAIN = weather - app21.firebaseapp.com;
REACT_APP_FIREBASE_PROJECT_ID = weather - app21;
REACT_APP_FIREBASE_STORAGE_BUCKET = weather - app21.appspot.com;
REACT_APP_FIREBASE_SENDER_ID = 1036376187918;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
