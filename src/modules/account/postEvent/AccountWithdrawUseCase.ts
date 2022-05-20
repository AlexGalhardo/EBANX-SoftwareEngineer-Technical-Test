import { IAccountRepository } from "../../../ports/IAccountRepository";

interface IAccountWithdrawParams {
    destination: string;
    amount: number;
}

export default class AccountWithdrawUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ destination, amount }: IAccountWithdrawParams) {

        const { httpStatusCodeResponse, message } = this.accountRepository.withdraw(destination, amount)

        return {
            httpStatusCodeResponse,
            message
        }
    }
}