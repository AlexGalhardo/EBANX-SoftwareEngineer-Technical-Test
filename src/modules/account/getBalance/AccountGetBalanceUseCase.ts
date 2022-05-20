import { IAccountRepository } from '../../../ports/IAccountRepository';

interface IGetBalanceUseCase {
    account_id: any
}

export default class AccountGetBalanceUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute({ account_id }: IGetBalanceUseCase) {

        const accountIdAlreadyExists = inMemoryDatabase.some((account) => {
            if (account.destination.id === account_id) return true
        })

        if (inMemoryDatabase.length > 0 && accountIdAlreadyExists) {
            return { httpStatusCodeResponse: 200, message: 10 }
        }




        return { httpStatusCodeResponse: 404, message: 0 }

        // const getBalanceForNonExistingAccountResponse = this.accountRepository.getBalanceForNonExistingAccount(account_id)

        // return getBalanceForNonExistingAccountResponse
    }
}