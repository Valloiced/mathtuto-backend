"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: THIS IS NOT A MIDDLEWARE BOI
const errorHandler = (message, status, error) => {
    return {
        "message": message,
        "status": status,
        "error": error
    };
};
exports.default = errorHandler;
