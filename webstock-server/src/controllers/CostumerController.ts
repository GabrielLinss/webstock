import knex from '../database/connection';
import { Request, Response } from 'express';

class CostumerController {
    async index(req: Request, res: Response) {
        const { name } = req.query;

        let costumers;

        if (name) {
            costumers = await knex('costumers')
                .where('costumers.name', 'LIKE', `%${name}%`)
                .orderBy('costumers.id', 'desc')
                .select('*');
        } else {
            costumers = await knex('costumers')
                .orderBy('costumers.id', 'desc')
                .select('*');
        }

        return res.json(costumers);
    }

    async store(req: Request, res: Response) {
        const { name, cpf, cnpj, created_at } = req.body;

        const data = {
            name,
            cpf,
            cnpj,
            created_at
        };

        const trx = await knex.transaction();

        const costumers = await trx('costumers').insert(data);

        await trx.commit();

        return res.status(201).json({ id: costumers[0], ...data });
    }
}

export default CostumerController;