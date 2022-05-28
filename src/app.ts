import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import routes from "./routes";
import { HTTP_STATUS_CODE_BAD_REQUEST, HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR } from "./shared/constants";

const app = express();

app.use(express.json())
    .use(routes)
    .use((error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof Error) {
            return response.status(HTTP_STATUS_CODE_BAD_REQUEST).json({
                message: error.message,
            });
        }
        return response.status(HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR).json({
            status: "error",
            message: "Internal Server Error",
        });
    });

export default app;
