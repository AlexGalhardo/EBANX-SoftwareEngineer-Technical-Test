interface IPostEventTypeTransfer {
    destination: string;
    amount: number;
}

export default class AccountTransferUseCase {
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