interface IPostEventTypeWithdraw {
    destination: string;
    amount: number;
}

export default class AccountWithdrawUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ destination, amount }: IPostEventTypeWithdraw) {

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