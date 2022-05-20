import { IAccountRepository } from "../../../ports/IAccountRepository";

interface IAccountTransferParams {
    destination: string;
    amount: number;
}

export default class AccountTransferUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ destination, amount }: IAccountTransferParams) {

        const { httpStatusCodeResponse, message } = this.accountRepository.transfer(destination, amount)

        return {
            httpStatusCodeResponse,
            message
        }
    }
}