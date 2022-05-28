"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountDepositUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute({ destination, amount }) {
        const { httpStatusCodeResponse, message } = this.accountRepository.deposit(destination, amount);
        return {
            httpStatusCodeResponse,
            message,
        };
    }
}
exports.default = AccountDepositUseCase;
