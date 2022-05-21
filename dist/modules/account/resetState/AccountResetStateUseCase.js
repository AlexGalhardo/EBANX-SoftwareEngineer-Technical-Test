"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AccountResetStateUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute() {
        this.accountRepository.resetStateBeforeStartingTests();
        return { httpStatusCodeResponse: 200, message: 'OK' };
    }
}
exports.default = AccountResetStateUseCase;
