/* Types */
import { User, Auth } from "firebase/auth";
import { UserSession } from "../ts/interfaces/user.interface";
import { AuthUtils } from "../ts/interfaces/utils.interface";

const isAuthenticated = (auth: Auth) : boolean => {
    const user = auth.currentUser;

    return Boolean(user);
}

const filterUserSession = (user: User | any) : UserSession | Error => {
    try {
        const { uid, email, stsTokenManager } = user;
    
        return { 
            uid: uid,
            email: email,
            accessToken: stsTokenManager.accessToken ?? "",
            refreshToken: stsTokenManager.refreshToken ?? ""
        };

    } catch(error: any ) {
        console.error(error);
        return new Error(error);
    }
}

export default { isAuthenticated, filterUserSession } as AuthUtils ;