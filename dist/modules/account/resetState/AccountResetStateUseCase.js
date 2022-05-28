"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../shared/constants");
class AccountResetStateUseCase {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    async execute() {
        this.accountRepository.resetStateBeforeStartingTests();
        return { httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_OK, message: "OK" };
    }
}
exports.default = AccountResetStateUseCase;
