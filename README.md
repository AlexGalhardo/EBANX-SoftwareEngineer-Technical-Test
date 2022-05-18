## Software Engineer Technical Test EBANX

#### Author: Alex Galhardo Vieira <aleexgvieira@gmail.com> / https://github.com/AlexGalhardo

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
- Jest for automatic/unit tests
- And of course, some googling, google translate, stackoverflow, documentation, and so on, you know...

## Keep in Mind
- There is no hidden agenda, if you code passes the tests, and you are happy about it:  you are done;
- Pay attention to the package/directory structure, naming and encapsulation;
- Separate your business logic from the HTTP transport layer;
- Keep your code simple, do not try to anticipate anything that is not part of the spec;
- Keep your code malleable, we may ask for modifications;
- AGAIN, Keep your code malleable, we may ask for modifications;
- Use version control, we would love to see your step-by-step process;
- Take your time, don’t rush it;
## Git Commits Semantic (Remember Alex!)
- Use atomic commits
- chore: add new chore in this commit
- docs: add new documentation in this commit
- feat: add new feature/update in this commit
- fix: fix some bug or error in this commit
- refactor: refactor code logic in this commit
- style: improve code quality in this commit
- test: improve testing/tests in this commit
## Instructions / To Dos

### Reset state before starting tests
- POST /reset
- 200 OK
- [ ] Done

### Get balance for non-existing account
- GET /balance?account_id=1234
- 404 0
- [ ] Done

### Create account with initial balance
- POST /event {"type":"deposit", "destination":"100", "amount":10}
- 201 {"destination": {"id":"100", "balance":10}}
- [ ] Done

### Deposit into existing account
- POST /event {"type":"deposit", "destination":"100", "amount":10}
- 201 {"destination": {"id":"100", "balance":20}}
- [ ] Done

### Get balance for existing account
- GET /balance?account_id=100
- 200 20
- [ ] Done

### Withdraw from non-existing account
- POST /event {"type":"withdraw", "origin":"200", "amount":10}
- 404 0
- [ ] Done

### Withdraw from existing account
- POST /event {"type":"withdraw", "origin":"100", "amount":5}
- 201 {"origin": {"id":"100", "balance":15}}
- [ ] Done

### Transfer from existing account
- POST /event {"type":"transfer", "origin":"100", "amount":15, "destination":"300"}
- 201 {"origin": {"id":"100", "balance":0}, "destination": {"id":"300", "balance":15}}
- [ ] Done

### Transfer from non-existing account
- POST /event {"type":"transfer", "origin":"200", "amount":15, "destination":"300"}
- 404 0
- [ ] Done

### Publish it to internet
- [ ] Deployed in Heroku

### Test API
- [ ] All tests passing at https://ipkiss.pragmazero.com/

### Send Source Code
- [ ] Send to: https://app3.greenhouse.io/tests/0398188f1ef1c31ea16d6be780318d61?utm_medium=email&utm_source=TakeHomeTest

## Some Prints