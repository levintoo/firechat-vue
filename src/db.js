import firebase from 'firebase/compat/app';
import "firebase/compat/database";

const config = {
    apiKey: "AIzaSyApYlmx2zU90khhCP-gtq__kNhCX353YgU",
    authDomain: "firechat-vue-4d879.firebaseapp.com",
    projectId: "firechat-vue-4d879",
    storageBucket: "firechat-vue-4d879.appspot.com",
    messagingSenderId: "444614631981",
    appId: "1:444614631981:web:69579347555868b2fa8ea4"
}

const db = firebase.initializeApp(config);
export default db;