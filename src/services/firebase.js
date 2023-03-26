import firebase from "firebase";
import "firebase/app"
import "firebase/performance";
import "firebase/storage";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCNHWpbyzVfrJo9SZ-8eDk-ner4CXgWfz8",
    authDomain: "posts-blog-eb9ba.firebaseapp.com",
    databaseURL: "https://posts-blog-eb9ba-default-rtdb.firebaseio.com",
    projectId: "posts-blog-eb9ba",
    storageBucket: "posts-blog-eb9ba.appspot.com",
    messagingSenderId: "447267486895",
    appId: "1:447267486895:web:68f380e3aff8a1210be85a",
    measurementId: "G-STVY927S23"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.performance();
firebase.storage();

export default firebaseApp;
