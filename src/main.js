import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDP0GyW89rYZ5lIU7lE01ljAMDbEFgucWc",
    authDomain: "vue-auth-web.firebaseapp.com",
    projectId: "vue-auth-web",
    storageBucket: "vue-auth-web.appspot.com",
    messagingSenderId: "445561609764",
    appId: "1:445561609764:web:3307f6de5b081838db82b1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

createApp(App).use(router).mount('#app')
