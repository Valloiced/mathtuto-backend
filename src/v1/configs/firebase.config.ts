import { FirebaseApp, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore } from "firebase/firestore";
import { Auth, getAuth } from 'firebase/auth';

/* types */
import { FirebaseConfig } from "../ts/interfaces/config.interface";


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
        const firebase: FirebaseApp = initializeApp(firebaseConfig);
        const db: Firestore = getFirestore(firebase);
        const auth: Auth = getAuth(firebase);
        
        let analytics: Analytics | undefined;
        // try {
        //     analytics = getAnalytics(app);
        // } catch(e) {
        //     console.log("Can't connect analytics: ", e)
        // }
    
        return { firebase, auth, db, analytics } as FirebaseConfig;
    } catch(error: any) {
        console.error("Failed to initialize Firebase", error);
        throw new Error(error);
    }
}

export default initializeFirebase;