/* Types */
import { Request, Response } from "express";
import StatusCode from "../ts/enums/statuscodes";

/* Utils */
import errorUtils from "../utils/error.utils"
const { errorHandler } = errorUtils; 

const notFound = (req: Request, res: Response, next: any) => {
    return res.status(StatusCode.NOT_FOUND).json(errorHandler(
        "404: Page Not Found :(",
        StatusCode.NOT_FOUND,
        "Path doesn't exist"
    ))
}

export default notFound;