interface ICreateAccountWithInitialBalance {
    type: string;
    destination: string;
    amount: number;
}

export const inMemoryDatabase = [
    {
        destination: {
            id: "100",
            balance: 10
        }
    },
    {
        destination: {
            id: "200",
            balance: 10
        }
    }
];