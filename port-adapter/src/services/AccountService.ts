// src/services/AccountService.ts

export interface AccountService {
    getBalance(accountId: string): Promise<number>;
}
