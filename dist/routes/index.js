"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Routes */
const views_route_1 = __importDefault(require("./views.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
/* Env (Development purposes, callback at using 'api' if no endpoint provided) */
const { ROOT_ENDPOINT = "api" } = process.env;
exports.default = (app, config) => {
    (0, views_route_1.default)(app);
    (0, auth_route_1.default)(ROOT_ENDPOINT, app, config.Firebase());
};
