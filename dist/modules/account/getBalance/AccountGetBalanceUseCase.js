"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountGetBalanceUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute({ account_id }) {
        const { httpStatusCodeResponse, message } = this.accountRepository.getBalance(account_id);
        return {
            httpStatusCodeResponse,
            message
        };
    }
}
exports.default = AccountGetBalanceUseCase;
