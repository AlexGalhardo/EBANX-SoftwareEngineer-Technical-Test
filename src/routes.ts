import { Router } from "express";

import GetBalanceController from "./modules/account/getBalance/GetBalanceController";
import PostEventController from "./modules/account/postEvent/PostEventController";
import ResetStateController from "./modules/account/resetState/ResetStateController";

export default Router()
    .post("/reset", ResetStateController.handle)
    .post("/event", PostEventController.handle)
    .get("/balance", GetBalanceController.handle);
