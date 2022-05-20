export interface IAccountRepository {
    resetStateBeforeStartingTests(): void
    getBalance(account_id: string): { httpStatusCodeResponse: number, message: string }
    deposit(destination: string, amount: number): { httpStatusCodeResponse: number, message: string }
    withdraw(destination: string, amount: number): { httpStatusCodeResponse: number, message: string }
    transfer(destination: string, amount: number): { httpStatusCodeResponse: number, message: string }
}