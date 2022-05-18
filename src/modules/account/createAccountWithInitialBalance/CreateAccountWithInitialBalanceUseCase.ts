import inMemoryJSONDatabase from '../../../repositories/inMemoryJSON';
import fs from 'fs-extra'
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

        inMemoryJSONDatabase.destination = newAccountWithInitialBalanceObject

        fs.writeFileSync('../../../repositories/inMemoryJSONDatabase.json', JSON.stringify(inMemoryJSONDatabase, null, 2), error => {
            if (error) {
                throw new Error(error);
            }
        });

        return inMemoryJSONDatabase
    }
}