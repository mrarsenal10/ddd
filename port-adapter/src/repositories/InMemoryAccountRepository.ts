// src/repositories/InMemoryAccountRepository.ts

import { AccountRepository, Account } from '../services/AccountServiceImpl';

export class InMemoryAccountRepository implements AccountRepository {
    private accounts: Account[] = [
        { id: '1', balance: 1000 },
        { id: '2', balance: 1500 }
    ];

    async findById(accountId: string): Promise<Account | null> {
        const account = this.accounts.find(account => account.id === accountId);
        return account ? account : null;
    }
}
