
// Firebase config
var firebaseConfig = {
    apiKey: "AIzaSyD7GJAwoB_mXTHeXpSP5n3OrUCe8v_3YlI",
    authDomain: "zackfinance-hub.firebaseapp.com",
    projectId: "zackfinance-hub",
    storageBucket: "zackfinance-hub.firebasestorage.app",
    messagingSenderId: "855025662852",
    appId: "1:855025662852:web:a1951b145ba167eeecbbd1",
    measurementId: "G-EXGXL15PYV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
