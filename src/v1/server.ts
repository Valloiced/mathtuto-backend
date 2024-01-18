import "dotenv/config";

import express, { Express, Request, Response } from "express";
import cors from 'cors';
import helmet from "helmet";

// Configs
import config from "./configs";

// Routes
import Routes from "./routes"; 

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.use(helmet());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Routes(app, config);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    console.log(`Server listening at PORT ${PORT}`)
})

