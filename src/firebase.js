import * as firebase from "firebase";
import "firebase/database";

 

let config = {
    apiKey: "AIzaSyAp-La0rqtOPTlMZmanhFBGJrxOFdZ2UVs",
    authDomain: "lein-firebase.firebaseapp.com",
    databaseURL: "https://lein-firebase-default-rtdb.firebaseio.com",
    projectId: "lein-firebase",
    storageBucket: "lein-firebase.appspot.com",
    messagingSenderId: "10810088448",
    appId: "1:10810088448:web:6c3e75ce7dfdd4661a8ce5",
    measurementId: "G-HVPCNK94GK"
};

firebase.initializeApp(config);

export default firebase.database();

