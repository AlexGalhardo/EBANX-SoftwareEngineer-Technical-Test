import { Router } from "express";

import CreateAccountWithInitialBalanceController from "./modules/account/createAccountWithInitialBalance/CreateAccountWithInitialBalanceController";

const routes = Router()


export default routes
    // .post('/reset',)
    .post('/event', CreateAccountWithInitialBalanceController.handle)
    // .get('')
    // .get('')