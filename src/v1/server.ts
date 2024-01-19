import * as dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import helmet from "helmet";

dotenv.config();

// Middlewares
import notFound from "./middlewares/not-found";

// Configs
import config from "./configs";

// Routes
import routes from "./routes"; 

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

/* Security */
app.use(helmet());

/* I might use this for connecting frontend to backend */
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app, config);

app.use(notFound)

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    console.log(`Server listening at PORT ${PORT}`)
})

