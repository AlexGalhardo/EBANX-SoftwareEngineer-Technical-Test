import { IAccountRepository } from "../ports/IAccountRepository";
import {
    typeResetStateBeforeStartingTestsMethodResponse,
    typeGetBalanceMethodResponse,
    typeDepositMethodResponse,
    typeWithdrawMethodResponse,
    typeTransferMethodResponse
} from "../ports/IAccountRepository";
import { AccountEntity } from "../entities/AccountEntity";

const IN_MEMORY_DATABASE: AccountEntity[] = [];

export default class InMemoryDatabaseAccountRepository implements IAccountRepository {

    resetStateBeforeStartingTests(): typeResetStateBeforeStartingTestsMethodResponse {
        IN_MEMORY_DATABASE.length = 0

        // http respnse 404 200 

        return {
            httpStatusCodeResponse: 200,
            message: 'OK'
        }
    }

    getBalance(account_id: string): typeGetBalanceMethodResponse {
        return {
            httpStatusCodeResponse: 200,
            message: 0
        }
    }

    deposit(destination: string, amount: number): typeDepositMethodResponse {
        return {
            httpStatusCodeResponse: 201,
            message: {
                destination: {
                    id: '100',
                    balance: 0
                }
            }
        }
    }

    withdraw(destination: string, amount: number): typeWithdrawMethodResponse {
        return { httpStatusCodeResponse: 201, message: 0 }
    }

    transfer(destination: string, amount: number): typeTransferMethodResponse {
        return { httpStatusCodeResponse: 201, message: 0 }
    }
}