import {
    HTTP_STATUS_CODE_CREATED,
    HTTP_STATUS_CODE_NOT_FOUND,
    HTTP_STATUS_CODE_OK,
} from "../shared/constants";

export type typeDepositMessage = {
    destination: {
        id: string;
        balance: number;
    };
};

export type typeWithdrawMessage = {
    origin: {
        id: string;
        balance: number;
    };
};

export type typeTransferMessage = {
    origin: {
        id: string;
        balance: number;
    };
    destination: {
        id: string;
        balance: number;
    };
};

export type typeResetStateBeforeStartingTestsMethodResponse = {
    httpStatusCodeResponse: typeof HTTP_STATUS_CODE_OK;
    message: "OK";
};

export type typeGetBalanceMethodResponse = {
    httpStatusCodeResponse: typeof HTTP_STATUS_CODE_OK | typeof HTTP_STATUS_CODE_NOT_FOUND;
    message: number;
};

export type typeDepositMethodResponse = {
    httpStatusCodeResponse: typeof HTTP_STATUS_CODE_CREATED;
    message: typeDepositMessage;
};

export type typeWithdrawMethodResponse = {
    httpStatusCodeResponse: typeof HTTP_STATUS_CODE_CREATED | typeof HTTP_STATUS_CODE_NOT_FOUND;
    message: 0 | typeWithdrawMessage;
};

export type typeTransferMethodResponse = {
    httpStatusCodeResponse: typeof HTTP_STATUS_CODE_CREATED | typeof HTTP_STATUS_CODE_NOT_FOUND;
    message: 0 | typeTransferMessage;
};

export interface IAccountRepository {
    resetStateBeforeStartingTests(): typeResetStateBeforeStartingTestsMethodResponse;
    getBalance(accountId: string): typeGetBalanceMethodResponse;
    deposit(destination: string, amount: number): typeDepositMethodResponse;
    withdraw(destination: string, amount: number): typeWithdrawMethodResponse;
    transfer(origin: string, amount: number, destination: string): typeTransferMethodResponse;
}
