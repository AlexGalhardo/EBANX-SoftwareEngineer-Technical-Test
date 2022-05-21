"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountWithdrawUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute({ origin, amount }) {
        const { httpStatusCodeResponse, message } = this.accountRepository.withdraw(origin, amount);
        return {
            httpStatusCodeResponse,
            message
        };
    }
}
exports.default = AccountWithdrawUseCase;
