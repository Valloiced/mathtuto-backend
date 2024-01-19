/* Types */
import { Express } from "express"
import { Config } from "v1/ts/interfaces/config.interface";

/* Routes */
import Views from './views.route';
import Auth from './auth.route';

/* Env (Development purposes, callback at using 'api' if no endpoint provided) */
const { ROOT_ENDPOINT  = "api" } = process.env;

export default (app: Express, config: Config) => {
    Views(app);
    Auth(ROOT_ENDPOINT, app, config.Firebase())
}