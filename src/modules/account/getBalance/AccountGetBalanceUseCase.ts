import { IAccountRepository } from '../../../ports/IAccountRepository';

interface IAccountGetBalanceParams {
    account_id: string
}

export default class AccountGetBalanceUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ account_id }: IAccountGetBalanceParams) {

        const { httpStatusCodeResponse, message } = this.accountRepository.getBalance(account_id)

        return {
            httpStatusCodeResponse,
            message
        }
    }
}