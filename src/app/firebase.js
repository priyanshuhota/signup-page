import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtv75A9PpjQvsFzMdpUrpbN1Bw0_pcpJA",
    authDomain: "lo-go-7ba51.firebaseapp.com",
    projectId: "lo-go-7ba51",
    storageBucket: "lo-go-7ba51.appspot.com",
    messagingSenderId: "613162133689",
    appId: "1:613162133689:web:6a6489892fa9a95f96d368",
    measurementId: "G-RZ8KYPPWP3"
});

// const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth};

