import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDteqsxqZ65JqAcdDKcSAHAGpjF2dQc2IY",
    authDomain: "discord-clone-f3053.firebaseapp.com",
    databaseURL: "https://discord-clone-f3053.firebaseio.com",
    projectId: "discord-clone-f3053",
    storageBucket: "discord-clone-f3053.appspot.com",
    messagingSenderId: "928503429613",
    appId: "1:928503429613:web:dde7c77ae0ea5285024fe4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;