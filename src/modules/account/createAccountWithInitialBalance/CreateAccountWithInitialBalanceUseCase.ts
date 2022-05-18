interface IAuthenticateClient {
    username: string;
    password: string;
}

export class CreateAccountWithInitialBalanceUseCase {
    async execute({ username, password }: IAuthenticateClient) {

    }
}