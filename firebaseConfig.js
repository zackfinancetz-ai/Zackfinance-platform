// Firebase config (your keys)
const firebaseConfig = {
  apiKey: "AIzaSyD7GJAwoB_mXTHeXpSP5n3OrUCe8v_3YlI",
  authDomain: "zackfinance-hub.firebaseapp.com",
  projectId: "zackfinance-hub",
  storageBucket: "zackfinance-hub.firebasestorage.app",
  messagingSenderId: "855025662852",
  appId: "1:855025662852:web:a1951b145ba167eeecbbd1",
  measurementId: "G-EXGXL15PYV"
};
function initFirebase(){
  if(!firebase.apps.length){ firebase.initializeApp(firebaseConfig); }
  return firebase;
}
