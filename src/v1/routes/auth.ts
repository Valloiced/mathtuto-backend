/* Types */
import { Express } from 'express';
import { FirebaseConfig } from 'v1/interfaces/config';

/* Service */
import FirebaseAuthService from '../services/firebase-auth';

/* Controllers */
import authControllers from '../controllers/auth';

// TODO: Turn on email enumeration protection
export default (app: Express, { auth }: FirebaseConfig) : void => {

    const firebaseAuthService = new FirebaseAuthService(auth);

    const { 
        handleCheckUser, 
        handleSignUp, 
        handleLogin, 
        handleSignOut 
    } = authControllers(firebaseAuthService);

    
    /* Check user authentication status */
    app.get('/api/check-user', handleCheckUser); // TODO: Consider this to be middleware

    /* Sign the user up using email and password */
    app.post('/api/signup', handleSignUp);

    /* Log the user in using email and password */
    app.post('/api/login', handleLogin);

    /* Log the user out */
    app.post('/api/signout', handleSignOut);
}