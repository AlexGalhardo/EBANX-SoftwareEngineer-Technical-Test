"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const constants_1 = require("./shared/constants");
const app = (0, express_1.default)();
app.use(express_1.default.json())
    .use(routes_1.default)
    .use((error, request, response, next) => {
    if (error instanceof Error) {
        return response.status(constants_1.HTTP_STATUS_CODE_BAD_REQUEST).json({
            message: error.message,
        });
    }
    return response.status(constants_1.HTTP_STATUS_CODE_INTERNAL_SERVER_ERROR).json({
        status: "error",
        message: "Internal Server Error",
    });
});
exports.default = app;
