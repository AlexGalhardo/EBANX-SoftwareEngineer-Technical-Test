import InMemoryDatabaseAccountRepository from '../repositories/InMemoryDatabaseAccountRepository'

export const makeAccountRepository = (): InMemoryDatabaseAccountRepository => {
    return new InMemoryDatabaseAccountRepository()
}