import { Request, Response } from "express";
import { GetBalanceForNonExistingAccountUseCase } from "./GetBalanceForNonExistingAccountUseCase";

class GetBalanceForNonExistingAccountController {
    async handle(req: Request, res: Response) {
        const { account_id } = req.query

        const getBalanceForNonExistingAccountResponse = await new GetBalanceForNonExistingAccountUseCase().execute({ account_id })

        return res.status(404).json(getBalanceForNonExistingAccountResponse)
    }
}

export default new GetBalanceForNonExistingAccountController();