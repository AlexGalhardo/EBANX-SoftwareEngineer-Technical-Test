import inMemoryJSONDatabase from '../../../repositories/inMemoryJSON';
interface ICreateAccountWithInitialBalance {
    type: string;
    destination: string;
    amount: number;
}
export class CreateAccountWithInitialBalanceUseCase {
    async execute({ type, destination, amount }: ICreateAccountWithInitialBalance) {

    }
}