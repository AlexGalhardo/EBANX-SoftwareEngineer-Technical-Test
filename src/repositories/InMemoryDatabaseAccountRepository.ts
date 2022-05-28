import { AccountEntity } from "../entities/AccountEntity";
import {
    IAccountRepository,
    typeDepositMethodResponse,
    typeGetBalanceMethodResponse,
    typeResetStateBeforeStartingTestsMethodResponse,
    typeTransferMethodResponse,
    typeWithdrawMethodResponse,
} from "../ports/IAccountRepository";
import {
    HTTP_STATUS_CODE_CREATED,
    HTTP_STATUS_CODE_NOT_FOUND,
    HTTP_STATUS_CODE_OK,
} from "../shared/constants";

const IN_MEMORY_ACCOUNTS_DATABASE: AccountEntity[] = [];

export default class InMemoryDatabaseAccountRepository implements IAccountRepository {
    resetStateBeforeStartingTests(): typeResetStateBeforeStartingTestsMethodResponse {
        IN_MEMORY_ACCOUNTS_DATABASE.length = 0;

        IN_MEMORY_ACCOUNTS_DATABASE.push({
            id: "300",
            balance: 0,
        });

        return {
            httpStatusCodeResponse: HTTP_STATUS_CODE_OK,
            message: "OK",
        };
    }

    getBalance(accountId: string): typeGetBalanceMethodResponse {
        for (let i = 0; i < IN_MEMORY_ACCOUNTS_DATABASE.length; i++) {
            if (IN_MEMORY_ACCOUNTS_DATABASE[i].id === accountId) {
                return {
                    httpStatusCodeResponse: HTTP_STATUS_CODE_OK,
                    message: IN_MEMORY_ACCOUNTS_DATABASE[i].balance,
                };
            }
        }

        return {
            httpStatusCodeResponse: HTTP_STATUS_CODE_NOT_FOUND,
            message: 0,
        };
    }

    deposit(destination: string, amount: number): typeDepositMethodResponse {
        for (let i = 0; i < IN_MEMORY_ACCOUNTS_DATABASE.length; i++) {

            if (IN_MEMORY_ACCOUNTS_DATABASE[i].id === destination) {

                IN_MEMORY_ACCOUNTS_DATABASE[i].balance += amount;

                return {
                    httpStatusCodeResponse: HTTP_STATUS_CODE_CREATED,
                    message: {
                        destination: {
                            id: destination,
                            balance: IN_MEMORY_ACCOUNTS_DATABASE[i].balance,
                        },
                    },
                };
            }
        }

        IN_MEMORY_ACCOUNTS_DATABASE.push({
            id: destination,
            balance: amount,
        });

        return {
            httpStatusCodeResponse: HTTP_STATUS_CODE_CREATED,
            message: {
                destination: {
                    id: destination,
                    balance: amount,
                },
            },
        };
    }

    withdraw(origin: string, amount: number): typeWithdrawMethodResponse {
        for (let i = 0; i < IN_MEMORY_ACCOUNTS_DATABASE.length; i++) {
            if (IN_MEMORY_ACCOUNTS_DATABASE[i].id === origin) {
                IN_MEMORY_ACCOUNTS_DATABASE[i].balance -= amount;

                return {
                    httpStatusCodeResponse: HTTP_STATUS_CODE_CREATED,
                    message: {
                        origin: {
                            id: origin,
                            balance: IN_MEMORY_ACCOUNTS_DATABASE[i].balance,
                        },
                    },
                };
            }
        }

        return {
            httpStatusCodeResponse: HTTP_STATUS_CODE_NOT_FOUND,
            message: 0,
        };
    }

    transfer(origin: string, amount: number, destination: string): typeTransferMethodResponse {
        const indexOfAccountOrigin = IN_MEMORY_ACCOUNTS_DATABASE.findIndex(
            (account) => account.id === origin,
        );

        const indexOfAccountDestination = IN_MEMORY_ACCOUNTS_DATABASE.findIndex(
            (account) => account.id === destination,
        );

        if (indexOfAccountOrigin >= 0 && indexOfAccountDestination >= 0) {
            IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountOrigin].balance -= amount;
            IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountDestination].balance += amount;

            return {
                httpStatusCodeResponse: HTTP_STATUS_CODE_CREATED,
                message: {
                    origin: {
                        id: IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountOrigin].id,
                        balance: IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountOrigin].balance,
                    },
                    destination: {
                        id: IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountDestination].id,
                        balance: IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountDestination].balance,
                    },
                },
            };
        }

        return {
            httpStatusCodeResponse: HTTP_STATUS_CODE_NOT_FOUND,
            message: 0,
        };
    }
}
