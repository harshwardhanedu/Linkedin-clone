import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// it was import firebase from "firebase" but to support v8 i added aditional this packages

const firebaseConfig = {
    apiKey: "AIzaSyCwZbgH0LaEIDs_iJVFjmih11TMuuNDUvU",
    authDomain: "linkedin-clone-53a18.firebaseapp.com",
    projectId: "linkedin-clone-53a18",
    storageBucket: "linkedin-clone-53a18.appspot.com",
    messagingSenderId: "115460586559",
    appId: "1:115460586559:web:5e91e516e1cc06673c4c8a"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); //connect 

  const auth = firebase.auth();

  const provider =  new firebase.auth.GoogleAuthProvider();

  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;
