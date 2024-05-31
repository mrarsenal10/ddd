// src/app.ts

import express from 'express';
import { AccountController } from './controllers/AccountController';
import { AccountServiceImpl } from './services/AccountServiceImpl';
import { InMemoryAccountRepository } from './repositories/InMemoryAccountRepository'; // Assume this is an implementation of AccountRepository

const app = express();
const accountRepository = new InMemoryAccountRepository();
const accountService = new AccountServiceImpl(accountRepository);
const accountController = new AccountController(accountService);

app.get('/accounts/:accountId/balance', (req, res) => accountController.getBalance(req, res));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
