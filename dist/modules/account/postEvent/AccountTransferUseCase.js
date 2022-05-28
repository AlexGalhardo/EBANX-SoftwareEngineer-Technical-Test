"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountTransferUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute({ origin, amount, destination }) {
        const { httpStatusCodeResponse, message } = this.accountRepository.transfer(origin, amount, destination);
        return {
            httpStatusCodeResponse,
            message,
        };
    }
}
exports.default = AccountTransferUseCase;
