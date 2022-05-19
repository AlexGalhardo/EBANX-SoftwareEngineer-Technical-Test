import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';

interface IGetBalanceForNonExistingAccountUseCase {
    account_id: any
}

export class GetBalanceForNonExistingAccountUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ account_id }: IGetBalanceForNonExistingAccountUseCase) {

        // if (inMemoryDatabase.destination?.id !== account_id) return 0

        return 0

        // const getBalanceForNonExistingAccountResponse = this.accountRepository.getBalanceForNonExistingAccount(account_id)

        // return getBalanceForNonExistingAccountResponse
    }
}