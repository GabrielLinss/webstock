import knex from '../database/connection';
import { Request, Response } from 'express';

class ProductController {
    async index(req: Request, res: Response) {
        const { category_id } = req.query;
        
        let products;

        if (Number(category_id) > 0) {
            products = await knex('products')
                .join('categories', 'products.category_id', '=', 'categories.id')
                .where('products.category_id', Number(category_id))
                .orderBy('products.id', 'desc')
                .select('products.*', 'categories.name');
        } else {
            products = await knex('products')
                .join('categories', 'products.category_id', '=', 'categories.id')
                .orderBy('products.id', 'desc')
                .select('products.*', 'categories.name');
        }

        return res.json(products);
    }

    async store(req: Request, res: Response) {
        const { description, category_id, quantity, enter_at } = req.body;

        const data = { 
            description, 
            category_id, 
            quantity, 
            enter_at
        };

        const trx = await knex.transaction();
    
        const products = await trx('products').insert(data);

        await trx.commit();
    
        return res.status(201).json({ id: products[0], ...data });
    }
}

export default ProductController;