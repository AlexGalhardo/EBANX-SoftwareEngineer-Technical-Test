import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';
interface ICreateAccountWithInitialBalance {
    type: string;
    destination: string;
    amount: number;
}
export class CreateAccountWithInitialBalanceUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ type, destination, amount }: ICreateAccountWithInitialBalance) {

        const newAccountWithInitialBalanceObject: ICreateAccountWithInitialBalance = {
            type,
            destination,
            amount
        }

        // this.accountRepository.createAccountWithInitialBalance(newAccountWithInitialBalanceObject)

        inMemoryDatabase.destination = newAccountWithInitialBalanceObject

        return inMemoryDatabase
    }
}