import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';

interface IGetBalanceUseCase {
    account_id: any
}

export class GetBalanceUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ account_id }: IGetBalanceUseCase) {

        // if (inMemoryDatabase.destination?.id !== account_id) return 0

        return 0

        // const getBalanceForNonExistingAccountResponse = this.accountRepository.getBalanceForNonExistingAccount(account_id)

        // return getBalanceForNonExistingAccountResponse
    }
}