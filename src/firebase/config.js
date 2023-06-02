import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCtOXhdkzNDiJQSAA9g5XRBvumo4MP6yj0",
    authDomain: "reactfire-auth-2021.firebaseapp.com",
    projectId: "reactfire-auth-2021",
    storageBucket: "reactfire-auth-2021.appspot.com",
    messagingSenderId: "1087305958599",
    appId: "1:1087305958599:web:f9407a91b40da8c3206ae2"
});

export default firebaseConfig;
