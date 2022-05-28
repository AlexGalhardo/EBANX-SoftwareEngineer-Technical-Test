import { IAccountRepository } from "../ports/IAccountRepository";
import InMemoryDatabaseAccountRepository from "../repositories/InMemoryDatabaseAccountRepository";

export const makeAccountRepository = (): IAccountRepository => {
    return new InMemoryDatabaseAccountRepository();
};
