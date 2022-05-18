import { Request, Response } from "express";
import { CreateAccountWithInitialBalanceUseCase } from "./createAccountWithInitialBalanceUseCase";

export class createAccountWithInitialBalanceController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body

        const createAccountWithInitialBalanceUseCase = new CreateAccountWithInitialBalanceUseCase();
        const response = await createAccountWithInitialBalanceUseCase.execute({
            username, password
        })

        return res.json(response)
    }
}