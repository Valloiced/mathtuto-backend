"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
const initializeFirebase = () => {
    try {
        /* firebase env */
        const { FIREBASE_API_KEY, FIREBASE_APP_ID } = process.env;
        const firebaseConfig = {
            apiKey: FIREBASE_API_KEY,
            appId: FIREBASE_APP_ID,
            authDomain: "mathtuto-708ed.firebaseapp.com",
            projectId: "mathtuto-708ed",
            storageBucket: "mathtuto-708ed.appspot.com",
            messagingSenderId: "464313574732",
            measurementId: "G-WL7TZDPF3J"
        };
        // Initialize Firebase
        const firebase = (0, app_1.initializeApp)(firebaseConfig);
        const db = (0, firestore_1.getFirestore)(firebase);
        const auth = (0, auth_1.getAuth)(firebase);
        let analytics;
        // try {
        //     analytics = getAnalytics(app);
        // } catch(e) {
        //     console.log("Can't connect analytics: ", e)
        // }
        return { firebase, auth, db, analytics };
    }
    catch (error) {
        console.error("Failed to initialize Firebase", error);
        throw new Error(error);
    }
};
exports.default = initializeFirebase;
