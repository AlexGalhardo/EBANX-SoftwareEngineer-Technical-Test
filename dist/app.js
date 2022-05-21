"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((error, request, response, next) => {
    if (error instanceof Error) {
        return response.status(400).json({
            message: error.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    });
});
exports.default = app;
