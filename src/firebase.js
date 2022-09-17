import firebase from 'firebase/compat/app';
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCef3oOFW-SPY5PAthAV65bAGYTgJkRlJA",
  authDomain: "green-community-22a96.firebaseapp.com",
  projectId: "green-community-22a96",
  storageBucket: "green-community-22a96.appspot.com",
  messagingSenderId: "669575674109",
  appId: "1:669575674109:web:a2f8e80d7963ea40a1a694"
};

const app = firebase.initializeApp(firebaseConfig);

export const storage = app.storage();
export default app;