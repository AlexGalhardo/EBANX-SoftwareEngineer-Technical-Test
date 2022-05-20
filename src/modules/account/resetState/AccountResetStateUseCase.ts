import { IAccountRepository } from '../../../ports/IAccountRepository';

export default class AccountResetStateUseCase {
    private readonly accountRepository: IAccountRepository

    constructor(accountRepository: IAccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute() {

        this.accountRepository.resetStateBeforeStartingTests()

        return { httpStatusCodeResponse: 200, message: 'OK' }
    }
}