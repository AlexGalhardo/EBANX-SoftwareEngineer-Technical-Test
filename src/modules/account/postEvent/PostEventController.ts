import { Request, Response } from "express";
import { PostEventTypeDepositUseCase } from "./PostEventTypeDepositUseCase";
import { PostEventTypeTransferUseCase } from "./PostEventTypeTransferUseCase";
import { PostEventTypeWithdrawUseCase } from "./PostEventTypeWithdrawUseCase";

class PostEventTypeDepositController {
    async handle(req: Request, res: Response) {
        const { type, destination, amount } = req.body

        let postEventResponse = null;

        if (type === "deposit") {
            postEventResponse = await new PostEventTypeDepositUseCase().execute({
                destination, amount
            })
        }
        else if (type === "withdraw") {
            postEventResponse = await new PostEventTypeWithdrawUseCase().execute({
                destination, amount
            })
        }
        else if (type === "transfer") {
            postEventResponse = await new PostEventTypeTransferUseCase().execute({
                destination, amount
            })
        }

        return res.status(postEventResponse!.httpStatusCodeResponse).json(postEventResponse!.message)
    }
}

export default new PostEventTypeDepositController();