import { Express } from "express"
import { Config } from "v1/interfaces/config";

import Views from './views';
import Auth from './auth';

export default (app: Express, config: Config) => {
    Views(app);
    Auth(app, config.Firebase);
}