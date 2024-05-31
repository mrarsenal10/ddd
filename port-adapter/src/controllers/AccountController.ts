// src/controllers/AccountController.ts

import { Request, Response } from 'express';
import { AccountService } from '../services/AccountService';

export class AccountController {
    private accountService: AccountService;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    async getBalance(req: Request, res: Response): Promise<void> {
        try {
            const accountId = req.params.accountId;
            const balance = await this.accountService.getBalance(accountId);
            res.json({ balance });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}
