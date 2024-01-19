import { Response, Request } from "express";
import FirebaseAuthService from "../../services/firebase-auth";
import FirestoreService from "../../services/firebase-firestore";

// First time using typescript and it already giving me headaches
export interface AuthControllers {
    handleCheckUser: (req: Request, res: Response) => Response
    handleLogin: (req: Request, res: Response) => Promise<Response | undefined>
    handleSignUp:(req: Request, res: Response) => Promise<Response | undefined>
    handleSignOut: (req: Request, res: Response) => Promise<Response | undefined>
}

export interface Controllers {
    authController: (firebaseAuthService: FirebaseAuthService, firestoreService: FirestoreService) => AuthControllers
}