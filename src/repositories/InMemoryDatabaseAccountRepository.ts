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

    getBalance(account_id: string) {
        return {
            httpStatusCodeResponse: 200,
            message: 'OK'
        }
    }

    deposit(destination: string, amount: number) {
        return { httpStatusCodeResponse: 201, message: 'ok' }
    }

    withdraw(destination: string, amount: number) {
        return { httpStatusCodeResponse: 201, message: 'ok' }
    }

    transfer(destination: string, amount: number) {
        return { httpStatusCodeResponse: 201, message: 'ok' }
    }
}