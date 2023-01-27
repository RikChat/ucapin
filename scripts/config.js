const firebaseConfig = {
  apiKey: "AIzaSyAm8T4Wal5Uc5_sAogtHQ58YJFGy9E8nDc",
    authDomain: "rikcapin-719f0.firebaseapp.com",
    projectId: "rikcapin-719f0",
    storageBucket: "rikcapin-719f0.appspot.com",
    messagingSenderId: "269005947789",
    appId: "1:269005947789:web:a3039bf3274e9402bbb3c4",
    measurementId: "G-9Q6BSKZMG2"
  };
const app = firebase.initializeApp(firebaseConfig);
const rdb = firebase.database();
const auth = firebase.auth();
const stg = firebase.storage();
