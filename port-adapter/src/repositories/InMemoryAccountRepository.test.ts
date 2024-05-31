// src/repositories/InMemoryAccountRepository.test.ts

import { InMemoryAccountRepository } from './InMemoryAccountRepository';
import { Account } from '../services/AccountServiceImpl';

describe('InMemoryAccountRepository', () => {
    let repository: InMemoryAccountRepository;

    beforeEach(() => {
        repository = new InMemoryAccountRepository();
    });

    test('should find account by ID', async () => {
        const account = await repository.findById('1');
        expect(account).toEqual({ id: '1', balance: 1000 });
    });

    test('should return null if account is not found', async () => {
        const account = await repository.findById('nonexistent');
        expect(account).toBeNull();
    });
});
