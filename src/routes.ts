import { Router } from "express"

import ResetStateController from "./modules/account/resetState/ResetStateController"
import PostEventController from "./modules/account/postEvent/PostEventController"
import GetBalanceController from "./modules/account/getBalance/GetBalanceController"

export default Router()
    .post('/reset', ResetStateController.handle)
    .post('/event', PostEventController.handle)
    .get('/balance', GetBalanceController.handle)