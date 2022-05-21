import { IAccountRepository } from "../ports/IAccountRepository"
import {
    typeResetStateBeforeStartingTestsMethodResponse,
    typeGetBalanceMethodResponse,
    typeDepositMethodResponse,
    typeWithdrawMethodResponse,
    typeTransferMethodResponse
} from "../ports/IAccountRepository"
import { AccountEntity } from "../entities/AccountEntity"

const IN_MEMORY_DATABASE: AccountEntity[] = []

export default class InMemoryDatabaseAccountRepository implements IAccountRepository {

    resetStateBeforeStartingTests(): typeResetStateBeforeStartingTestsMethodResponse {
        IN_MEMORY_DATABASE.length = 0

        IN_MEMORY_DATABASE.push({
            id: "300",
            balance: 0
        })

        return {
            httpStatusCodeResponse: 200,
            message: 'OK'
        }
    }

    getBalance(account_id: string): typeGetBalanceMethodResponse {

        for (let i = 0; i < IN_MEMORY_DATABASE.length; i++) {

            if (IN_MEMORY_DATABASE[i].id === account_id) {

                return {
                    httpStatusCodeResponse: 200,
                    message: IN_MEMORY_DATABASE[i].balance
                }
            }
        }

        return {
            httpStatusCodeResponse: 404,
            message: 0
        }
    }

    deposit(destination: string, amount: number): typeDepositMethodResponse {
        for (let i = 0; i < IN_MEMORY_DATABASE.length; i++) {

            if (IN_MEMORY_DATABASE[i].id === destination) {

                IN_MEMORY_DATABASE[i].balance += amount

                return {
                    httpStatusCodeResponse: 201,
                    message: {
                        destination: {
                            id: destination,
                            balance: IN_MEMORY_DATABASE[i].balance
                        }
                    }
                }
            }
        }

        IN_MEMORY_DATABASE.push({
            id: destination,
            balance: amount
        })

        return {
            httpStatusCodeResponse: 201,
            message: {
                destination: {
                    id: destination,
                    balance: amount
                }
            }
        }
    }

    withdraw(origin: string, amount: number): typeWithdrawMethodResponse {
        for (let i = 0; i < IN_MEMORY_DATABASE.length; i++) {

            if (IN_MEMORY_DATABASE[i].id === origin) {

                IN_MEMORY_DATABASE[i].balance -= amount

                return {
                    httpStatusCodeResponse: 201,
                    message: {
                        origin: {
                            id: origin,
                            balance: IN_MEMORY_DATABASE[i].balance
                        }
                    }
                }
            }
        }

        return { httpStatusCodeResponse: 404, message: 0 }
    }

    transfer(origin: string, amount: number, destination: string): typeTransferMethodResponse {

        let indexOfAccountOrigin = IN_MEMORY_DATABASE.findIndex(account => account.id === origin);

        let indexOfAccountDestination = IN_MEMORY_DATABASE.findIndex(account => account.id === destination);

        if (indexOfAccountOrigin >= 0 && indexOfAccountDestination >= 0) {

            IN_MEMORY_DATABASE[indexOfAccountOrigin].balance -= amount
            IN_MEMORY_DATABASE[indexOfAccountDestination].balance += amount

            return {
                httpStatusCodeResponse: 201,
                message: {
                    origin: {
                        id: IN_MEMORY_DATABASE[indexOfAccountOrigin].id,
                        balance: IN_MEMORY_DATABASE[indexOfAccountOrigin].balance
                    },
                    destination: {
                        id: IN_MEMORY_DATABASE[indexOfAccountDestination].id,
                        balance: IN_MEMORY_DATABASE[indexOfAccountDestination].balance
                    }
                }
            }
        }

        return { httpStatusCodeResponse: 404, message: 0 }
    }
}
