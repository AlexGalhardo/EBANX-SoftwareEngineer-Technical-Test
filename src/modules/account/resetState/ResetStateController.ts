import { Request, Response } from "express";
import { ResetStateUseCase } from "./ResetStateUseCase";

class ResetStateController {
    async handle(req: Request, res: Response) {
        const resetStateUseCaseResponse = await new ResetStateUseCase().execute()

        return res.status(200).json(resetStateUseCaseResponse)
        // return res.status(200).send(resetStateUseCaseResponse) // for text OK response
    }
}

export default new ResetStateController();