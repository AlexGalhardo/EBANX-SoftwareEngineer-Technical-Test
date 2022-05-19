import { Router } from "express";

import CreateAccountWithInitialBalanceController from "./modules/account/createAccountWithInitialBalance/CreateAccountWithInitialBalanceController";
import GetBalanceForNonExistingAccountController from "./modules/account/getBalanceForNonExistingAccount/GetBalanceForNonExistingAccountController";
import ResetStateController from "./modules/account/resetState/ResetStateController";

const routes = Router()

export default routes
    .post('/reset', ResetStateController.handle)
    .post('/event', CreateAccountWithInitialBalanceController.handle)
    .get('/balance', GetBalanceForNonExistingAccountController.handle)
    // .get('')