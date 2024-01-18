import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { Analytics } from "firebase/analytics";

export interface FirebaseConfig {
    auth: Auth;
    db: Firestore;
    analytics?: Analytics | undefined;
}

// Scalable
export interface Config {
    Firebase: FirebaseConfig
}