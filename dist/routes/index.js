"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const views_1 = __importDefault(require("./views"));
const auth_1 = __importDefault(require("./auth"));
exports.default = (app, config) => {
    (0, views_1.default)(app);
    (0, auth_1.default)(app, config.Firebase);
};
