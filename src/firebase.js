import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDzbnPhSnVTq1n3b-sD6sS2wiqsXlp7dKo",
  authDomain: "clone-37683.firebaseapp.com",
  databaseURL: "https://clone-37683.firebaseio.com",
  projectId: "clone-37683",
  storageBucket: "clone-37683.appspot.com",
  messagingSenderId: "628893091785",
  appId: "1:628893091785:web:03127c10eec87bcb154a18",
  measurementId: "G-J1D9JBLY6R"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export {  auth };