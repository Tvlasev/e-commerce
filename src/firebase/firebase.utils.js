import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAVCPeqSyEMguZS976_gj_EPD1xyoCbz20",
  authDomain: "clothes-db-64497.firebaseapp.com",
  databaseURL: "https://clothes-db-64497.firebaseio.com",
  projectId: "clothes-db-64497",
  storageBucket: "clothes-db-64497.appspot.com",
  messagingSenderId: "77270947615",
  appId: "1:77270947615:web:a22e73ec321a9d3976022a",
  measurementId: "G-00JBQC9CPP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;