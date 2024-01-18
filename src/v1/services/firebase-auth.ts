import { 
    Auth, 
    UserCredential, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";

class FirebaseAuthService {
    public auth: Auth;

    constructor(auth: Auth) {
        this.auth = auth;
    }

    public getCurrentUser() {
        return this.auth.currentUser;
    }

    public async signUp(email: string, password: string) : Promise<UserCredential> {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    public async logIn(email: string, password: string) : Promise<UserCredential> {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    public async logOut() : Promise<void> {
        return signOut(this.auth);
    }
}

export default FirebaseAuthService;