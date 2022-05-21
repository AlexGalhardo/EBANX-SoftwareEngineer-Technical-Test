import { Request, Response } from "express";
import { makeAccountRepository } from "../../../factories/makeAccountRepository";
import AccountDepositUseCase from "./AccountDepositUseCase";
import AccountTransferUseCase from "./AccountTransferUseCase";
import AccountWithdrawUseCase from "./AccountWithdrawUseCase";
import {
    typeDepositMessage,
    typeWithdrawMessage,
    typeTransferMessage
} from "../../../ports/IAccountRepository";

class PostEventTypeDepositController {
    async handle(req: Request, res: Response) {
        const { type, origin, amount, destination } = req.body

        let postEventResponse: {
            httpStatusCodeResponse: number,
            message: number | typeDepositMessage | typeWithdrawMessage | typeTransferMessage
        };

        if (type === "deposit") {
            postEventResponse = await new AccountDepositUseCase(makeAccountRepository()).execute({
                destination, amount
            })
        }
        else if (type === "withdraw") {
            postEventResponse = await new AccountWithdrawUseCase(makeAccountRepository()).execute({
                origin, amount
            })
        }
        else if (type === "transfer") {
            postEventResponse = await new AccountTransferUseCase(makeAccountRepository()).execute({
                origin, amount, destination
            })
        }

        return res.status(postEventResponse!.httpStatusCodeResponse).json(postEventResponse!.message)
    }
}

export default new PostEventTypeDepositController();