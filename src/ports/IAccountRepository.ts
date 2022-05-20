export interface IAccountRepository {
    resetStateBeforeStartingTests(): void;
    createAccountWithInitialBalance(): void;
    depositIntoExistingAccount(): void;
    getBalanceForExistingAccount(): void;
    withdrawFromNonExistingAccount(): void;
    withdrawFromExistingAccount(): void;
    transferFromExistingAccount(): void;
    transferFromNonExistingAccount(): void;
}