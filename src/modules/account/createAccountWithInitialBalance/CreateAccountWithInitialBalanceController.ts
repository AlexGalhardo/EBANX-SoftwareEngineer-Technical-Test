import { Request, Response } from "express";
import { CreateAccountWithInitialBalanceUseCase } from "./CreateAccountWithInitialBalanceUseCase";

class CreateAccountWithInitialBalanceController {
    async handle(req: Request, res: Response) {
        const { type, destination, amount } = req.body

        const createAccountWithInitialBalanceUseCase = new CreateAccountWithInitialBalanceUseCase();
        const jsonResponse = await createAccountWithInitialBalanceUseCase.execute({
            type, destination, amount
        })

        return res.status(201).json(jsonResponse)
    }
}

export default new CreateAccountWithInitialBalanceController();