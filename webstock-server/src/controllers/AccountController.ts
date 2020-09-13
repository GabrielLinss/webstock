import knex from '../database/connection';
import { Request, Response } from 'express';

class AccountController {
    async index(req: Request, res: Response) {
        const { name } = req.query;

        let accounts;

        if (name) {
            accounts = await knex('accounts')
                .join('costumers', 'accounts.costumer_id', '=', 'costumers.id')
                .where('costumers.name', 'LIKE', `%${name}%`)
                .orderBy('accounts.id', 'desc')
                .select('accounts.*');
        } else {
            accounts = await knex('accounts')
                .orderBy('accounts.id', 'desc')
                .select('*');
        }

        return res.json(accounts);
    }

    async store(req: Request, res: Response) {
        const { costumer_id, balance, debt, created_at } = req.body;

        const data = {
            costumer_id,
            balance,
            debt,
            created_at
        };

        const trx = await knex.transaction();

        const accounts = await trx('accounts').insert(data);

        await trx.commit();

        return res.status(201).json({ id: accounts[0], ...data });
    }
}

export default AccountController;