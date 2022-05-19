import { Router } from "express";

import CreateAccountWithInitialBalanceController from "./modules/account/postEvent/PostEventController";
import GetBalanceForNonExistingAccountController from "./modules/account/getBalance/GetBalanceController";
import ResetStateController from "./modules/account/resetState/ResetStateController";

const routes = Router()

export default routes
    .post('/reset', ResetStateController.handle)
    .post('/event', CreateAccountWithInitialBalanceController.handle)
    .get('/balance', GetBalanceForNonExistingAccountController.handle)