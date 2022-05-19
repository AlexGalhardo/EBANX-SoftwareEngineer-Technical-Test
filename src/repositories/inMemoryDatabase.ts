interface ICreateAccountWithInitialBalance {
    type: string;
    destination: string;
    amount: number;
}

export const inMemoryDatabase = {
    destination: {}
}