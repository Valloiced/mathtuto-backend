import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from 'firebase/auth';
import { FirebaseConfig } from "v1/interfaces/config";

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
const app: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);

let analytics: Analytics | undefined;
try {
    analytics = getAnalytics(app);
} catch(e) {
    console.log("Can't connect analytics: ", e)
}

export default { auth, db, analytics } as FirebaseConfig;