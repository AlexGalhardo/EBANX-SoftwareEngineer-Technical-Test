import { Request, Response } from "express";
import { makeAccountRepository } from "../../../factories/makeAccountRepository";
import AccountResetStateUseCase from "./AccountResetStateUseCase";

class ResetStateController {
    async handle(req: Request, res: Response) {
        const accountRepository = makeAccountRepository()
        const resetStateUseCaseResponse = await new AccountResetStateUseCase(accountRepository).execute()

        return res.status(resetStateUseCaseResponse.httpStatusCodeResponse).json(resetStateUseCaseResponse.message)
    }
}

export default new ResetStateController();