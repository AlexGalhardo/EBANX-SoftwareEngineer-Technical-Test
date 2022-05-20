import { IAccountRepository } from "../../../ports/IAccountRepository";

interface IAccountTransferParams {
    origin: string;
    amount: number;
    destination: string;
}

export default class AccountTransferUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ origin, amount, destination }: IAccountTransferParams) {

        const { httpStatusCodeResponse, message } = this.accountRepository.transfer(origin, amount, destination)

        return {
            httpStatusCodeResponse,
            message
        }
    }
}