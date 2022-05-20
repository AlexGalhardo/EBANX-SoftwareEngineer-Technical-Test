import { Router } from "express"

import ResetStateController from "./modules/account/resetState/ResetStateController"
import PostEventController from "./modules/account/postEvent/PostEventController"
import GetBalanceController from "./modules/account/getBalance/GetBalanceController"

const routes = Router()

export default routes
    .post('/reset', ResetStateController.handle)
    .post('/event', PostEventController.handle)
    .get('/balance', GetBalanceController.handle)