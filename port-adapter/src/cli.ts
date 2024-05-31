// src/cli.ts

import { AccountServiceImpl } from './services/AccountServiceImpl';
import { InMemoryAccountRepository } from './repositories/InMemoryAccountRepository';
import { AccountCLIController } from './controllers/AccountCLIController';

// Set up the repository and service
const accountRepository = new InMemoryAccountRepository();
const accountService = new AccountServiceImpl(accountRepository);
const accountCLIController = new AccountCLIController(accountService);

// Parse command-line arguments
const args = process.argv.slice(2);
const command = args[0];
const accountId = args[1];

async function main() {
    switch (command) {
        case 'getBalance':
            if (accountId) {
                await accountCLIController.getBalance(accountId);
            } else {
                console.error('Error: accountId is required');
            }
            break;
        default:
            console.error(`Unknown command: ${command}`);
            console.error('Usage: cli.js <command> <accountId>');
            console.error('Commands:');
            console.error('  getBalance <accountId> - Get the balance of the specified account');
    }
}

main().catch(error => {
    console.error(`Unexpected error: ${error.message}`);
});
