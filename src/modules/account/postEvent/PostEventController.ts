import { Request, Response } from "express";
import { makeAccountRepository } from "../../../factories/makeAccountRepository";
import AccountDepositUseCase from "./AccountDepositUseCase";
import AccountTransferUseCase from "./AccountTransferUseCase";
import AccountWithdrawUseCase from "./AccountWithdrawUseCase";

class PostEventTypeDepositController {
    async handle(req: Request, res: Response) {
        const { type, destination, amount } = req.body

        const accountRepository = makeAccountRepository()

        let postEventResponse = null;

        if (type === "deposit") {
            postEventResponse = await new AccountDepositUseCase(accountRepository).execute({
                destination, amount
            })
        }
        else if (type === "withdraw") {
            postEventResponse = await new AccountWithdrawUseCase(accountRepository).execute({
                destination, amount
            })
        }
        else if (type === "transfer") {
            postEventResponse = await new AccountTransferUseCase(accountRepository).execute({
                destination, amount
            })
        }

        return res.status(postEventResponse!.httpStatusCodeResponse).json(postEventResponse!.message)
    }
}

export default new PostEventTypeDepositController();