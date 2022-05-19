import { Request, Response } from "express";
import { GetBalanceUseCase } from "./GetBalanceUseCase";

class GetBalanceController {
    async handle(req: Request, res: Response) {
        const { account_id } = req.query

        const getBalanceResponse = await new GetBalanceUseCase().execute({ account_id })

        return res.status(getBalanceResponse.httpStatusCodeResponse).json(getBalanceResponse.message)
    }
}

export default new GetBalanceController();