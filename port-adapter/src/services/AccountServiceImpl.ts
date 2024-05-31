// src/services/AccountServiceImpl.ts

import { AccountService } from './AccountService';

export class AccountServiceImpl implements AccountService {
    // Assuming we have some kind of repository or data source for accounts
    private accountRepository: AccountRepository;

    constructor(accountRepository: AccountRepository) {
        this.accountRepository = accountRepository;
    }

    async getBalance(accountId: string): Promise<number> {
        const account = await this.accountRepository.findById(accountId);
        if (!account) {
            throw new Error(`Account with ID ${accountId} not found`);
        }
        return account.balance;
    }
}

// Assuming we have an AccountRepository interface
export interface AccountRepository {
    findById(accountId: string): Promise<Account | null>;
}

// Assuming we have an Account type
export interface Account {
    id: string;
    balance: number;
}
