import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';

interface IPostEventTypeWithdraw {
    destination: string;
    amount: number;
}

export class PostEventTypeWithdrawUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ destination, amount }: IPostEventTypeWithdraw) {

        const newAccountWithInitialBalanceObject = {
            id: destination,
            balance: amount
        }

        // this.accountRepository.createAccountWithInitialBalance(newAccountWithInitialBalanceObject)

        inMemoryDatabase.destination = newAccountWithInitialBalanceObject

        return { httpStatusCodeResponse: 201, message: inMemoryDatabase }
    }
}