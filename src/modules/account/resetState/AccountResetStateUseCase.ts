import { IAccountRepository } from "../../../ports/IAccountRepository";
import { HTTP_STATUS_CODE_OK } from "../../../shared/constants";

export default class AccountResetStateUseCase {
    private readonly accountRepository: IAccountRepository;

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository;
    }

    async execute() {
        this.accountRepository.resetStateBeforeStartingTests();

        return { httpStatusCodeResponse: HTTP_STATUS_CODE_OK, message: "OK" };
    }
}
