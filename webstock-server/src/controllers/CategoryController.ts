import knex from '../database/connection';
import { Request, Response } from 'express';

class CategoryController {
    async index(req: Request, res: Response) {
        const categories = await knex('categories').orderBy('id', 'desc').select('*');

        return res.json(categories);
    }

    async store(req: Request, res: Response) {
        const { name } = req.body;

        const data = {
            name
        };

        const trx = await knex.transaction();

        const categories = await trx('categories').insert(data);

        await trx.commit();

        return res.status(201).json({ id: categories[0], ...data });
    }
}

export default CategoryController;