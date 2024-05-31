// src/controllers/AccountCLIController.ts

import { AccountService } from '../services/AccountService';

export class AccountCLIController {
    private accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    async getBalance(accountId: string): Promise<void> {
        try {
            const balance = await this.accountService.getBalance(accountId);
            console.log(`The balance for account ID ${accountId} is ${balance}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }
}
