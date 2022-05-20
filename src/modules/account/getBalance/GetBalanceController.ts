import { Request, Response } from "express";
import AccountGetBalanceUseCase from "./AccountGetBalanceUseCase";
import { makeAccountRepository } from "../../../factories/makeAccountRepository";

class GetBalanceController {
    async handle(req: Request, res: Response) {
        const { account_id } = req.query

        const accountRepository = makeAccountRepository()
        const getBalanceResponse = await new AccountGetBalanceUseCase(accountRepository).execute({ account_id })

        return res.status(getBalanceResponse.httpStatusCodeResponse).json(getBalanceResponse.message)
    }
}

export default new GetBalanceController();