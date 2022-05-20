import InMemoryDatabaseAccountRepository from '../../../repositories/InMemoryDatabaseAccountRepository';

interface IPostEventTypeDeposit {
    destination: string;
    amount: number;
}

export default class AccountDepositUseCase {
    // private readonly accountRepository: AccountRepository

    async execute({ destination, amount }: IPostEventTypeDeposit) {

        const newAccountWithInitialBalanceObject = {
            id: destination,
            balance: amount
        }

        // this.accountRepository.deposit(newAccountWithInitialBalanceObject)
        let accountAlreadyExist = true
        if (accountAlreadyExist) {
            return {
                httpStatusCodeResponse: 201, message: {
                    destination: {
                        id: destination,
                        balance: 20
                    }
                }
            }
        }
        else {
            return {
                httpStatusCodeResponse: 201, message: {
                    destination: {
                        id: destination,
                        balance: amount
                    }
                }
            }
        }

        // return { httpStatusCodeResponse: 201, message: inMemoryDatabase }
    }
}