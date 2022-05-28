"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../shared/constants");
const IN_MEMORY_ACCOUNTS_DATABASE = [];
class InMemoryDatabaseAccountRepository {
    resetStateBeforeStartingTests() {
        IN_MEMORY_ACCOUNTS_DATABASE.length = 0;
        IN_MEMORY_ACCOUNTS_DATABASE.push({
            id: "300",
            balance: 0,
        });
        return {
            httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_OK,
            message: "OK",
        };
    }
    getBalance(accountId) {
        for (let i = 0; i < IN_MEMORY_ACCOUNTS_DATABASE.length; i++) {
            if (IN_MEMORY_ACCOUNTS_DATABASE[i].id === accountId) {
                return {
                    httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_OK,
                    message: IN_MEMORY_ACCOUNTS_DATABASE[i].balance,
                };
            }
        }
        return {
            httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_NOT_FOUND,
            message: 0,
        };
    }
    deposit(destination, amount) {
        for (let i = 0; i < IN_MEMORY_ACCOUNTS_DATABASE.length; i++) {
            if (IN_MEMORY_ACCOUNTS_DATABASE[i].id === destination) {
                IN_MEMORY_ACCOUNTS_DATABASE[i].balance += amount;
                return {
                    httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_CREATED,
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
            httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_CREATED,
            message: {
                destination: {
                    id: destination,
                    balance: amount,
                },
            },
        };
    }
    withdraw(origin, amount) {
        for (let i = 0; i < IN_MEMORY_ACCOUNTS_DATABASE.length; i++) {
            if (IN_MEMORY_ACCOUNTS_DATABASE[i].id === origin) {
                IN_MEMORY_ACCOUNTS_DATABASE[i].balance -= amount;
                return {
                    httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_CREATED,
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
            httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_NOT_FOUND,
            message: 0,
        };
    }
    transfer(origin, amount, destination) {
        const indexOfAccountOrigin = IN_MEMORY_ACCOUNTS_DATABASE.findIndex((account) => account.id === origin);
        const indexOfAccountDestination = IN_MEMORY_ACCOUNTS_DATABASE.findIndex((account) => account.id === destination);
        if (indexOfAccountOrigin >= 0 && indexOfAccountDestination >= 0) {
            IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountOrigin].balance -= amount;
            IN_MEMORY_ACCOUNTS_DATABASE[indexOfAccountDestination].balance += amount;
            return {
                httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_CREATED,
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
            httpStatusCodeResponse: constants_1.HTTP_STATUS_CODE_NOT_FOUND,
            message: 0,
        };
    }
}
exports.default = InMemoryDatabaseAccountRepository;
