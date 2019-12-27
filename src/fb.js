import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAx0QoJkeMdGGze1Qwzt35qtc8vU6BwoCc",
    authDomain: "veutify-netn.firebaseapp.com",
    databaseURL: "https://veutify-netn.firebaseio.com",
    projectId: "veutify-netn",
    storageBucket: "veutify-netn.appspot.com",
    messagingSenderId: "566750178606",
    appId: "1:566750178606:web:f496a1c58f1411ca5adebf",
    measurementId: "G-4V25XQR88Z"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const db=firebase.firestore();
    //db.settings({timestampsInSnapshots:true});
    export default db;


  