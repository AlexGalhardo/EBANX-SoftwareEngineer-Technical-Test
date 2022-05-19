import { inMemoryDatabase } from '../../../repositories/inMemoryDatabase';

export class ResetStateUseCase {
    // private readonly accountRepository: AccountRepository

    async execute() {

        // this.accountRepository.resetStateUseCase()

        inMemoryDatabase.destination = {}

        return 'OK'
    }
}