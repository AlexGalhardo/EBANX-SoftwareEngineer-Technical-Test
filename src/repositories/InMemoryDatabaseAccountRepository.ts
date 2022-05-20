import { IAccountRepository } from "../ports/IAccountRepository";

type typeAccount = {
    destination: {
        id: string
        balance: number
    }
}

const IN_MEMORY_DATABASE: typeAccount[] = [];

export default class InMemoryDatabaseAccountRepository implements IAccountRepository {

    resetStateBeforeStartingTests() {
        IN_MEMORY_DATABASE.length = 0
    }

    createAccountWithInitialBalance() { }
    depositIntoExistingAccount() { }
    getBalanceForExistingAccount() { }
    withdrawFromNonExistingAccount() { }
    withdrawFromExistingAccount() { }
    transferFromExistingAccount() { }
    transferFromNonExistingAccount() { }
}