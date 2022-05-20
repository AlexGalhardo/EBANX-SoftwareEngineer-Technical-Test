type typeDepositMessage = {
    destination: {
        id: string,
        balance: number
    }
}

type typeWithdrawMessage = {
    origin: {
        id: string,
        balance: number
    }
}

type typeTransferMessage = {
    origin: {
        id: string,
        balance: number
    },
    destination: {
        id: string,
        balance: number
    }
}

export type typeResetStateBeforeStartingTestsMethodResponse = { httpStatusCodeResponse: 200, message: 'OK' }
export type typeGetBalanceMethodResponse = { httpStatusCodeResponse: 200 | 404, message: number }
export type typeDepositMethodResponse = { httpStatusCodeResponse: 201, message: typeDepositMessage }
export type typeWithdrawMethodResponse = { httpStatusCodeResponse: 201 | 404, message: 0 | typeWithdrawMessage }
export type typeTransferMethodResponse = { httpStatusCodeResponse: 201 | 404, message: 0 | typeTransferMessage }

export interface IAccountRepository {
    resetStateBeforeStartingTests(): typeResetStateBeforeStartingTestsMethodResponse
    getBalance(account_id: string): typeGetBalanceMethodResponse
    deposit(destination: string, amount: number): typeDepositMethodResponse
    withdraw(destination: string, amount: number): typeWithdrawMethodResponse
    transfer(origin: string, amount: number, destination: string): typeTransferMethodResponse
}