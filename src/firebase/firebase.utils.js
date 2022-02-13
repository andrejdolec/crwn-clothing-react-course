import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDkXxEijn7_al4Y-MJrLZ1OoA4sJYto6uI",
    authDomain: "crwn-db-a94c3.firebaseapp.com",
    projectId: "crwn-db-a94c3",
    storageBucket: "crwn-db-a94c3.appspot.com",
    messagingSenderId: "134665412989",
    appId: "1:134665412989:web:f3a8f139278e0b5f606c14",
    measurementId: "G-YSV5L8MFDR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;