import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';
interface ICreateAccountWithInitialBalance {
    destination: string;
    amount: number;
}
export class CreateAccountWithInitialBalanceUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ destination, amount }: ICreateAccountWithInitialBalance) {

        const newAccountWithInitialBalanceObject = {
            id: destination,
            balance: amount
        }

        // this.accountRepository.createAccountWithInitialBalance(newAccountWithInitialBalanceObject)

        inMemoryDatabase.destination = newAccountWithInitialBalanceObject

        return inMemoryDatabase
    }
}