import { IAccountRepository } from '../../../ports/IAccountRepository';

interface IAccountDepositParams {
    destination: string;
    amount: number;
}

export default class AccountDepositUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ destination, amount }: IAccountDepositParams) {

        const { httpStatusCodeResponse, message } = this.accountRepository.deposit(destination, amount)

        return {
            httpStatusCodeResponse,
            message
        }
    }
}