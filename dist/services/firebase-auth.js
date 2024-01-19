"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
class FirebaseAuthService {
    constructor(auth) {
        this.auth = auth;
    }
    getCurrentUser() {
        return this.auth.currentUser;
    }
    getAuth() {
        return this.auth;
    }
    async signUp(email, password) {
        return (0, auth_1.createUserWithEmailAndPassword)(this.auth, email, password);
    }
    async logIn(email, password) {
        return (0, auth_1.signInWithEmailAndPassword)(this.auth, email, password);
    }
    async logOut() {
        return (0, auth_1.signOut)(this.auth);
    }
}
exports.default = FirebaseAuthService;
