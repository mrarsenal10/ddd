// src/controllers/AccountCLIController.test.ts

import { AccountCLIController } from './AccountCLIController';
import { AccountService } from '../services/AccountService';

describe('AccountCLIController', () => {
    let mockAccountService: jest.Mocked<AccountService>;
    let controller: AccountCLIController;
    let consoleLogSpy: jest.SpyInstance;
    let consoleErrorSpy: jest.SpyInstance;

    beforeEach(() => {
        mockAccountService = {
            getBalance: jest.fn(),
        };
        controller = new AccountCLIController(mockAccountService);
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should print account balance for valid account ID', async () => {
        mockAccountService.getBalance.mockResolvedValue(1000);

        await controller.getBalance('1');

        expect(mockAccountService.getBalance).toHaveBeenCalledWith('1');
        expect(consoleLogSpy).toHaveBeenCalledWith('The balance for account ID 1 is 1000');
    });

    test('should print error message for invalid account ID', async () => {
        mockAccountService.getBalance.mockRejectedValue(new Error('Account with ID nonexistent not found'));

        await controller.getBalance('nonexistent');

        expect(mockAccountService.getBalance).toHaveBeenCalledWith('nonexistent');
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error: Account with ID nonexistent not found');
    });
});
