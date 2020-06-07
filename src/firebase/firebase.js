import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBviYY_lslMqxtBFetlGDSCQpjuo6ca8P0",
  authDomain: "crwn-db-97c01.firebaseapp.com",
  databaseURL: "https://crwn-db-97c01.firebaseio.com",
  projectId: "crwn-db-97c01",
  storageBucket: "crwn-db-97c01.appspot.com",
  messagingSenderId: "1072043103489",
  appId: "1:1072043103489:web:426675d261a5d674e7b700",
  measurementId: "G-NJ18R7GQSE",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
