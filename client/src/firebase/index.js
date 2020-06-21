import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCSqvJCG_okE-ysaIKQ1rnHGYs3LkxBSuc",
    authDomain: "group7-df874.firebaseapp.com",
    databaseURL: "https://group7-df874.firebaseio.com",
    projectId: "group7-df874",
    storageBucket: "group7-df874.appspot.com",
    messagingSenderId: "213902355630",
    appId: "1:213902355630:web:ba0f4dd1c1ad42c98fd13f",
    measurementId: "G-J9F1EB5M43"
  };

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };