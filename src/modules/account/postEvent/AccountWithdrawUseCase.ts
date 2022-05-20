import { IAccountRepository } from "../../../ports/IAccountRepository";

interface IAccountWithdrawParams {
    origin: string;
    amount: number;
}

export default class AccountWithdrawUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ origin, amount }: IAccountWithdrawParams) {

        const { httpStatusCodeResponse, message } = this.accountRepository.withdraw(origin, amount)

        return {
            httpStatusCodeResponse,
            message
        }
    }
}