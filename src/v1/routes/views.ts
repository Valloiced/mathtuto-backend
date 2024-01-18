import { Express, Request, Response } from "express"
import path from "path";

export default (app: Express) : void => {
    app.get('/', (req: Request, res: Response) => {
        res.sendFile(path.join(process.cwd(), '/views/index.html'))
    })
}