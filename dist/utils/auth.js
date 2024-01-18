"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isAuthenticated = (auth) => {
    const user = auth.currentUser;
    return Boolean(user);
};
const filterUserSession = (user) => {
    try {
        const { uid, email, stsTokenManager } = user;
        return {
            uid: uid,
            email: email,
            accessToken: stsTokenManager.accessToken ?? "",
            refreshToken: stsTokenManager.refreshToken ?? ""
        };
    }
    catch (error) {
        console.error(error);
        return new Error(error);
    }
};
exports.default = { isAuthenticated, filterUserSession };
