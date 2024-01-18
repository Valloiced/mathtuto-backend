import { Auth, User } from "firebase/auth";
import { UserSession } from "./user";

export interface AuthUtils {
    isAuthenticated: (auth: Auth) => boolean,
    filterUserSession: (user: User | any ) => UserSession | Error
}