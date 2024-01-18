"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Service */
const firebase_auth_1 = __importDefault(require("../services/firebase-auth"));
/* Controllers */
const auth_1 = __importDefault(require("../controllers/auth"));
// TODO: Turn on email enumeration protection
exports.default = (app, { auth }) => {
    const firebaseAuthService = new firebase_auth_1.default(auth);
    const { handleCheckUser, handleSignUp, handleLogin, handleSignOut } = (0, auth_1.default)(firebaseAuthService);
    /* Check user authentication status */
    app.get('/api/check-user', handleCheckUser); // TODO: Consider this to be middleware
    /* Sign the user up using email and password */
    app.post('/api/signup', handleSignUp);
    /* Log the user in using email and password */
    app.post('/api/login', handleLogin);
    /* Log the user out */
    app.post('/api/signout', handleSignOut);
};
