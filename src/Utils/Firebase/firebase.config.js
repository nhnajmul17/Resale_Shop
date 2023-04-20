import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const dotenv = re("dotenv").config()

const firebaseConfig = {
    apiKey: "AIzaSyA3voXdTZSR52YtsqmiBkB7PftTj-q4DTk",
    authDomain: "resale-shop-01.firebaseapp.com",
    projectId: "resale-shop-01",
    storageBucket: "resale-shop-01.appspot.com",
    messagingSenderId: "539705388399",
    appId: "1:539705388399:web:28c9f29173b42b3ec30c9a"
    //     apiKey: process.env.REACT_APP_apiKey,
    //     authDomain: process.env.REACT_APP_authDomain,
    //     projectId: process.env.REACT_APP_projectId,
    //     storageBucket: process.env.REACT_APP_storageBucket,
    //     messagingSenderId: process.env.REACT_APP_messagingSenderId,
    //     appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);