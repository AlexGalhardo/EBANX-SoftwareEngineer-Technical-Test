import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';

interface IPostEventTypeDeposit {
    destination: string;
    amount: number;
}

export class PostEventTypeDepositUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ destination, amount }: IPostEventTypeDeposit) {

        const newAccountWithInitialBalanceObject = {
            id: destination,
            balance: amount
        }

        // this.accountRepository.createAccountWithInitialBalance(newAccountWithInitialBalanceObject)

        inMemoryDatabase.destination = newAccountWithInitialBalanceObject

        return { httpStatusCodeResponse: 201, message: inMemoryDatabase }
    }
}