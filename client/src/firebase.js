import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNrL8ZY2e8YiVeC3xXD7bxtdjv2_elvr8",
  authDomain: "jiosaavn-77aaf.firebaseapp.com",
  projectId: "jiosaavn-77aaf",
  storageBucket: "jiosaavn-77aaf.appspot.com",
  messagingSenderId: "112983356655",
  appId: "1:112983356655:web:329e1bbd8b594ba10bd71a",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
