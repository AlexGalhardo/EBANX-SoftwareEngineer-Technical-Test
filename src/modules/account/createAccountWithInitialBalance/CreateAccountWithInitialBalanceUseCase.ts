// import inMemoryJSONDatabase from '../../../repositories/inMemoryJSON';
import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';
import fs from 'fs-extra'
interface ICreateAccountWithInitialBalance {
    type: string;
    destination: string;
    amount: number;
}
export class CreateAccountWithInitialBalanceUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ type, destination, amount }: ICreateAccountWithInitialBalance) {

        /* const newAccountWithInitialBalanceObject: ICreateAccountWithInitialBalance = {
            type,
            destination,
            amount
        }*/

        // this.accountRepository.createAccountWithInitialBalance(newAccountWithInitialBalanceObject)
        inMemoryDatabase.destination = {
            type,
            destination,
            amount
        }

        /* fs.writeFileSync('../../../repositories/inMemoryJSONDatabase.json', JSON.stringify(inMemoryDatabase, null, 2), error => {
            if (error) {
                throw new Error(error);
            }
        });*/

        return inMemoryDatabase
    }
}