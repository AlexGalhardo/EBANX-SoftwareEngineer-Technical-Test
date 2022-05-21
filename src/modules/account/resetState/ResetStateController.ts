import { Request, Response } from "express";
import { makeAccountRepository } from "../../../factories/makeAccountRepository";
import AccountResetStateUseCase from "./AccountResetStateUseCase";

class ResetStateController {
    async handle(req: Request, res: Response) {
        const resetStateUseCaseResponse = await new AccountResetStateUseCase(makeAccountRepository()).execute()

        return res.status(resetStateUseCaseResponse.httpStatusCodeResponse).send(resetStateUseCaseResponse.message)
    }
}

export default new ResetStateController();