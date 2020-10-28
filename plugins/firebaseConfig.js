import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyA3A9LsIsz6ZLOYZL6BusVp-Anm-e_1zMw",
        authDomain: "firestore-5b0b4.firebaseapp.com",
        databaseURL: "https://firestore-5b0b4.firebaseio.com",
        projectId: "firestore-5b0b4",
        storageBucket: "firestore-5b0b4.appspot.com",
        messagingSenderId: "233900739551",
        appId: "1:233900739551:web:f711c135d35321796d126a",
        measurementId: "G-Y0WKEQXJ3W"
    };
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()