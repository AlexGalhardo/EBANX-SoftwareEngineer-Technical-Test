import { Router } from "express";

import CreateAccountWithInitialBalanceController from "./modules/account/createAccountWithInitialBalance/CreateAccountWithInitialBalanceController";
import ResetStateController from "./modules/account/resetState/ResetStateController";

const routes = Router()

export default routes
    .post('/reset', ResetStateController.handle)
    .post('/event', CreateAccountWithInitialBalanceController.handle)
    // .get('')
    // .get('')