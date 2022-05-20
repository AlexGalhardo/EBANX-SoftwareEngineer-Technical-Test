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

export interface IAccountRepository {
    resetStateBeforeStartingTests(): void
    getBalance(account_id: string): { httpStatusCodeResponse: number, message: typeDepositMessage }
    deposit(destination: string, amount: number): { httpStatusCodeResponse: 201, message: typeDepositMessage }
    withdraw(destination: string, amount: number): { httpStatusCodeResponse: 201 | 404, message: 0 | typeWithdrawMessage }
    transfer(destination: string, amount: number): { httpStatusCodeResponse: 201 | 404, message: 0 | typeTransferMessage }
}