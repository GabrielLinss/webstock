import knex from '../database/connection';
import { Request, Response } from 'express';

class CategoryController {
    async index(req: Request, res: Response) {
        const categories = await knex('categories').select('*');

        return res.json(categories);
    }
}

export default CategoryController;