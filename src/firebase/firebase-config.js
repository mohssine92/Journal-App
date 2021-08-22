import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// configuracion para conectar a firebase 241
var firebaseConfig = {
    apiKey: "AIzaSyDW6GF81Fzc3J5on0LIxgj2q2xlKg6WhlA",
    authDomain: "react-courses-dce01.firebaseapp.com",
    projectId: "react-courses-dce01",
    storageBucket: "react-courses-dce01.appspot.com",
    messagingSenderId: "124878535006",
    appId: "1:124878535006:web:df6fa3c926ebbe690ab7cf"
};

// Initialize Firebase  con la configuracion ofrecida por firebase
firebase.initializeApp( firebaseConfig );



// prepara para grabar iformacion - refrencia a mi db para poder grabar
const db = firebase.firestore();


// lo que veremos : es lo mismo para autenticar con twiter o githun (usando firebase) etcc 241
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db, // esta la ref a la base de datos 
    googleAuthProvider,
    firebase
}