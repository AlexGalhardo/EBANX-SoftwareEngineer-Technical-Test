import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';

interface IPostEventTypeTransfer {
    destination: string;
    amount: number;
}

export class PostEventTypeTransferUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ destination, amount }: IPostEventTypeTransfer) {

        const newAccountWithInitialBalanceObject = {
            destination: {
                id: destination,
                balance: amount
            }
        }

        // this.accountRepository.createAccountWithInitialBalance(newAccountWithInitialBalanceObject)

        inMemoryDatabase.push(newAccountWithInitialBalanceObject)

        return { httpStatusCodeResponse: 201, message: inMemoryDatabase }
    }
}