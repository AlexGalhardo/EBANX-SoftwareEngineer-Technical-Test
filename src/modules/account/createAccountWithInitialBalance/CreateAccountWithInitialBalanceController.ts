import { Request, Response } from "express";
import { CreateAccountWithInitialBalanceUseCase } from "./CreateAccountWithInitialBalanceUseCase";

class CreateAccountWithInitialBalanceController {
    async handle(req: Request, res: Response) {
        const { destination, amount } = req.body

        const createAccountWithInitialBalanceResponse = await new CreateAccountWithInitialBalanceUseCase().execute({
            destination, amount
        })

        return res.status(201).json(createAccountWithInitialBalanceResponse)
    }
}

export default new CreateAccountWithInitialBalanceController();