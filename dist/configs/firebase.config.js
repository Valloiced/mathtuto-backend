"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
const { FIREBASE_API_KEY, FIREBASE_APP_ID } = process.env;
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "mathtuto-708ed.firebaseapp.com",
    projectId: "mathtuto-708ed",
    storageBucket: "mathtuto-708ed.appspot.com",
    messagingSenderId: "464313574732",
    appId: FIREBASE_APP_ID,
    measurementId: "G-WL7TZDPF3J"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, firestore_1.getFirestore)(app);
const auth = (0, auth_1.getAuth)(app);
let analytics;
try {
    analytics = (0, analytics_1.getAnalytics)(app);
}
catch (e) {
    console.log("Can't connect analytics: ", e);
}
exports.default = { auth, db, analytics };
