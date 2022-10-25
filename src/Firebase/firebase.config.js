// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB3ycrG3O1SAiMZNw8xGb2Ax4AvExuEl34",
    authDomain: "dragon-news-426d7.firebaseapp.com",
    projectId: "dragon-news-426d7",
    storageBucket: "dragon-news-426d7.appspot.com",
    messagingSenderId: "61494443991",
    appId: "1:61494443991:web:fc43acfd63f10dfe9ed592"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;