import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { Analytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";

export interface FirebaseConfig {
    firebase: FirebaseApp;
    auth: Auth;
    db: Firestore;
    analytics?: Analytics | undefined;
}

// Scalable
export interface Config {
    Firebase: () => FirebaseConfig
}