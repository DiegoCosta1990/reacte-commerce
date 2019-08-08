import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCwVyvKrDvMQmlSpeh6I9cna3U9xguk_UY",
    authDomain: "ecommercedb-3cf32.firebaseapp.com",
    databaseURL: "https://ecommercedb-3cf32.firebaseio.com",
    projectId: "ecommercedb-3cf32",
    storageBucket: "",
    messagingSenderId: "256494861348",
    appId: "1:256494861348:web:4df98c59a5440e26"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
