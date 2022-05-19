import { Request, Response } from "express";
import { GetBalanceUseCase } from "./GetBalanceUseCase";

class GetBalanceController {
    async handle(req: Request, res: Response) {
        const { account_id } = req.query

        const getBalanceForNonExistingAccountResponse = await new GetBalanceUseCase().execute({ account_id })

        return res.status(404).json(getBalanceForNonExistingAccountResponse)
    }
}

export default new GetBalanceController();