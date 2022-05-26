## Software Engineer Technical Test EBANX

#### Author: Alex Galhardo Vieira
- aleexgvieira@gmail.com
- https://github.com/AlexGalhardo
- https://www.linkedin.com/in/alexgalhardo/
## Tools I Used
- Typescript
- LinuxMint 20.3
- Bash Terminal
- Git (of course)
- VSCode
- [Insomnia](https://insomnia.rest/download) to Test HTTP Requests
- [Heroku](https://www.heroku.com/) to Deploy API
- Node version: v16.14.2
- NPM version: 8.5.0
- ESLINT and Prettier for Typescript
- Jest for automatic/unit tests
- And of course, some googling, google translate, stackoverflow, documentation, spotify, and so on, you know...

## Keep in Mind
- Durability *IS NOT* a requirement, that is, you don’t need to use a database or persistence mechanism.
- There is no hidden agenda, if you code passes the tests, and you are happy about it:  you are done;
- Pay attention to the package/directory structure, naming and encapsulation;
- Separate your business logic from the HTTP transport layer;
- Keep your code simple, do not try to anticipate anything that is not part of the spec;
- Keep your code malleable, we may ask for modifications;
- AGAIN, Keep your code malleable, we may ask for modifications;
- Use version control, we would love to see your step-by-step process;
- Take your time, don’t rush it;
## Git Commits Semantic (Remember Alex!)
- Use atomic commits (I'm really bad at this, I confess)
- chore: add new chore in this commit
- docs: add new documentation in this commit
- feat: add new feature/update in this commit
- fix: fix some bug or error in this commit
- refactor: refactor code logic in this commit
- style: improve code quality in this commit
- test: improve testing/tests in this commit

## Software Architecture | Principles
- I used some Clean Architecture principles (I don't master the principles of clean architecture yet, I started studying these last few months)
- My main reference about this topic is the book "Arquitetura Lima na Prática" from Otavio Lemos: https://www.otaviolemos.com.br/
- Some boilerplate of this project I took from previous projects I've in my github for references
- The automated/unit tests weren't necessary I know, I did more for learning and practice a little TDD
## Instructions / To Dos

- <strong>Remember to save data in memory Alex!</strong>

### Reset state before starting tests
- POST /reset
- 200 OK
- [x] Done

### Get balance for non-existing account
- GET /balance?account_id=1234
- 404 0
- [x] Done

### Create account with initial balance
- POST /event {"type":"deposit", "destination":"100", "amount":10}
- 201 {"destination": {"id":"100", "balance":10}}
- [x] Done

### Deposit into existing account
- POST /event {"type":"deposit", "destination":"100", "amount":10}
- 201 {"destination": {"id":"100", "balance":20}}
- [x] Done

### Get balance for existing account
- GET /balance?account_id=100
- 200 20
- [x] Done

### Withdraw from non-existing account
- POST /event {"type":"withdraw", "origin":"200", "amount":10}
- 404 0
- [x] Done

### Withdraw from existing account
- POST /event {"type":"withdraw", "origin":"100", "amount":5}
- 201 {"origin": {"id":"100", "balance":15}}
- [x] Done

### Transfer from existing account
- POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}
- 201 {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}
- [x] Done

### Transfer from non-existing account
- POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}
- 404 0
- [x] Done

### Publish it to internet
- [x] Deployed in Heroku
- [x] API URL: https://alexgalhardo-api-ebanx.herokuapp.com/
- <strong>IMPORTANT: Heroku takes about 1-2 minutes to load the api when it has not received requests for a long time. If you can't connect, try again. </strong>

### Test API
- [x] All tests passing at https://ipkiss.pragmazero.com/

### Send Source Code
- [x] Send to: https://app3.greenhouse.io/tests/0398188f1ef1c31ea16d6be780318d61?utm_medium=email&utm_source=TakeHomeTest

## How to run this project locally
- Have sure to have NodeJS v16+ and NPM v8+ installed locally in your machine
- $ npm install
   - To start API Server Typescript Development: $ npm run dev
   - To build this project to JavaScript/Deploy: $ npm run build
   - To start API server with JavaScript: $ npm start
   - To run tests: $ npm test
   - To watch tests while develop/refactor: $ npm run test:watch

## How to use/test this API with INSOMNIA
- Download Insomnia Http Requests Client in: https://insomnia.rest/download
- Import file: INSOMNIA-TESTE-TECNICO-API-EBANX-HTTP-REQUESTS.json into your Insomnia
- Have fun
## Some Prints

![vscode-tests](https://user-images.githubusercontent.com/19540357/169660792-8c4c642c-586b-4779-aedc-23082d421386.png)
![insomnia-1](https://user-images.githubusercontent.com/19540357/169660793-ace2cb26-7d68-45fd-a14f-11c881447d8c.png)
![insomnia-2](https://user-images.githubusercontent.com/19540357/169660798-fdfef2a6-e949-4479-88d4-963ea5ff8860.png)
![ebanx-test-2](https://user-images.githubusercontent.com/19540357/169660786-89c93f33-5009-4940-a240-c4974ac72e0d.png)
![ebanx-test-1](https://user-images.githubusercontent.com/19540357/169660790-7e8573a8-3cb1-404d-8467-4b102aa6b806.png)
![terminal-heroku-1](https://user-images.githubusercontent.com/19540357/169660795-d98be922-32e0-4620-a11a-8bb35ebe903c.png)
![terminal-heroku-2](https://user-images.githubusercontent.com/19540357/169660796-5a0bf599-1fad-4ef0-a809-17b87f885be4.png)
![terminal-heroku-3](https://user-images.githubusercontent.com/19540357/169660812-5638e9ae-9e5b-4385-8ffd-66e0c718bb62.png)

## My Main Reference to build this project this way
- TheWisePad from Otavios Lemos book "Arquitetura Limpa Na Prática": https://github.com/otaviolemos/thewisepad-core
- ![tests-thewisepad](https://user-images.githubusercontent.com/19540357/169660799-bb09ec33-81d1-43fd-9b6c-3aade5ec6187.png)

