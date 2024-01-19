/* Types */
import { Express } from 'express';
import { FirebaseConfig } from '../ts/interfaces/config.interface';

/* Service */
import FirebaseAuthService from '../services/firebase-auth';
import FirestoreService from '../services/firebase-firestore';

/* Controllers */
import controllers from '../controllers';
const { authController } = controllers;

// TODO: Turn on email enumeration protection
export default (ROOT_ENDPOINT: string, app: Express, { auth, db }: FirebaseConfig) : void => {

    const firebaseAuthService = new FirebaseAuthService(auth);
    const firestoreService = new FirestoreService(db);

    const { 
        handleCheckUser, 
        handleSignUp, 
        handleLogin, 
        handleSignOut 
    } = authController(firebaseAuthService, firestoreService);

    
    /* Check user authentication status */
    app.get(`/${ROOT_ENDPOINT}/check-user`, handleCheckUser); // TODO: Consider this to be middleware

    /* Sign the user up using email and password */
    app.post(`/${ROOT_ENDPOINT}/signup`, handleSignUp);

    /* Log the user in using email and password */
    app.post(`/${ROOT_ENDPOINT}/login`, handleLogin);

    /* Log the user out */
    app.post(`/${ROOT_ENDPOINT}/signout`, handleSignOut);
}