import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./createAccountWithInitialBalanceUseCase";

export class AuthenticateClientController {
    async handle(req: Request, res: Response) {
        const { username, password } = req.body

        const authenticateClientUseCase = new AuthenticateClientUseCase();
        const response = await authenticateClientUseCase.execute({
            username, password
        })

        return res.json(result)
    }
}