import { Request, Response } from 'express';

/* Services */
import FirebaseAuthService from 'v1/services/firebase-auth';

/* Middlewares */
import errorHandler from '../middlewares/error';

/* Enums */
import StatusCode from '../enums/statuscodes';

/* Interfaces */
import { UserSession } from 'v1/interfaces/user';

/* Utils */
import { AuthUtils } from '../utils';
const { isAuthenticated, filterUserSession } = AuthUtils;

export default (firebaseAuthService: FirebaseAuthService) => {

    const handleCheckUser = (req: Request, res: Response) => {
        const user = firebaseAuthService.getCurrentUser();
        
        let data: UserSession | null;
        
        if(user) {
            const tryFilterUserSession = filterUserSession(user);

            // Assign only data if there's no error
            data = tryFilterUserSession instanceof Error ? null : tryFilterUserSession;
        } else {
            data = null
        }

        return res.json({
            "message": "OK",
            "authenticated": isAuthenticated(firebaseAuthService.auth),
            "data": data
        })
    }
    
    const handleSignUp = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        
        if(isAuthenticated(firebaseAuthService.auth)) {
            return res.status(StatusCode.OK).json({
                message: "User already login",
                data: filterUserSession(firebaseAuthService.getCurrentUser())
            })
        }

        try {
            const userCredential = await firebaseAuthService.signUp(email, password);
            
            const user = userCredential.user;

            res.status(StatusCode.OK).json({
                "message": "OK",
                data: filterUserSession(user)
            });

        } catch(error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const handler = errorHandler(
                "Failed signing up", 
                StatusCode.BAD_REQUEST, 
                errorMessage
            )

            console.error(`Error at handleSignUp: ${errorCode} - ${errorMessage}`);
            res.status(StatusCode.BAD_REQUEST).json(handler);
        }
    }
    
    const handleLogin = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if(isAuthenticated(firebaseAuthService.auth)) {
            return res.status(StatusCode.OK).json({
                message: "User already login",
                data: filterUserSession(firebaseAuthService.getCurrentUser())
            })
        }

        try {
            const userCredential = await firebaseAuthService.logIn(email, password);

            const user = userCredential.user;

            res.status(StatusCode.OK).json({
                "message": "OK",
                data: filterUserSession(user)
            });

        } catch(error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const handler = errorHandler(
                "Failed to Login", 
                StatusCode.BAD_REQUEST, 
                errorMessage
            )

            console.error(`Error at handleLogin: ${errorCode} - ${errorMessage}`);
            res.status(StatusCode.BAD_REQUEST).json(handler);
        }
    }
    
    const handleSignOut = async (req: Request, res: Response) => {
        try{
            await firebaseAuthService.logOut();

            res.status(StatusCode.OK).json({
                message: "OK",
                data: { "signedOut": true }
            })

        } catch(error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            const handler = errorHandler(
                "Failed to signed out", 
                StatusCode.BAD_REQUEST, 
                errorMessage
            )

            console.error(`Error at handleSignOut: ${errorCode} - ${errorMessage}`);
            res.status(StatusCode.BAD_REQUEST).json(handler);
        }
    }

    return {
        handleCheckUser,
        handleLogin,
        handleSignUp,
        handleSignOut
    }
}