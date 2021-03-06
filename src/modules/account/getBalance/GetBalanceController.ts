import { Request, Response } from "express";

import { makeAccountRepository } from "../../../factories/makeAccountRepository";
import AccountGetBalanceUseCase from "./AccountGetBalanceUseCase";

class GetBalanceController {
    async handle(req: Request, res: Response) {
        const { account_id } = req.query as { account_id: string };

        const getBalanceResponse = await new AccountGetBalanceUseCase(
            makeAccountRepository(),
        ).execute({ account_id });

        return res
            .status(getBalanceResponse.httpStatusCodeResponse)
            .json(getBalanceResponse.message);
    }
}

export default new GetBalanceController();
