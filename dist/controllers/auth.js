"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Middlewares */
const error_1 = __importDefault(require("../middlewares/error"));
/* Enums */
const statuscodes_1 = __importDefault(require("../enums/statuscodes"));
/* Utils */
const utils_1 = require("../utils");
const { isAuthenticated, filterUserSession } = utils_1.AuthUtils;
exports.default = (firebaseAuthService) => {
    const handleCheckUser = (req, res) => {
        const user = firebaseAuthService.getCurrentUser();
        let data;
        if (user) {
            const tryFilterUserSession = filterUserSession(user);
            // Assign only data if there's no error
            data = tryFilterUserSession instanceof Error ? null : tryFilterUserSession;
        }
        else {
            data = null;
        }
        return res.json({
            "message": "OK",
            "authenticated": isAuthenticated(firebaseAuthService.auth),
            "data": data
        });
    };
    const handleSignUp = async (req, res) => {
        const { email, password } = req.body;
        if (isAuthenticated(firebaseAuthService.auth)) {
            return res.status(statuscodes_1.default.OK).json({
                message: "User already login",
                data: filterUserSession(firebaseAuthService.getCurrentUser())
            });
        }
        try {
            const userCredential = await firebaseAuthService.signUp(email, password);
            const user = userCredential.user;
            res.status(statuscodes_1.default.OK).json({
                "message": "OK",
                data: filterUserSession(user)
            });
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const handler = (0, error_1.default)("Failed signing up", statuscodes_1.default.BAD_REQUEST, errorMessage);
            console.error(`Error at handleSignUp: ${errorCode} - ${errorMessage}`);
            res.status(statuscodes_1.default.BAD_REQUEST).json(handler);
        }
    };
    const handleLogin = async (req, res) => {
        const { email, password } = req.body;
        if (isAuthenticated(firebaseAuthService.auth)) {
            return res.status(statuscodes_1.default.OK).json({
                message: "User already login",
                data: filterUserSession(firebaseAuthService.getCurrentUser())
            });
        }
        try {
            const userCredential = await firebaseAuthService.logIn(email, password);
            const user = userCredential.user;
            res.status(statuscodes_1.default.OK).json({
                "message": "OK",
                data: filterUserSession(user)
            });
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const handler = (0, error_1.default)("Failed to Login", statuscodes_1.default.BAD_REQUEST, errorMessage);
            console.error(`Error at handleLogin: ${errorCode} - ${errorMessage}`);
            res.status(statuscodes_1.default.BAD_REQUEST).json(handler);
        }
    };
    const handleSignOut = async (req, res) => {
        try {
            await firebaseAuthService.logOut();
            res.status(statuscodes_1.default.OK).json({
                message: "OK",
                data: { "signedOut": true }
            });
        }
        catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const handler = (0, error_1.default)("Failed to signed out", statuscodes_1.default.BAD_REQUEST, errorMessage);
            console.error(`Error at handleSignOut: ${errorCode} - ${errorMessage}`);
            res.status(statuscodes_1.default.BAD_REQUEST).json(handler);
        }
    };
    return {
        handleCheckUser,
        handleLogin,
        handleSignUp,
        handleSignOut
    };
};
